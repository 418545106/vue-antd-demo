
/**
 * 判断str是否存在值
 * 存在值返回 true 不存在返回 false
 * @param {*} str
 */
export const hasValue = (str) => {
  return str !== null && str !== '' && str !== undefined
}
