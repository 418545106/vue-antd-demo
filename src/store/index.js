import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import menu from './modules/menu'
import tags from './modules/tags'
import user from './modules/user'
import auth from './modules/auth'
import cache from './modules/cache'

export default new Vuex.Store({
  actions: {
  },
  modules: {
    menu,
    tags,
    user,
    auth,
    cache
  }
})
