import txClient from '@/plugins/txOss'
import { saveFile } from '@/api/file'
import { hasValue } from '@/libs/valid/stringValid'

export default {
  data() {
    return {
      fileSize: 0,
      uploadSize: 0,
      uploadFileIds: []
    }
  },
  methods: {
    /**
     * 修改文件数量
     * @param {*} file
     * @param {*} fileList 文件队列
     */
    change(file, fileList) {
      this.fileSize = fileList.length
    },
    /**
     * 如果不传入objKey 则文件保存成功时返回原始result对象，如果传入objKey 则返回{name: objKey, value: fileId}
     * @param {*} obj 文件对象
     * @param {*} objKey 返回的对象key
     */
    uploadFile(obj, objKey) {
      return new Promise((resolve, reject) => {
        const file = obj.file
        const objectName = (new Date().getTime().toString() + Math.floor(Math.random() * 10000) + '').split('').reverse().join('') + '.' + file.name.split('.').pop()
        txClient.putObject({
          Bucket: process.env.VUE_APP_TX_BUCKET1,
          Region: process.env.VUE_APP_TX_REGION1,
          Key: objectName,
          Body: file,
          onProgress: function(progressData) {
            obj.onProgress({ percent: progressData.percent * 50 })
          }
        }, (err, data) => {
          if (!err) {
            const fileObj = {
              name: file.name,
              fileSize: file.size,
              type: file.name.split('.').pop(),
              path: objectName
            }
            saveFile(fileObj)
              .then((res) => {
                obj.onProgress({ percent: 100 })
                obj.onSuccess()
                if (hasValue(objKey)) {
                  resolve({ 'key': objKey, 'value': res.data })
                } else {
                  resolve(res)
                }
              })
              .catch(err => {
                obj.onError(err)
                reject(err)
              })
          } else {
            obj.onError(err)
            reject(err)
          }
        })
      })
    },
    /**
     * 上传失败处理
     * @param {*} err
     * @param {*} file
     * @param {*} fileList
     */
    uploadError(err, file, fileList) {
      this.$message.error('文件上传失败')
      console.log(err)
    },
    /**
     * 上传成功处理
     * @param {*} response
     * @param {*} file
     * @param {*} fileList
     */
    uploadSuccess(response, file, fileList) {
      this.uploadSize++
      if (this.uploadSize === this.fileSize) {
        this.$message.success({
          message: '文件上传成功',
          onClose: () => {
            this.$refs.elUpload.clearFiles()
          }
        })
      }
    },
    /**
     * 删除cos文件
     * @param {*} objectNameList 需要删除的文件key数组
     */
    deleteOssFile(objectNameList) {
      return new Promise((resolve, reject) => {
        if (!(objectNameList instanceof Array)) {
          reject('请传入数组对象')
          return
        }
        if (objectNameList.length === 0) {
          resolve()
          return
        }
        const objects = []
        objectNameList.forEach(e => {
          objects.push({ Key: e })
        })
        txClient.deleteMultipleObject({
          Bucket: process.env.VUE_APP_TX_BUCKET1,
          Region: process.env.VUE_APP_TX_REGION1,
          Objects: objects
        }, (err, data) => {
          console.log(err || data)
          resolve()
        })
      })
    },
    /**
     * 简易文件上传方法，不操作文件对应的UI进度条
     * @param {*} obj
     * @param {*} objKey
     */
    simpleUploadFile(obj, objKey) {
      return new Promise((resolve, reject) => {
        const file = obj.file
        const objectName = (new Date().getTime().toString() + Math.floor(Math.random() * 10000) + '').split('').reverse().join('') + '.' + file.name.split('.').pop()
        txClient.putObject({
          Bucket: process.env.VUE_APP_TX_BUCKET1,
          Region: process.env.VUE_APP_TX_REGION1,
          Key: objectName,
          Body: file
        }, (err, data) => {
          if (!err) {
            const fileObj = {
              name: file.name,
              fileSize: file.size,
              type: file.name.split('.').pop(),
              path: objectName
            }
            saveFile(fileObj)
              .then((res) => {
                if (hasValue(objKey)) {
                  resolve({ 'key': objKey, 'value': res.data })
                } else {
                  resolve(res)
                }
              })
              .catch(err => {
                reject(err)
              })
          } else {
            reject(err)
          }
        })
      })
    },
    /**
     * 仅上传至对象存储
     * @param {*} file
     */
    onlyUploadCloud(file) {
      return new Promise((resolve, reject) => {
        const objectName = (new Date().getTime().toString() + Math.floor(Math.random() * 10000) + '').split('').reverse().join('') + '.' + file.name.split('.').pop()
        txClient.putObject({
          Bucket: process.env.VUE_APP_TX_BUCKET1,
          Region: process.env.VUE_APP_TX_REGION1,
          Key: objectName,
          Body: file
        }, (err, data) => {
          if (!err) {
            resolve(objectName)
          } else {
            reject(err)
          }
        })
      })
    }
  }
}
