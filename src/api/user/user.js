import request from '@/axios'

export const addUser = (user) => {
  return new Promise((resolve, reject) => {
    request({
      url: '/system/user',
      method: 'post',
      data: user
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

export const getUser = (id) => {
  return new Promise((resolve, reject) => {
    request({
      url: '/system/user/' + id,
      method: 'get'
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

export const updateUser = (user) => {
  return new Promise((resolve, reject) => {
    request({
      url: '/system/user/update',
      method: 'post',
      data: user
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

export const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    request({
      url: '/system/user/delete',
      method: 'get',
      params: { id: id }
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}
