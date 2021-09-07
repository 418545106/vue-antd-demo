import { constRoute, asyncRoutes } from '@/router/routers'
import router, { resetRouter } from '@/router'
import { getRoleMenu } from '@/api/main'
import { getMenu, hasChild } from '@/libs/util'

export const filterRoute = (asyncRoutes, roleMenu) => {
  const res = []

  asyncRoutes.forEach(route => {
    const tmp = { ...route }
    if (roleMenu.includes(tmp.name) || (tmp.meta && tmp.meta.hideInMenu)) {
      if (tmp.children) {
        tmp.children = filterRoute(tmp.children, roleMenu)
      }
      res.push(tmp)
    }
  })

  return res
}

export default {
  state: {
    collapse: false,
    // 无权限控制菜单
    constMenu: [],
    // 权限控制菜单
    accessMenu: [],
    // 权限控制菜单成名，tagviews使用
    accessMenuName: [],
    // 权限菜单
    roleMenu: []
  },
  getters: {
    menuList: (state) => {
      // 合并前台menu （展示菜单）
      const menu = getMenu(state.constMenu)
      menu.push.apply(menu, state.accessMenu)
      return menu
    },
    getRoleMenu: (state) => state.roleMenu,
    getAccessMenuName: (state) => state.accessMenuName,
    getCollapse: (state) => state.collapse
  },
  mutations: {
    triggerCollapse(state) {
      state.collapse = !state.collapse
    },
    setAccessMenu(state, accessMenu) {
      state.accessMenu = accessMenu
    },
    setConstMenu(state, constRoute) {
      state.constMenu = constRoute
    },
    addAccessMenuName(state, { name, title }) {
      state.accessMenuName.push({ name, title })
    },
    addRoleMenu(state, name) {
      state.roleMenu.push(name)
    },
    cleanMenu(state) {
      state.constMenu = []
      state.accessMenu = []
      state.accessMenuName = []
      state.roleMenu = []
    }
  },
  actions: {
    async changeMenu({ state, commit, dispatch }) {
      // 放入静态路由
      commit('setConstMenu', constRoute)
      // 获取整理完成的后台menu
      const accessRoutes = await dispatch('getAccessRoutes')
      // 整理后台给的数据格式，先变成菜单能够展示
      await dispatch('initAccessMenu', accessRoutes)
      // 动态添加路径
      const filterRouters = await dispatch('filterAsyncRoutes', { asyncRoutes: asyncRoutes, roleMenu: state.roleMenu })
      // 重置路由
      resetRouter()
      // 添加路由
      router.addRoutes(filterRouters)
      // tips : tag title需要动态，如果能够取到route的title则使用route，否则根据后台数据
    },

    // 获取后台menu
    getAccessRoutes({ commit }) {
      return new Promise(resolve => {
        getRoleMenu().then(res => {
          commit('setNickName', res.data.name)
          const accessMenu = res.data.menuList
          resolve(accessMenu)
        })
      })
    },

    // 整理后台格式menu
    initAccessMenu({ commit }, accessRoutes) {
      if (!accessRoutes) return []
      const accessMenu = initMenu(accessRoutes, commit)
      function initMenu(accessRoutes, commit) {
        const accessMenu = []
        accessRoutes.forEach(item => {
          const obj = {
            icon: item.icon || '',
            name: item.perms,
            path: item.path,
            title: item.name
          }
          commit('addAccessMenuName', { name: item.perms, title: item.name })
          commit('addRoleMenu', item.perms)
          if (hasChild(item)) {
            obj.children = initMenu(item.children, commit)
          }
          accessMenu.push(obj)
        })
        return accessMenu
      }
      commit('setAccessMenu', accessMenu)
    },

    filterAsyncRoutes({ commit }, { asyncRoutes, roleMenu }) {
      return new Promise(resolve => {
        const route = filterRoute(asyncRoutes, roleMenu)
        resolve(route)
      })
    },

    cleanMenuRouter({ commit }) {
      commit('cleanMenu')
      resetRouter()
    }
  }
}
