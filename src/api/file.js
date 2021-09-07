import request from '@/axios'
import qs from 'qs'

export const upload = (file) => {
  const data = qs.stringify(file)
  return new Promise((resolve, reject) => {
    request({
      url: '/file',
      method: 'post',
      data
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

export const getFileByObjName = (name) => {
  return new Promise((resolve, reject) => {
    request({
      url: '/file/objName/' + name,
      method: 'get'
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

/**
 * 上传文件到后台
 * @param {*} file
 */
export const saveFile = (file) => {
  return new Promise((resolve, reject) => {
    request({
      headers: { 'Content-Type': 'multipart/form-data' },
      url: '/local/upload',
      data: file,
      method: 'post'
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

/**
 * 上传文件到后台(携带数据)
 * @param {*} file
 */
export const saveFileByFormData = (formData) => {
  return new Promise((resolve, reject) => {
    request({
      headers: { 'Content-Type': 'multipart/form-data' },
      url: '/file',
      data: formData,
      method: 'post'
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

/**
 * 根绝id删除文件
 * @param {*} fileId
 */
export const removeFile = (fileId) => {
  return new Promise((resolve, reject) => {
    request({
      url: '/file/' + fileId,
      method: 'delete'
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}
