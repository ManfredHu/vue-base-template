import { shallowMount, createLocalVue } from '@vue/test-utils'
import Confirm from '@/plugin/Confirm/index.vue'
import vTap from '@/directives/tap'

jest.setTimeout(10000)
// 使用插件
const localVue = createLocalVue()
localVue.directive('tap', vTap)

describe('plugin Confirm.vue', () => {
  it('renders suc', () => {
    const wrapper = shallowMount(Confirm, {
      localVue
    })

    function hide() {
      wrapper.vm.hide()
    }

    wrapper.setData({ isShow: true })
    wrapper.setData({ title: 'this is title' })
    wrapper.setData({ desc: 'this is description' })
    wrapper.setData({ lBtnEvent: hide })
    wrapper.setData({ rBtnEvent: hide })
    wrapper.vm.show()

    expect(wrapper.find('.comfirm').is('div')).toBe(true)
    expect(wrapper.find('.comfirm-title').text()).toBe('this is title')
    expect(wrapper.find('.comfirm-bd').text()).toBe('this is description')

    // 点击后浮层消失了
    wrapper.find('.comfirm-btn_primary.comfirm-btn').trigger('click')
    expect(wrapper.find('.comfirm').exists()).toBe(false)
  })
})
