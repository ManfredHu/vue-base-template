import { shallowMount, createLocalVue } from '@vue/test-utils'
import Dialog from '@/plugin/Dialog/index.vue'

// 使用插件
const localVue = createLocalVue()

describe('plugin Dialog.vue', () => {
  it('renders suc', done => {
    const wrapper = shallowMount(Dialog, {
      localVue,
      propsData: {
        text: ['Dialog', 'Dialog', '12345678901234567890'] // 3行
      }
    })
    const showTime = 1000
    wrapper.setData({ showTime }) // 展示1S
    wrapper.setData({ showMask: true })
    wrapper.vm.show()
    expect(wrapper.find('.dialog-bd').is('div')).toBe(true)
    expect(wrapper.find('.dialog-bd').html()).toBe(
      '<div class="dialog-bd">Dialog<br>Dialog<br>12345678901234567890</div>'
    )
    setTimeout(() => {
      // 1S后消失
      expect(wrapper.find('.dialog-bd').exists()).toBe(false)
      done()
    }, showTime)
  })
})
