/**
 * 校验文件上传列表是否存在需要上传的文件 (存在返回true)
 * @param {*} file 上传文件的空间对象
 */
export const hasFileUpload = (file) => {
  for (let i = 0; i < file.uploadFiles.length; i++) {
    if (!file.uploadFiles[i].id) {
      return true
    }
  }
  return false
}
