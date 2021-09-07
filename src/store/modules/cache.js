export default {
  state: {
    cache: new Map()
  },
  getters: {
    loadCache: (state) => (key) => {
      return state.cache[key]
    }
  },
  mutations: {
    saveCache(state, payload) {
      state.cache[payload.key] = payload.value
    }
  }
}
