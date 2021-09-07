import {
  tagHasExist,
  parsingTagTitle,
  initTagsList,
  getNextRoute,
  isCurrentPath
} from '@/libs/util'
import router from '@/router'

export default {
  state: {
    tagsList: [
      { name: 'home', title: '首页', path: process.env.VUE_APP_HOME_PATH }
    ]
  },
  getters: {
    getTagsList: (state) => state.tagsList
  },

  mutations: {
    addTag(state, { tag }) {
      // set tag title
      parsingTagTitle(tag)
      // check tag exist
      const tagExist = tagHasExist(state.tagsList, tag)
      if (!tagExist) {
        state.tagsList.push(tag)
      }
    },
    closeAllTag(state) {
      // simple handling close all method
      state.tagsList = initTagsList()
    },
    closeOtherTag(state, tag) {
      parsingTagTitle(tag)
      state.tagsList = initTagsList()
      if (tag.path !== process.env.VUE_APP_HOME_PATH) {
        state.tagsList.push(tag)
      }
    },
    closeTag(state, { currentRoute, path }) {
      // 如果关闭的不是当前页签，则直接关闭，无需找下一个路由，如果关闭的是当前页签，则需要寻找下一个路由
      if (isCurrentPath(currentRoute, path)) {
        const nextRoute = getNextRoute(state.tagsList, path)
        if (!isCurrentPath(currentRoute, nextRoute.path)) {
          router.push(nextRoute)
        }
      }
      state.tagsList = state.tagsList.filter(item => item.path !== path)
    }
  },
  actions: {
  }
}
