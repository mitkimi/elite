import { post } from '../../../utilitys/ipAxios'
import NumberGrow from '../../../components/numberGrow'
export default {
  components: {
    NumberGrow
  },
  data () {
    return {
      filterShow: false,
      filter: {
        name: null,
        status: null
      },
      loading: true,
      pageData: {
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ],
        status: [
          {
            value: 1,
            label: '没有任何改变'
          },
          {
            value: 2,
            label: '未收到链接'
          },
          {
            value: 3,
            label: '收到链接'
          },
          {
            value: 4,
            label: '完成申请'
          },
          {
            value: 5,
            label: '暂不申请'
          },
          {
            value: 6,
            label: '网申预警'
          }
        ],
        summarize: {},
        filterSummarize: {}
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
      this.search = {
        name: null,
        status: null,
        pageNum: 1
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
