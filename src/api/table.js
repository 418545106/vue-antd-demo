import request from '@/axios'

export const tableQueryByGet = (url, where) => {
  return new Promise((resolve, reject) => {
    request({
      url: url,
      method: 'get',
      params: where
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

export const tableQueryByPost = (url, where) => {
  return new Promise((resolve, reject) => {
    request({
      url: url,
      method: 'post',
      data: where
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}
