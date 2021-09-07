import crypto from 'crypto-js'

/**
 * 加密
 * @param {*} pwd
 * @returns
 */
const encrypt = (pwd) => {
  const key = crypto.enc.Utf8.parse('9F904A7244E62107')
  const srcs = crypto.enc.Utf8.parse(pwd)
  const encrypted = crypto.AES.encrypt(srcs, key, {
    mode: crypto.mode.ECB,
    padding: crypto.pad.Pkcs7
  })
  return encrypted.toString()
}

export {
  encrypt
}
