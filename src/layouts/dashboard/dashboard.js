import GecMenu from '../../components/menu'
import BreadCrumb from '../../components/breadcrumb'
export default {
  components: { GecMenu, BreadCrumb },
  data () {
    return {
      basic: {
        realName: '加载中...'
      }
    }
  },
  mounted () {
    // 获取用户名称
    const realName = localStorage.realName || '加载中...'
    this.basic.realName = realName
  },
  methods: {
    routePath (path) {
      this.$router.push({
        path
      })
    }
  }
}
