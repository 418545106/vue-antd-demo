import jwtDecode from 'jwt-decode'
import store from '@/store'

export default {
  state: {
    buttonAuth: [],
    isAuth: false
  },
  getters: {
    hasRole: (state) => (roleName) => {
      return state.buttonAuth.includes(roleName)
    },
    isAuthed: (state) => {
      return state.isAuth
    }
  },
  mutations: {
    initAuth(state, buttonAuth) {
      state.buttonAuth = buttonAuth
    },
    cleanAuth(state) {
      state.buttonAuth = []
    },
    addAuth(state, more) {
      state.buttonAuth.push.apply(state.buttonAuth, more)
    },
    authed(state) {
      state.isAuth = true
    }
  },
  actions: {
    async authorization({ commit, dispatch }) {
      commit('authed')
      await Promise.all([dispatch('changeMenu'), dispatch('changeAuth')])
    },
    async changeAuth({ commit, dispatch }) {
      const auth = await dispatch('getAuth')
      commit('initAuth', auth)
    },
    getAuth() {
      return new Promise(resolve => {
        const token = store.getters.getToken
        const data = jwtDecode(token)
        resolve(data.authorities)
      })
    }
  }
}
