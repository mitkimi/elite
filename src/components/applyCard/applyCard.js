export default {
  props: {
    data: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      status: [

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
      ]
    }
  },
  mounted () {
    this.initStatusMark()
  },
  methods: {
    initStatusMark () {
      this.status.map(element => {
        if (element.value === this.data.applicationStatus) {
          this.$refs.statusMark.style.backgroundColor = element.color
        }
      })
    },
    initStatusStr () {
      let str = '获取中...'
      for (const element of this.status) {
        if (element.value === this.data.applicationStatus) {
          str = element.label
          console.log('str', str)
        }
      }
      return str
    }
  }
}
