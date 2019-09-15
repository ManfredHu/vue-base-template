import { shallowMount, createLocalVue } from '@vue/test-utils'
import VCode from '@/components/base/VCode.vue'
import vTap from '@/directives/tap'
import longpress from '@/directives/longpress'

jest.setTimeout(10000)

// 使用插件
const localVue = createLocalVue()
localVue.directive('tap', vTap)
localVue.directive('longpress', longpress)

describe('VCode.vue', () => {
  it('renders suc', () => {
    const wrapper = shallowMount(VCode, {
      localVue
    })
    const vCodeNums = ['', '', '', '', '', '']
    wrapper.setProps({ typing: 1 })
    wrapper.setProps({ vCodeNums })
    wrapper.setProps({ phone: '13800138000' })
    wrapper.setProps({
      keyPress: onKeyboardPress
    })

    expect(wrapper.find('.vcode').is('div')).toBe(true)
    expect(wrapper.find('.vcode-hd-desc').text()).toBe(
      '验证码已发送到138 0013 8000的手机'
    )
    const list = wrapper.findAll('.vcode-hd-numlist > li')
    for (let i = 0; i < list.length; i++) {
      expect(list.at(i).text()).toBe('')
    }

    // 假设点击6次1
    const setNumLen = vCodeNums.length
    for (let i = 0; i < setNumLen; i++) {
      wrapper.find('.vcode-keyboard-num > .btn').trigger('click')
    }

    // 6个dom都是1
    for (let i = 0; i < setNumLen; i++) {
      expect(list.at(i).text()).toBe('1')
    }

    // 删除3个
    wrapper.find('.deleteBtn').trigger('click')
    wrapper.find('.deleteBtn').trigger('click')
    wrapper.find('.deleteBtn').trigger('click')

    // 还剩3个
    for (let i = 0; i < 6 - 3; i++) {
      expect(list.at(i).text()).toBe('1')
    }

    // 点击后浮层消失了
    wrapper.find('.finishBtn').trigger('click')
    expect(wrapper.find('.vcode').exists()).toBe(false)

    function onKeyboardPress(e) {
      console.log('event', e.type, e.value)
      if (e.type === 'enter') {
        for (let i = 0, len = this.vCodeNums.length; i < len; i++) {
          if (this.vCodeNums[i] === '') {
            this.$set(this.vCodeNums, i, `${e.value}`)
            break
          }
        }
      } else if (e.type === 'delete') {
        for (let i = this.vCodeNums.length - 1; i >= 0; i--) {
          if (this.vCodeNums[i] !== '') {
            this.$set(this.vCodeNums, i, '')
            break
          }
        }
      } else if (e.type === 'clear') {
        for (let i = this.vCodeNums.length - 1; i >= 0; i--) {
          this.$set(this.vCodeNums, i, '')
        }
      } else if (e.type === 'finish' || e.type === 'cancel') {
        wrapper.setProps({ typing: 0 })
      }
    }
  })

  it('idcard renders suc', () => {
    const wrapper = shallowMount(VCode, {
      localVue,
      propsData: {
        type: 'idcard'
      }
    })
    const idCardNumsTemp = new Array(18)
    wrapper.setProps({ typing: 1 })
    wrapper.setProps({ vCodeNums: idCardNumsTemp.fill('') })
    wrapper.setProps({
      keyPress: onKeyboardPress
    })

    expect(wrapper.find('.vcode').is('div')).toBe(true)
    expect(wrapper.find('.vcode-hd-title').text()).toBe('本人身份证号码校验')
    expect(wrapper.find('.vcode-hd-desc').text()).toBe('身份信息仅用于手机购买')

    const list = wrapper.findAll('.vcode-hd-numlist > li')
    for (let i = 0; i < list.length; i++) {
      expect(list.at(i).text()).toBe('')
    }

    // 假设点击18次1
    const setNumLen = idCardNumsTemp.length
    for (let i = 0; i < setNumLen; i++) {
      wrapper.find('.vcode-keyboard-num > .btn').trigger('click')
    }

    // dom都是1
    for (let i = 0; i < setNumLen; i++) {
      expect(list.at(i).text()).toBe('1')
    }

    // 删除3个
    wrapper.find('.deleteBtn').trigger('click')
    wrapper.find('.deleteBtn').trigger('click')
    wrapper.find('.deleteBtn').trigger('click')

    // 还剩3个
    for (let i = 0; i < setNumLen - 3; i++) {
      expect(list.at(i).text()).toBe('1')
    }

    // 点击后浮层消失了
    wrapper.find('.finishBtn').trigger('click')
    expect(wrapper.find('.vcode').exists()).toBe(false)

    function onKeyboardPress(e) {
      console.log('event', e.type, e.value)
      if (e.type === 'enter') {
        for (let i = 0, len = this.vCodeNums.length; i < len; i++) {
          if (this.vCodeNums[i] === '') {
            this.$set(this.vCodeNums, i, `${e.value}`)
            break
          }
        }
      } else if (e.type === 'delete') {
        for (let i = this.vCodeNums.length - 1; i >= 0; i--) {
          if (this.vCodeNums[i] !== '') {
            this.$set(this.vCodeNums, i, '')
            break
          }
        }
      } else if (e.type === 'clear') {
        for (let i = this.vCodeNums.length - 1; i >= 0; i--) {
          this.$set(this.vCodeNums, i, '')
        }
      } else if (e.type === 'finish' || e.type === 'cancel') {
        wrapper.setProps({ typing: 0 })
      }
    }
  })
})
