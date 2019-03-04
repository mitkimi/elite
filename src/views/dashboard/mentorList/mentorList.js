import { post } from '../../../utilitys/gecAxios'
import NumberGrow from '../../../components/numberGrow'
import StatusBlock from '../../../components/statusBlock'
export default {
  components: {
    // GecMentorList,
    NumberGrow,
    StatusBlock
  },
  data () {
    return {
      loading: true,
      filterShow: false,
      search: {
        teacherName: null,
        infoType: null
      },
      pageData: {
        page: {
          currentPageNum: 1,
          allPageNum: 1
        },
        status: [
          // {
          //   value: 0,
          //   // label: () => {
          //   //   const h = this.$createElement
          //   //   return h('p', null, [
          //   //     h('span', null, '状态-'),
          //   //     h('span', null, '预警（23）')
          //   //   ])
          //   // }
          //   label: '预警（23）'
          // },
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
          // {
          //   value: 7,
          //   label: '新提交信息'
          // },
          // {
          //   value: 8,
          //   label: '申请信息'
          // }
          // {
          //   value: 9,
          //   label: '完成申请'
          // },
          // {
          //   value: 10,
          //   label: '完成申请'
          // }
        ],
        tabelData: [],
        summarize: {},
        filterSummarize: {}
      }
    }
  },
  mounted () {
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
        teacherName: null,
        infoType: null
      }
      this.handleSearchSubmit()
      this.filterShow = false
    },
    routeMentor (id) {
      this.$router.push({
        path: '/dashboard/mentor',
        query: {
          id
        }
      })
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
      const uri = '/application/query/by/teacher'
      const { data: res } = await post(uri, params)
      if (res.error.returnCode === 0) {
        this.pageData.tableData = res.data.teachersList
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
    }
  }
}
