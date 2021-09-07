const Base64 = require('js-base64').Base64

/**
 * 添加图片水印,仅支持腾讯云cos图片
 * @param {*} url cos图片url
 * @param {*} text 文字水印
 */
export const watermark = (url, text) => {
  const baseStr = Base64.encode(text)
  const safeStr = baseStr.replace(/\//g, '_').replace(/\+/g, '-')
  return url + '&watermark/2/text/' + safeStr + '/fontsize/30'
}
