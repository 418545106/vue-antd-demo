import request from '@/axios'

export const dictChildren = (dictId) => {
  return new Promise((resolve, reject) => {
    request({
      url: '/system/dict/parent/' + dictId,
      method: 'get'
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}
