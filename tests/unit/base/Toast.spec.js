import { shallowMount, createLocalVue } from '@vue/test-utils'
import Toast from '@/plugin/Toast/index.vue'

const localVue = createLocalVue()

describe('plugin Toast.vue', () => {
  it('renders loading suc', done => {
    const wrapper = shallowMount(Toast, {
      localVue
    })
    const showTime = 1000
    wrapper.setData({ showTime }) // 展示1S
    wrapper.setData({ type: 'loading' })
    wrapper.setProps({ text: ['数据加载中', '数据加载中2'] })
    wrapper.vm.show()
    expect(wrapper.find('.weui-icon_toast.weui-loading').is('i')).toBe(true)
    expect(wrapper.find('.weui-toast__content').html()).toBe(
      '<p class="weui-toast__content">数据加载中<br>数据加载中2</p>'
    )
    setTimeout(() => {
      // 1S后消失
      expect(wrapper.find('.weui-icon_toast.weui-loading').exists()).toBe(false)
      done()
    }, showTime)
  })

  it('renders success suc', done => {
    const wrapper = shallowMount(Toast, {
      localVue
    })
    const showTime = 1000
    wrapper.setData({ showTime }) // 展示1S
    wrapper.setData({ type: 'suc' })
    wrapper.setProps({ text: ['操作成功'] })
    wrapper.vm.show()
    expect(
      wrapper.find('.weui-icon_toast.weui-icon-success-no-circle').is('i')
    ).toBe(true)
    expect(wrapper.find('.weui-toast__content').html()).toBe(
      '<p class="weui-toast__content">操作成功</p>'
    )
    setTimeout(() => {
      // 1S后消失
      expect(
        wrapper.find('.weui-icon_toast.weui-icon-success-no-circle').exists()
      ).toBe(false)
      done()
    }, showTime)
  })
})
