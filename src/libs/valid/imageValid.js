/**
 * 校验文件对象是否为图片类型
 * @param {*} file
 */
export const checkImageType = (file) => {
  if (!file.raw.type.startsWith('image/')) {
    return false
  }
  return true
}
