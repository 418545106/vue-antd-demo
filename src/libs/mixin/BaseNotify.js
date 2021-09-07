export default {
  methods: {
    /**
     * 添加成功提示
     * @param {*} res
     */
    addSuccessTip(res, msg) {
      return new Promise((resolve, reject) => {
        this.$notify({
          title: msg || '添加成功',
          message: res.msg,
          type: 'success',
          duration: 2000,
          onClose: () => {
            resolve('success')
          }
        })
      })
    },
    /**
     * 添加失败提示
     * @param {*} err
     */
    addFailedTip(err, msg) {
      return new Promise((resolve, reject) => {
        console.log('addFailed', err)
        this.$notify({
          title: msg || '添加失败',
          message: err.msg,
          type: 'warning',
          onClose: resolve('failed')
        })
      })
    },
    /**
     * 更新成功提示
     * @param {*} res
     */
    updateSuccessTip(res, msg) {
      return new Promise((resolve, reject) => {
        this.$notify({
          title: msg || '更新成功',
          message: res.msg,
          type: 'success',
          onClose: resolve('success')
        })
      })
    },
    /**
     * 更新失败提示
     * @param {*} err
     */
    updateFailedTip(err, msg) {
      return new Promise((resolve, reject) => {
        console.log('updateFailed', err)
        this.$notify({
          title: msg || '更新失败',
          message: err.msg,
          type: 'warning',
          onClose: resolve('failed')
        })
      })
    },
    /**
     * 删除成功提示
     * @param {*} res
     */
    deleteSuccessTip(res, msg) {
      return new Promise((resolve, reject) => {
        this.$notify({
          title: msg || '删除成功',
          message: res.msg,
          type: 'success',
          onClose: resolve('success')
        })
      })
    },
    /**
     * 删除失败提示
     * @param {*} err
     */
    deleteFaildTip(err, msg) {
      return new Promise((resolve, reject) => {
        console.log('deleteFailed', err)
        this.$notify({
          title: msg || '删除失败',
          message: err.msg,
          type: 'warning',
          onClose: resolve('failed')
        })
      })
    },
    /**
     * 警告提示
     * @param {*} warningMsg
     */
    warningTip(warningMsg, msg) {
      return new Promise((resolve, reject) => {
        this.$notify({
          title: msg || '警告',
          message: warningMsg,
          type: 'warning',
          onClose: resolve('failed')
        })
      })
    },
    /**
     * 确认是否要删除
     */
    deleteConfirm(msg) {
      return new Promise((resolve, reject) => {
        this.$confirm(msg || '是否要删除该数据', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          resolve()
        }).catch(() => {
        })
      })
    }
  }
}
