import {post} from '../../utilitys/ipAxios'
export default {
  mounted () {
    setTimeout(() => {
      this.initPageData()
    }, 1000)
  },
  methods: {
    initPageData () {
      this.getUserLoginMock()
    },
    async getUserLogin () {
      const params = {}
      const uri = ''
      const {data: res} = await post(uri, params)
      if (res.code >= 0) {
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
    },
    getUserLoginMock () {
      setTimeout(()=>{
        this.$router.push({
          path: '/dashboard/welcome'
        })
      }, 3000)
    }
  }
}
