import GecMenu from '../../components/menu'

export default {
  components: { GecMenu },
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
