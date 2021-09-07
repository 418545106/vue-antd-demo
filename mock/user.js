const { success } = require('./fakeData/msg')
const { userList } = require('./fakeData/users')
const { menu } = require('./fakeData/menu')

module.exports = [
  // user login
  {
    url: '/authentication/form',
    type: 'post',
    response: _ => {
      const msg = success()
      msg.data.accessToken = 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxIiwic3ViIjoiYWRtaW4iLCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIiwidXNlcl9hZDJkIl0sImlhdCI6MTYyMTMxNzI1MiwiZXhwIjoxNjIxMzE3MzcyfQ._obd1NTXGaQuzOXHDB0bfnS6ZdjchZ9YhvMML2eMaHn7jj1hu6466G6-4it32IP4gadJq-ZZAFQ8ilWYF0B-fg'
      msg.data.refreshToken = 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxIiwic3ViIjoiYWRtaW4iLCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIiwidXNlcl9hZDJkIl0sImlhdCI6MTYyMTMxNzI1MiwiZXhwIjoxNjIxMzE3MzcyfQ._obd1NTXGaQuzOXHDB0bfnS6ZdjchZ9YhvMML2eMaHn7jj1hu6466G6-4it32IP4gadJq-ZZAFQ8ilWYF0B-fg'
      return msg
    }
  },

  {
    url: '/sysLogout',
    type: 'get',
    response: _ => {
      const msg = success()
      return msg
    }
  },

  // get user info
  {
    url: '/system/user/info',
    type: 'get',
    response: _ => {
      const msg = success()
      msg.data = menu
      return msg
    }
  },

  // user selectUserAuth
  {
    url: '/system/menu/selectUserAuth',
    type: 'get',
    response: _ => {
      const msg = success()
      msg.data = ['userAdd', 'userEdit', 'userDetail', 'userDelete', 'user']
      return msg
    }
  },

  // user detail
  {
    url: '/system/user/([0-9]*)',
    type: 'get',
    response: _ => {
      const msg = success()
      msg.data = {
        userName: 'userName',
        nickName: 'nickName',
        email: 'email',
        sex: '0',
        phoneNumber: '123456'
      }
      return msg
    }
  },
  // delete user
  {
    url: '/system/user/delete',
    type: 'get',
    response: _ => {
      const msg = success()
      return msg
    }
  },
  // user list
  {
    url: '/system/user',
    type: 'get',
    response: _ => {
      const msg = success()
      msg.data = userList
      return msg
    }
  }

]
