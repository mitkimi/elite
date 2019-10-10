import { fetch } from '../../utilitys/ipAxios'
import NumberGrow from '../../components/numberGrow'
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
        tableData: [],
        status: [
          {
            value: 1,
            label: '空闲'
          },
          {
            value: 2,
            label: '使用中'
          }
        ],
        summarize: {
          total: 0,
          available: 0,
          using: 0
        }
      }
    }
  },
  created () {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  mounted () {
    this.handleSearchSubmit()
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
      const uri = '/meeting/getAllRooms'
      const { data: res } = await fetch(uri, params)
      if (res.messageCode * 1 === 0) {
        this.pageData.tableData = res.data
        this.pageData.summarize.total = res.data.length
        let available = 0
        let using = 0
        res.data.map((room) => {
          if (room.roomStatus === 'free') {
            available += 1
          } else {
            using += 1
          }
        })
        this.pageData.summarize.available = available
        this.pageData.summarize.using = using

        setTimeout(() => {
          this.loading = false
        }, 500)
      } else {
        this.$message.error(`获取失败：${res.message}`)
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
