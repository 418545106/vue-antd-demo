import request from '@/axios'
// import qs from 'qs'

export const login = (loginForm) => {
  // const data = qs.stringify(loginForm)
  return new Promise((resolve, reject) => {
    request({
      headers: {
        'Content-Type': 'application/json'
      },
      url: '/authentication/form',
      // url: '/demo/authorize/token',
      method: 'post',
      data: loginForm
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

export const logout = () => {
  return new Promise((resolve, reject) => {
    request({
      url: '/sysLogout',
      method: 'get'
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

export const getRoleMenu = () => {
  return new Promise((resolve, reject) => {
    request({
      url: '/system/user/info',
      method: 'get'
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

export const getAuth = () => {
  return new Promise((resolve, reject) => {
    request({
      url: '/system/menu/selectUserAuth',
      method: 'get'
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}
