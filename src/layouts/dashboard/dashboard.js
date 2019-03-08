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
    localStorage.realName ? this.basic.realName = localStorage.realName : console.log(0)
  },
  methods: {
    routePath (path) {
      this.$router.push({
        path
      })
    }
  }
}
