const { success } = require('./fakeData/msg')
const Mock = require('mockjs')

module.exports = [
  {
    url: '/system/dict/parent/([0-9]*)',
    type: 'get',
    response: _ => {
      const msg = success()
      msg.data = [
        {
          name: 'name1',
          id: 'value1'
        },
        {
          name: 'name2',
          id: 'value2'
        }
      ]
      return msg
    }
  },
  {
    url: '/dict/some',
    type: 'get',
    response: config => {
      const msg = success()
      const { tag } = config.query
      const data = Mock.mock({
        'list|1-10': [{
          'id|+1': 1,
          name: '字典' + tag + '@increment'
        }]
      })
      msg.data = data.list
      return msg
    }
  }
]
