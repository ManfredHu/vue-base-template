import { mount, createLocalVue } from '@vue/test-utils'
import DistpickerDemo from '@/views/DistpickerDemo.vue'
import vTap from '@/directives/tap'

jest.setTimeout(10000)

// 使用插件
const localVue = createLocalVue()
localVue.directive('tap', vTap)

describe('Distpicker.vue', () => {
  it('renders suc', () => {
    const wrapper = mount(DistpickerDemo, {
      localVue
    })
    // 显示组件
    wrapper.setData({
      isShow: true
    })

    expect(wrapper.find('.distpicker-address-wrapper').is('div')).toBe(true)
    expect(wrapper.find('.distpicker-title').text()).toBe('选择所在区域')

    const list = wrapper.findAll('.address-header ul > li')
    const texts = ['广东省', '深圳市', '区']
    for (let i = 0; i < list.length; i++) {
      const text = list.at(i).text()
      console.log(text)
      expect(text).toBe(texts[i])
    }
    wrapper.find('.address-container ul > li').trigger('click')
    const str = wrapper.find('.content-show').text()
    expect(JSON.stringify(JSON.parse(str))).toBe(
      '{"province":"广东省","city":"深圳市","area":"罗湖区"}'
    )
  })
})
