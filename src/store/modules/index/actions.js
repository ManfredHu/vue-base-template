import {
  getIndexConfig
} from '@/api/index'

export default {
  addNum({
    commit
  }, newValue) {
    commit('NUM_UPDATED', newValue)
  },
  async getIndexConfig() {
    const result = await getIndexConfig()
    console.log(result)
  }
}
