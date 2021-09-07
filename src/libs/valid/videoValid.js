/**
 * 检查文件类型是否为视频
 * @param {*} file
 * @returns
 */
export const checkVideoType = (file) => {
  if (!file.raw.type.startsWith('video/')) {
    return false
  }
  return true
}
