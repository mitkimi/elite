import { post } from '../../../utilitys/gecAxios'
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
        name: '',
        status: [],
        summarize: {},
        teachersList: []
      }
    }
  },
  created () {
    this.handleSearchSubmit()
  },
  methods: {
    async handleSearchSubmit () {
      this.loading = true
      // 发送请求
      const params = {
        studentId: this.$route.query.id
      }
      const uri = '/application/query/by/student'
      const { data: res } = await post(uri, params)
      if (res.error.returnCode === 0) {
        this.pageData.name = res.data.studentName
        this.pageData.summarize = res.data.summarize
        this.pageData.teachersList = res.data.teachersList
        setTimeout(() => {
          this.loading = false
        }, 500)
      } else {
        this.$message.error(`${res.error.returnUserMessage}`)
      }
    }
  }
}
