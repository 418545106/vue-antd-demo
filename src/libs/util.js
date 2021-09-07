import store from '@/store'

/**
 * 判断该父级路由是否包含子路由，以及是否只包含一个子路由
 * @param {*} item 路由list
 */
export const hasChild = (item) => {
  return item.children && item.children.length !== 0
}
/**
 * 传入路由List返回菜单列表格式
 * @param {Array} routerList 路由List
 * @returns 菜单列表
 */
export const getMenu = (routerList, basePath) => {
  if (!routerList) return []
  const res = []
  routerList.forEach(item => {
    // 如果roleList为空则不需要校验
    // 如果hideInMenu=false 不需要在菜单中隐藏
    if ((!item.meta || !item.meta.hideInMenu)) {
      const obj = {
        icon: (item.meta && item.meta.icon) || '',
        name: item.name,
        path: (basePath ? basePath + '/' : '') + item.path,
        title: (item.meta && item.meta.title) || ''
      }
      if (hasChild(item)) {
        obj.children = getMenu(item.children, obj.path)
      }
      res.push(obj)
    }
  })
  return res
}

/**
 * 判断当前路径是否为指定路径
 * @param {*} route current route
 * @param {*} path path
 */
export const isCurrentPath = (route, path) => {
  return route.path === path
}

/**
 * 判断当前tag是否在tagsList中
 * @param {Array} tagsList
 * @param {*} tag
 */
export const tagHasExist = (tagsList, tag) => {
  let res = false
  tagsList.forEach(item => {
    if (item.name === tag.name) res = true
  })
  return res
}

/**
 * 解析标签的title属性
 * @param {*} tag
 */
export const parsingTagTitle = (tag) => {
  if (tag.meta && tag.meta.title) {
    tag.title = tag.meta.title
  } else {
    const menusName = store.getters.getAccessMenuName
    for (let i = 0; i < menusName.length; i++) {
      const menu = menusName[i]
      if (menu.name === tag.name) {
        tag.title = menu.title
        return
      }
    }
  }
}

/**
 * 初始化tagsList(只有一个首页)
 */
export const initTagsList = () => {
  return [{ name: 'home', title: '首页', path: process.env.VUE_APP_HOME_PATH }]
}

/**
 * 寻找关闭后下一个focus的标签
 * @param {*} tagsList tagsList
 * @param {*} name 当前即将关闭的tag
 */
export const getNextRoute = (tagsList, name) => {
  let res = {}
  if (tagsList.length === 2) {
    // 如果当前标签页只有2个，则关闭当前页之后跳转主页(home)
    res = tagsList[0]
  } else {
    const index = tagsList.findIndex(item => item.path === name)
    if (index === tagsList.length - 1) {
      // 如果关闭的是最末尾的页签,则焦点自动移至前一个页签
      res = tagsList[tagsList.length - 2]
    } else {
      // 如果关闭的是中间页签，则焦点移至下一个页签
      res = tagsList[index + 1]
    }
  }
  return res
}

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }
    return result
  }
}
