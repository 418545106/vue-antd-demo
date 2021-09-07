const menu = {
  'id': 1,
  'name': '超級管理員',
  'username': 'admin',
  'menuList': [{
    'name': '表单测试',
    'perms': 'pageFormat',
    'path': '/pageFormat',
    'icon': 'el-icon-tickets',
    'children': [
      {
        'name': '弹窗',
        'perms': 'dialogFormat',
        'path': '/pageFormat/dialogFormat',
        'icon': '',
        'children': [

        ]
      },
      {
        'name': '卡片',
        'perms': 'cardFormat',
        'path': '/pageFormat/cardFormat',
        'icon': '',
        'children': [

        ]
      },
      {
        'name': '测试页面',
        'perms': 'pageTest',
        'path': '/pageFormat/pageTest',
        'icon': ''
      }
    ]
  }]
}

module.exports = {
  menu
}
