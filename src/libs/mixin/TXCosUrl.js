import txClient from '@/plugins/txOss'

export default {
  methods: {
    /**
     * 获取文件链接
     * @param {*} objectName
     */
    getTxCloudFileUrl(objectName) {
      return new Promise((resolve, reject) => {
        txClient.getObjectUrl({
          Bucket: process.env.VUE_APP_TX_BUCKET1,
          Region: process.env.VUE_APP_TX_REGION1,
          Key: objectName
        }, (err, data) => {
          if (err) {
            reject(err)
          } else {
            resolve(data)
          }
        })
      })
    }
  }
}
