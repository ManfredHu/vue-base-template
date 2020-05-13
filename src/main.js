import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import basePlugin from '@/plugin/basePlugin'
import Dialog from '@/plugin/Dialog'
import Confirm from '@/plugin/Confirm'
import Toast from '@/plugin/Toast'

Vue.use(basePlugin)
Vue.use(Dialog)
Vue.use(Confirm)
Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// https://seminelee.github.io/2016/08/29/bfcache/
window.addEventListener('pageshow', function (e) {
  if (e.persisted) {
    window.location.reload()
  }
})
