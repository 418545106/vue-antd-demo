import request from '@/axios'

/**
 * 根据字典父级id获取到子项
 * @param {*} dictId 字典父级id
 * @param {*} where 查询条件
 */
export const getOption = (url, where) => {
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
