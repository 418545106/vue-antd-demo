
const success = () => {
  return {
    status: 200,
    data: {},
    msg: '操作成功'
  }
}

const fail = () => {
  return {
    status: 500,
    data: {},
    msg: '操作失败'
  }
}

module.exports = {
  success,
  fail
}
