export const toTree = (array) => {
  const result = []
  if (!Array.isArray(array)) {
    return result
  }
  array.forEach(item => {
    delete item.children
  })
  const map = {}
  array.forEach(item => {
    map[item.zid] = item
  })
  array.forEach(item => {
    const parent = map[item.zpid]
    if (parent) {
      (parent.children || (parent.children = [])).push(item)
    } else {
      result.push(item)
    }
  })
  return result
}

/**
 * 获取含children的数据类型的id的item
 * @param treeData
 * @param id
 * @returns {null}
 */
export const getTreeItem = (treeData, id) => {
  let result = null
  if (!treeData) {
    return
  }
  for (let i = 0; i < treeData.length; i++) {
    if (result !== null) {
      break
    }
    const item = treeData[i]
    if (item.zid === id) {
      result = item
      break
    } else if (item.children) {
      result = getTreeItem(item.children, id)
    }
  }
  return result
}
