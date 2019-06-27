import route from '../../router/routes'

export default {
  data () {
    return {
      defaultIndex: '2',
      menu: route
    }
  },
  mounted () {
    this.initPageData()
  },
  methods: {
    initPageData () {
      const fullPath = this.$route.fullPath
      this.defaultIndex = fullPath
    },
    isAuth (auth) {
      let flag = false
      for (const element of auth) {
        if (element === 'admin') {
          flag = true
        }
      }
      return flag
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
