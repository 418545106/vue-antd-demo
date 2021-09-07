const { success } = require('./fakeData/msg')

module.exports = [
  {
    url: '/file',
    type: 'get',
    response: _ => {
      const msg = success()
      msg.page = {
        'total': 1,
        'page': 1,
        'rows': [
          {
            objectName: 'xxx.jpg'
          }
        ]
      }
      return msg
    }
  }
]
