export default {
  state: {
    flag: false
  },
  getters: {
    showing: (state) => {
      return state.flag
    }
  },
  mutations: {
    show(state) {
      state.flag = true
    },
    hide(state) {
      state.flag = false
    }
  }
}
