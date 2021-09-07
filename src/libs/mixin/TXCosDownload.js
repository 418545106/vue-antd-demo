import txClient from '@/plugins/txOss'
export default {
  methods: {
    /**
     * 下载文件
     * @param {*} objectName cos文件key
     * @param {*} realName 下载时修改成的名称
     */
    donwloadFile(objectName, realName) {
      const _this = this
      const fileName = objectName
      txClient.headObject({
        Bucket: process.env.VUE_APP_TX_BUCKET1,
        Region: process.env.VUE_APP_TX_REGION1,
        Key: fileName
      }, (err, data) => {
        if (err) {
          _this.$message.error('文件不存在')
          console.log(err)
        } else {
          txClient.getObjectUrl({
            Bucket: process.env.VUE_APP_TX_BUCKET1,
            Region: process.env.VUE_APP_TX_REGION1,
            Key: fileName,
            Sign: true
          }, (err, data) => {
            if (err) return console.log(err)
            var downloadUrl = data.Url + (data.Url.indexOf('?') > -1 ? '&' : '?') + 'response-content-disposition=attachment' + encodeURIComponent(';filename=' + realName)
            const link = document.createElement('a')
            link.style.display = 'none'
            link.href = downloadUrl
            link.setAttribute('download', '')
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          })
        }
      })
    }
  }
}
