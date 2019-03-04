import { post } from '../../utilitys/gecAxios'
export default {
  props: {
    id: {
      type: String,
      require: false
    },
    submitDate: {
      // type: String || Number,
      require: false
    },
    index: {
      type: Number,
      require: false
    },
    status: {
      type: Number,
      require: false
    },
    type: {
      type: String,
      require: false
    }
  },
  data () {
    return {
      dialogShow: false,
      str: '',
      date: null,
      statusArr: [
        {
          value: 1,
          label: '没有任何改变',
          color: '#333333'
        },
        {
          value: 2,
          label: '未收到链接',
          color: '#ffe102'
        },
        {
          value: 3,
          label: '收到链接',
          color: '#ff0303'
        },
        {
          value: 4,
          label: '已完成申请',
          color: '#00A701'
        },
        {
          value: 5,
          label: '暂不申请',
          color: '#ff0303'
        },
        {
          value: 6,
          label: '预警',
          color: '#ff0303'
        }
      ],
      current: 1,
      newSelect: null
    }
  },
  mounted () {
    this.current = this.status // 渲染之前取到传来的状态
    if (this.status === 4) {
      this.date = Date(this.submitDate) || null
      console.log(this.date)
    }
    this.drawComponent() // 渲染
  },
  methods: {
    drawComponent (newStatus) {
      const status = newStatus || this.status
      this.statusArr.map(element => {
        if (element.value === status) {
          this.$refs.mark.style.backgroundColor = element.color
          this.$refs.str.style.color = element.color
          this.str = element.label
        }
      })
    },
    handleSubmit () {
      const result = this.updateStatus()
      if (result) {
        this.$message.success('状态修改成功')
        this.dialogShow = false
      } else {
        this.$message.error('状态修改失败')
      }
    },
    handleChooseOk () {
      console.log('handle choose ok', this.current, this.date)
      if (this.current === 4 && !this.date) {
        this.$message.error('请选择日期')
        return
      }
      // 状态传出去
      this.$emit('status', this.current, this.index)
      // 日期传出去
      this.$emit('submitDate', this.date, this.index)
      // 重新渲染
      this.drawComponent(this.current)
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
      if (key === 4) {
        // console.log(this.$refs.datePicker)
        this.$refs.datePicker[0].focus()
      } else {
        this.date = null
      }
    },
    async updateStatus () {
      const uri = '/application/updateStatus'
      const params = {
        applyInfoList: [
          {
            applyId: this.id,
            status: this.current
          }
        ]
      }
      if (this.status === 4) {
        params.applyInfoList[0].submitDate = Date.parse(this.date)
      }
      const { data: res } = await post(uri, params)
      if (res.error.returnCode === 0) {
        this.drawComponent(this.current)
        return true
      } else {
        return false
      }
    }
  }
}
