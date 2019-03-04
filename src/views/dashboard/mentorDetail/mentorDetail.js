import { post } from '../../../utilitys/ipAxios'
import GecApplyCard from '../../../components/applyCard'
import NumberGrow from '../../../components/numberGrow'
export default {
  components: {
    GecApplyCard,
    NumberGrow
  },
  data () {
    return {
      loading: true,
      pageData: {
        status: [
          {
            value: 0,
            // label: () => {
            //   const h = this.$createElement
            //   return h('p', null, [
            //     h('span', null, '状态-'),
            //     h('span', null, '预警（23）')
            //   ])
            // }
            label: '预警（23）'
          },
          {
            value: 1,
            label: '未收到链接（456）'
          },
          {
            value: 2,
            label: '收到链接（434）'
          },
          {
            value: 3,
            label: '完成申请（34）'
          },
          {
            value: 4,
            label: '暂不申请（2134）'
          }
        ],
        data: {}
      }
    }
  },
  mounted () {
    this.handleSearchSubmit()
  },
  methods: {
    handleClearFilter () {
      this.search = {
        name: null,
        status: null
      }
      this.handleSearchSubmit()
    },
    async handleSearchSubmit () {
      // this.loading = true
      this.loading = false
      // 发送请求
      const params = {}
      params.teacherId = this.$route.query.id
      const uri = '/application/query/by/teacher'
      const { data: res } = await post(uri, params)
      if (res.error.returnCode === 0) {
        this.pageData.data = res.data.teachersList[0]
        this.pageData.summarize = res.data.summarize
        this.pageData.filterSummarize = res.data.filterSummarize
        this.pageData.page.currentPageNum = res.data.currentPageNum
        this.pageData.page.allPageNum = res.data.allPageNum
        // setTimeout(() => {
        //   this.loading = false
        // }, 1000)
      } else {
        this.$message.error(`${res.error.returnUserMessage}`)
      }
    }
  }
}
