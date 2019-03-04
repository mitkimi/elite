import { post } from '../../../utilitys/ipAxios'
import MyChart from '../../../components/pieChart'
export default {
  components: {
    // GecStudentList,
    MyChart
  },
  data () {
    return {
      filterShow: false,
      loading: true

    }
  },
  created () {
    this.handleSearchSubmit()
  },
  methods: {
    handleCreateStudent () {
      this.$router.push({
        path: '/dashboard/bCreateStudent'
      })
    },
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
      const params = this.search
      const uri = '/application/query'
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
