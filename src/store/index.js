import Vue from 'vue'
import Vuex from 'vuex'
import IndexModule from './modules/index'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    index: IndexModule
  },
  strict: debug
})
