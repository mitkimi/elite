import { post } from '../../utilitys/ipAxios'
import MyChart from '../../components/pieChart'
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
    this.autoGetAccessToken()
  },
  methods: {
    async autoGetAccessToken () {
      const uri = '/dingtalk/gettoken'
      const params = {}
      const { data: res } = await post(uri, params, true)
      if (res.messageCode * 1 === 0) {
        localStorage.accessToken = res.data.accessToken // 获取 token
        localStorage.tokenExpiredAt = new Date() * 1 + 3600 * 1000 * 1.5 // token 超时时间
      } else {
        alert('get token failed')
      }
    }
  }
}
