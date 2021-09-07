import { loadToken, saveToken, removeToken, loadRefreshToken, saveRefreshToken, removeRefreshToken } from '@/libs/auth'

export default {
  state: {
    token: loadToken(),
    refreshToken: loadRefreshToken(),
    nickName: ''
  },
  getters: {
    getToken(state) {
      return state.token
    },
    getRefreshToken(state) {
      return state.refreshToken
    },
    getNickName(state) {
      return state.nickName
    }
  },
  mutations: {
    setToken(state, t) {
      const token = 'Bearer ' + t
      state.token = token
      saveToken(token)
    },
    setRefreshToken(state, refreshToken) {
      state.refreshToken = refreshToken
      saveRefreshToken(refreshToken)
    },
    cleanToken(state) {
      state.token = ''
      removeToken()
      removeRefreshToken()
    },
    setNickName(state, name) {
      state.nickName = name
    }
  },
  actions: {
    sysLogout({ commit, dispatch }) {
      commit('cleanToken')
      dispatch('cleanMenuRouter')
    }
  }
}
