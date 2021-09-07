import axios from 'axios'
import store from '@/store'
import router from './router'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 1000000
})

// 是否正在刷新的标记
let isRefreshing = false
// 重试队列，每一项将是一个待执行的函数形式
let requestsList = []

function refreshToken() {
  return request.post('/demo/authorize/refreshToken?refreshToken=' + store.getters.getRefreshToken)
}

function showErrorMsg(msg) {
  if (!store.getters.showing) {
    store.commit('show')
    // show message
    store.commit('hide')
  }
}

// 前置拦截
request.interceptors.request.use(
  config => {
    const token = store.getters.getToken
    if (token) {
      config.headers['Authorization'] = token
    }
    return config
  }
)

// 后置拦截
request.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    const response = error.response
    if (response.status === 401) {
      const config = error.config
      if (!isRefreshing) {
        isRefreshing = true
        return refreshToken().then(res => {
          const { accessToken } = res.data
          store.commit('setToken', accessToken)
          requestsList.forEach(cb => cb(accessToken))
          requestsList = []
          config.headers['Authorization'] = accessToken
          return request(config)
        }).catch(res => {
          console.error('refreshtoken error =>', res)
        }).finally(() => {
          isRefreshing = false
        })
      } else {
        // 正在刷新token，将返回一个未执行resolve的promise
        return new Promise((resolve) => {
          // 将resolve放进队列，用一个函数形式来保存，等token刷新后直接执行
          requestsList.push((accessToken) => {
            config.headers['Authorization'] = accessToken
            resolve(request(config))
          })
        })
      }
    } else if (response.status === 402) {
      store.commit('cleanToken')
      router.push({ name: 'login' })
    } else if (response.status === 400) {
      const msgList = response.data.violations
      const str = msgList.map(e => e.message).join(';')
      showErrorMsg(str)
      return Promise.reject(error)
    } else {
      showErrorMsg(response.data.detail)
      return Promise.reject(error)
    }
  }
)

export default request
