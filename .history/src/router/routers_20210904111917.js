import Layout from '../views/layout/Layout.vue'

export const constRoute = [
  // {
  //   path: '/login',
  //   name: 'login',
  //   meta: {
  //     hideInMenu: true
  //   },
  //   component: () => import('@/views/login/Login.vue')
  // },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    meta: {
      hideInMenu: true
    },
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页'
        },
        component: () => import('@/views/home/Home.vue')
      }
    ]
  }
  // {
  //   path: '/error',
  //   component: Layout,
  //   meta: {
  //     hideInMenu: true,
  //     icon: 'el-icon-error',
  //     title: '404'
  //   },
  //   children: [
  //     {
  //       path: '404',
  //       name: '404',
  //       meta: {
  //         title: '404'
  //       },
  //       component: () => import('@/views/404/page404.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/control',
  //   name: 'control',
  //   component: Layout,
  //   meta: {
  //     icon: 'el-icon-eleme',
  //     title: '控制台'
  //   },
  //   children: [
  //     {
  //       path: 'dashboard',
  //       name: 'dashboard',
  //       meta: {
  //         title: '控制台'
  //       },
  //       component: () => import('@/views/dashboard/Dashboard.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/userSetting',
  //   name: 'userSetting',
  //   component: Layout,
  //   meta: {
  //     icon: 'el-icon-user',
  //     title: ' 用户设置'
  //   },
  //   children: [
  //     {
  //       path: 'userInformation',
  //       name: 'userInformation',
  //       props: (route) => ({ id: route.query.q }),
  //       meta: {
  //         title: '基本信息'
  //       },
  //       component: () => import('@/views/userSetting/userInformation/UserInformation.vue')
  //     },
  //     {
  //       path: 'changePassword',
  //       name: 'changePassword',
  //       meta: {
  //         title: '修改密码'
  //       },
  //       component: () => import('@/views/userSetting/changePassword/ChangePassword.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/system',
  //   name: 'system',
  //   component: Layout,
  //   meta: {
  //     icon: 'el-icon-setting',
  //     title: '测试模块'
  //   },
  //   children: [
  //     {
  //       path: 'user',
  //       name: 'user',
  //       meta: {
  //         title: '用户(表格动态数据)'
  //       },
  //       component: () => import('@/views/system/user/User.vue')
  //     },
  //     {
  //       path: 'dept',
  //       name: 'dept',
  //       meta: {
  //         title: '模块2(表格静态数据)'
  //       },
  //       component: () => import('@/views/system/dept/Dept.vue')
  //     },
  //     {
  //       path: 'fileManager',
  //       name: 'fileManager',
  //       meta: {
  //         title: '文件管理(文件下载)'
  //       },
  //       component: () => import('@/views/system/fileManager/FileManager.vue')
  //     },
  //     {
  //       path: 'upload',
  //       name: 'upload',
  //       meta: {
  //         title: '文件上传'
  //       },
  //       component: () => import('@/views/system/upload/Upload.vue')
  //     },
  //     {
  //       path: 'tree',
  //       name: 'tree',
  //       meta: {
  //         title: 'Tree下拉树组件'
  //       },
  //       component: () => import('@/views/system/tree/Tree.vue')
  //     },
  //     {
  //       path: 'dict',
  //       name: 'dict',
  //       meta: {
  //         title: 'dict下拉字典组件'
  //       },
  //       component: () => import('@/views/system/dict/Dict.vue')
  //     },
  //     {
  //       path: 'form',
  //       name: 'form',
  //       meta: {
  //         title: 'Cache'
  //       },
  //       component: () => import('@/views/system/form/Form.vue')
  //     },
  //     {
  //       path: 'datePicker',
  //       name: 'datePicker',
  //       meta: {
  //         title: 'datePicker时间选择'
  //       },
  //       component: () => import('@/views/system/datePicker/DatePicker.vue')
  //     },
  //     {
  //       path: 'icons',
  //       name: 'icons',
  //       meta: {
  //         title: 'icons'
  //       },
  //       component: () => import('@/views/system/icons/Icons.vue')
  //     },
  //     {
  //       path: 'buttonAuth',
  //       name: 'buttonAuth',
  //       meta: {
  //         title: 'buttonAuth按钮权限'
  //       },
  //       component: () => import('@/views/system/buttonAuth/ButtonAuth.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/public',
  //   component: Layout,
  //   meta: {
  //     title: 'public',
  //     icon: 'el-icon-magic-stick'
  //   },
  //   children: [
  //     {
  //       path: 'im',
  //       name: 'im',
  //       meta: {
  //         title: 'Im通信'
  //       },
  //       component: () => import('@/views/publicPage/im/Im.vue'),
  //       children: [
  //         {
  //           path: 'imLogin',
  //           name: 'imLogin',
  //           meta: {
  //             title: 'imLogin仅登录'
  //           },
  //           component: () => import('@/views/publicPage/im/login/ImLogin.vue')
  //         },
  //         {
  //           path: 'tencentDemo',
  //           name: 'tencentDemo',
  //           meta: {
  //             title: 'tencentDemo'
  //           },
  //           component: () => import('@/views/publicPage/im/tencent/TencentDemo.vue')
  //         }
  //       ]
  //     },
  //     {
  //       path: 'linkPage',
  //       name: 'linkPage',
  //       meta: {
  //         title: 'linkPage（不支持）'
  //       },
  //       component: () => import('@/views/publicPage/link/LinkPage.vue')
  //     },
  //     {
  //       path: 'linkTo',
  //       name: 'linkTo',
  //       props: (route) => ({ id: route.query.q }),
  //       // props: true,
  //       meta: {
  //         title: 'linkTo（不支持）'
  //       },
  //       component: () => import('@/views/publicPage/linkTo/LinkTo.vue')
  //     },
  //     {
  //       path: 'img',
  //       name: 'img',
  //       meta: {
  //         title: 'img'
  //       },
  //       children: [
  //         {
  //           path: 'showImg',
  //           name: 'showImg',
  //           meta: {
  //             title: 'showImg'
  //           },
  //           component: () => import('@/views/publicPage/img/showImg/ShowImg.vue')
  //         },
  //         {
  //           path: 'viewImg',
  //           name: 'viewImg',
  //           meta: {
  //             title: 'viewImg'
  //           },
  //           component: () => import('@/views/publicPage/img/viewImg/ViewImg.vue')
  //         }
  //       ],
  //       component: () => import('@/views/publicPage/img/Img.vue')
  //     },
  //     {
  //       path: 'video',
  //       name: 'video',
  //       meta: {
  //         title: 'video'
  //       },
  //       children: [
  //         {
  //           path: 'normalVideo',
  //           name: 'normalVideo',
  //           meta: {
  //             title: 'video'
  //           },
  //           component: () => import('@/views/publicPage/video/normal/Video.vue')
  //         },
  //         {
  //           path: 'hlsVideo',
  //           name: 'hlsVideo',
  //           meta: {
  //             title: 'hls/m3u8'
  //           },
  //           component: () => import('@/views/publicPage/video/hls/HLSVideo.vue')
  //         },
  //         {
  //           path: 'audio',
  //           name: 'audio',
  //           meta: {
  //             title: 'audio'
  //           },
  //           component: () => import('@/views/publicPage/video/audio/Audio.vue')
  //         }
  //       ],
  //       component: () => import('@/views/publicPage/video/Video.vue')
  //     },
  //     {
  //       path: 'example',
  //       name: 'example',
  //       meta: {
  //         title: 'example'
  //       },
  //       component: () => import('@/views/publicPage/example/Example.vue'),
  //       children: [
  //         {
  //           path: 'mark',
  //           name: 'mark',
  //           meta: {
  //             title: 'mark'
  //           },
  //           component: () => import('@/views/publicPage/example/mark/CMark.vue')
  //         },
  //         {
  //           path: 'mark2',
  //           name: 'mark2',
  //           meta: {
  //             title: 'mark2(WangEdit)'
  //           },
  //           component: () => import('@/views/publicPage/example/mark2/CMark2.vue')
  //         },
  //         {
  //           path: 'mark3',
  //           name: 'mark3',
  //           meta: {
  //             title: 'tinyMce'
  //           },
  //           component: () => import('@/views/publicPage/example/mark3/CMark3.vue')
  //         }
  //       ]
  //     },
  //     {
  //       path: 'txOss',
  //       name: 'txOss',
  //       meta: {
  //         title: '腾讯云文件上传'
  //       },
  //       component: () => import('@/views/publicPage/txoss/TxOss.vue')
  //     }
  //   ]
  // }
]

export const asyncRoutes = [
  // {
  //   path: '/pageFormat',
  //   name: 'pageFormat',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'cardFormat',
  //       name: 'cardFormat',
  //       component: () => import('@/views/pageFormat/card/CardFormat.vue')
  //     },
  //     {
  //       path: 'pageTest',
  //       name: 'pageTest',
  //       component: () => import('@/views/pageFormat/pageTest/PageTest.vue')
  //     }
  //   ]
  // },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/error/404', meta: { hideInMenu: true }}
]
