import { post } from '../../utilitys/ipAxios'
import NumberGrow from '../../components/numberGrow'
export default {
  components: {
    NumberGrow
  },
  data () {
    return {
      filterShow: false,
      filter: {
        period: []
      },
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      loading: true,
      pageData: {
        tableData: [
          {
            date: '2016-05-02',
            name: '不记得什么内容的会议',
            partners: [
              {
                name: '田玉可'
              },
              {
                name: '刘佳宁'
              }
            ],
            status: 'pending',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '不记得什么内容的会议',
            partners: [
              {
                name: '田玉可'
              },
              {
                name: '刘佳宁'
              }
            ],
            status: 'pending',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小不记得什么内容的会议虎',
            partners: [
              {
                name: '田玉可'
              },
              {
                name: '刘佳宁'
              },
              {
                name: '张三'
              },
              {
                name: '李四'
              }
            ],
            status: 'pending',
            address: '上海市普陀区金沙江路 1519 弄'
          }
        ],
      }
    }
  },
  created () {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  methods: {
    handleClearFilter () {
      this.filter = {
        period: []
      }
      this.handleSearchSubmit()
      this.filterShow = false
    },
    async handleSearchSubmit (filter) {
      if (filter && filter === 'filter') {
        this.filterShow = true
      } else {
        this.filterShow = false
      }
      this.loading = true
      // 发送请求
      const params = this.filter
      const uri = ''
      const { data: res } = await post(uri, params)
      if (res.error.returnCode === 0) {
        this.pageData.tableData = res.data.studentsList
        this.pageData.summarize = res.data.summarize
        this.pageData.filterSummarize = res.data.filterSummarize
        this.pageData.page.currentPageNum = res.data.currentPageNum
        this.pageData.page.allPageNum = res.data.allPageNum
        setTimeout(() => {
          this.loading = false
        }, 500)
      } else {
        this.$message.error(`${res.error.returnUserMessage}`)
      }
    },
    handleChangePage (pageIndex) {
      this.search.pageNum = pageIndex
      this.pageData.page.currentPageNum = pageIndex
      this.handleSearchSubmit()
    },
    setTypeStr (typeId) {
      // return typeId
      for (const item of this.pageData.status) {
        if (item.value === typeId * 1) {
          return item.label
        }
      }
    }
  }
}
