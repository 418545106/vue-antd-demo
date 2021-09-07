/**
 * 校验是否为数字（可以为空）
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 * @param {*} source
 * @param {*} options
 */
export const numberRequired = (rule, value, callback, source, options) => {
  if (value && !/^\d*$/.test(value)) {
    callback(new Error('请输入数字'))
  }
  callback()
}

/**
 * 校验是否为数字但要带有小数点（可以为空）
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 * @param {*} source
 * @param {*} options
 */
export const numberDecimalRequired = (rule, value, callback, source, options) => {
  if (value && !/^\d+\.?(\d{1,2})?$/.test(value)) {
    callback(new Error('请输入数字'))
  }
  callback()
}
