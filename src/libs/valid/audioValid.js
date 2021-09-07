/**
 * 检查文件类型是否为音频
 * @param {*} file
 * @returns
 */
export const checkAudioType = (file) => {
  if (!file.raw.type.startsWith('audio/')) {
    return false
  }
  return true
}
