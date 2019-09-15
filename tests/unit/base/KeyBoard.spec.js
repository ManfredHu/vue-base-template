import { shallowMount, createLocalVue } from '@vue/test-utils'
import KeyBoard from '@/components/base/KeyBoard.vue'
import vTap from '@/directives/tap'
import longpress from '@/directives/longpress'
import { Phone } from 'hu-tool'

jest.setTimeout(10000)

// 使用插件
const localVue = createLocalVue()
localVue.directive('tap', vTap)
localVue.directive('longpress', longpress)

describe('KeyBoard.vue', () => {
  it('renders suc', () => {
    const wrapper = shallowMount(KeyBoard, {
      localVue
    })
    let phoneText = ''
    wrapper.setProps({ typing: 1 })
    wrapper.setProps({ placeHolder: '请输入手机号码' })
    wrapper.setProps({ phoneText })
    wrapper.setProps({
      keyPress: onKeyboardPress
    })

    expect(wrapper.find('.keyboard-input > .phoneInput').is('input')).toBe(true)
    expect(
      wrapper.find('.keyboard-input > .phoneInput').attributes().placeholder
    ).toBe('请输入手机号码')
    // 假设点击12次1
    const setNumLen = 12
    for (let i = 0; i < setNumLen; i++) {
      wrapper.find('.shell > .btn').trigger('click')
    }
    // 只有11个1
    expect(wrapper.props().phoneText).toBe('1'.repeat(11))

    // 删除1个只有10个1
    wrapper.find('.deleteBtn').trigger('click')
    expect(wrapper.props().phoneText).toBe('1'.repeat(10))

    // 点击后浮层消失了
    wrapper.find('.hideBtn').trigger('click')
    expect(wrapper.find('.keyboard').exists()).toBe(false)

    function onKeyboardPress(e) {
      console.log('event', e.type, e.value)
      if (e.type === 'enter') {
        if (Phone.getPurePhone(phoneText).length < 11) {
          phoneText += e.value
        }
      } else if (e.type === 'delete') {
        const tt = phoneText
        phoneText = tt.length > 1 ? tt.substr(0, tt.length - 1) : ''
      } else if (e.type === 'clear') {
        phoneText = ''
      } else if (e.type === 'finish' || e.type === 'cancel') {
        if (!phoneText) {
          this.$showDialog({
            text: ['请输入手机号'],
            showTime: 2000
          })
        }
        wrapper.setProps({ typing: 0 })
      }
      wrapper.setProps({ phoneText })
    }
  })
})
