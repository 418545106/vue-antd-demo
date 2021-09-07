export default {
  props: {
    dialogVisible: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'add'
    },
    id: {
      type: String,
      default: ''
    }
  },
  computed: {
    visible: {
      get() {
        return this.dialogVisible
      },
      set(val) {
        this.$emit('update:dialogVisible', val)
      }
    }
  },
  watch: {
    dialogVisible(newVal) {
      this.$nextTick(() => {
        this.init(newVal)
      })
    }
  }
}
