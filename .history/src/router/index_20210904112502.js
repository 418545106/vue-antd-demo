import Vue from 'vue'
import VueRouter from 'vue-router'
import { constRoute } from './routers'
import store from '@/store'
import whiteList from './whiteList'
// 进度条
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

Vue.use(VueRouter)

const createRouter = () => new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constRoute
})

const router = createRouter()

NProgress.configure({ showSpinner: false }) // NProgress Configuration

// 解决Loading chunk {n} failed问题
router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g
  const isChunkLoadFailed = error.message.match(pattern)
  const targetPath = router.history.pending.fullPath
  if (isChunkLoadFailed) {
    router.replace(targetPath)
  }
})

router.beforeEach((to, from, next) => {
  // start progress bar
  NProgress.start()
  console.log('login:' + process.env.VUE_APP_LOGIN_PATH)
  console.log('to:' + to.path)
  console.log(to.path === process.env.VUE_APP_LOGIN_PATH)
  if (!store.getters.getToken) {
    if (to.path === process.env.VUE_APP_LOGIN_PATH) {
      // if is logged in, redirect to the home page
      next({ path: process.env.VUE_APP_HOME_PATH })
    } else {
      // 重新添加动态路由
      // if (store.getters.getRoleMenu.length === 0 && !store.getters.isAuthed) {
      //   store.dispatch('authorization').then(() => {
      //     NProgress.done()
      //     // hack method to ensure that addRoutes is complete
      //     // set the replace: true, so the navigation will not leave a history record
      //     next({ ...to, replace: true })
      //   })
      // } else {
        NProgress.done()
        next()
      // }
    }
  } else {
    if (whiteList.indexOf(to.name) !== -1) {
      next()
    } else {
      next({ path: process.env.VUE_APP_LOGIN_PATH })
    }
    NProgress.done()
  }
})

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
