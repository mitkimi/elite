export default {
  data () {
    return {
      str: '没有任何状态',
      dialogShow: false,
      date: null,
      //  1,没有任何改变 2,未收到链接 3,收到链接 4,完成申请 5,暂不申请
      statusArr: [
        {
          name: '没有任何状态',
          key: 1
        },
        {
          name: '未收到链接',
          key: 2
        },
        {
          name: '已收到链接',
          key: 3
        },
        {
          name: '网申已经提交',
          key: 4
        },
        {
          name: '暂不申请',
          key: 5
        }
      ],
      current: 0,
      newSelect: null
    }
  },
  created () {
    // console.log(this)
  },
  methods: {
    handleSubmit () {
      this.dialogShow = false
    },
    handleCancel () {
      this.dialogShow = false
      // console.log(this)
    },
    handleShowDialog () {
      this.dialogShow = true
    },
    handleSelectStatus (flag) {
      console.log(flag)
      this.current = flag
    },
    buffer (flag) {
      if (this.newSelect) {
        return flag
      } else {
        return this.current
      }
    },
    handleChooseDate (key) {
      console.log(key)
      if (key === 3) {
        //
        console.log(this.$refs.datePicker)
        this.$refs.datePicker[0].focus()
      } else {
        this.date = null
      }
    }
  }
}
