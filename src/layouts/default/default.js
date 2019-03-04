import {post} from '../../utilitys/ipAxios'
export default {
  mounted () {
    setTimeout(() => {
      this.initPageData()
    }, 1000)
  },
  methods: {
    initPageData () {
      this.getUserLogin()
    },
    async getUserLogin () {
      const params = {}
      const uri = '/user/isLogin'
      const {data: res} = await post(uri, params)
      if (res.error.returnCode === 0) {
        if (res.data.isLogin) {
          // 已经登录
          this.$router.push({
            path: '/dashboard/welcome'
          })
        } else {
          this.$router.push({
            path: '/signin'
          })
        }
      } else {
        this.$router.push({
          path: '/signin'
        })
      }
    }
  }
}
