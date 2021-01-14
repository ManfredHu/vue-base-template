import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

// Dynamic page, like activity page
const SwiperDemo = () =>
  import(/* webpackChunkName: "SwiperDemo" */ './views/SwiperDemo.vue')
const DialogDemo = () =>
  import(/* webpackChunkName: "DialogDemo" */ './views/DialogDemo.vue')
const ConfirmDemo = () =>
  import(/* webpackChunkName: "ConfirmDemo" */ './views/ConfirmDemo.vue')
const ToTopDemo = () =>
  import(/* webpackChunkName: "ToTopDemo" */ './views/ToTopDemo.vue')
const KeyBoardDemo = () =>
  import(/* webpackChunkName: "KeyBoardDemo" */ './views/KeyBoardDemo.vue')
const DistpickerDemo = () =>
  import(/* webpackChunkName: "DistpickerDemo" */ './views/DistpickerDemo.vue')
const ToastDemo = () =>
  import(/* webpackChunkName: "ToastDemo" */ './views/ToastDemo.vue')
const VCodeDemo = () =>
  import(/* webpackChunkName: "VCodeDemo" */ './views/VCodeDemo.vue')
const IdCardDemo = () =>
  import(/* webpackChunkName: "IdCardDemo" */ './views/IdCardDemo.vue')

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/Swiper'.toLowerCase(),
    name: 'Swiper',
    component: SwiperDemo
  },
  {
    path: '/Dialog'.toLowerCase(),
    name: 'Dialog',
    component: DialogDemo
  },
  {
    path: '/Confirm'.toLowerCase(),
    name: 'Confirm',
    component: ConfirmDemo
  },
  {
    path: '/ToTop'.toLowerCase(),
    name: 'ToTop',
    component: ToTopDemo
  },
  {
    path: '/KeyBoard'.toLowerCase(),
    name: 'KeyBoard',
    component: KeyBoardDemo
  },
  {
    path: '/Distpicker'.toLowerCase(),
    name: 'Distpicker',
    component: DistpickerDemo
  },
  {
    path: '/Toast'.toLowerCase(),
    name: 'Toast',
    component: ToastDemo
  },
  {
    path: '/VCode'.toLowerCase(),
    name: 'VCode',
    component: VCodeDemo
  },
  {
    path: '/IdCard'.toLowerCase(),
    name: 'IdCard',
    component: IdCardDemo
  }
]

// 下面的代码有在调试模式下面才会运行, 正式发布的时候不会运行
// if (process.env.NODE_ENV === 'development') {
//   // Component preview
//   const componentsList = [
//     '/com/Dialog',
//     '/com/Confirm',
//     '/com/Swiper',
//     '/com/Top',
//     '/com/KeyBoard'
//   ]
//   componentsList.forEach(item => {
//     routes.push({
//       path: item.toLocaleLowerCase(),
//       component() {
//         return import(`./components/${item.split('/').pop()}`)
//       }
//     })
//   })
// }

export default new Router({
  routes,
  scrollBehavior: () => ({ y: 0 })
})
