import routes from '../../router/routes'
export default {
  data () {
    return {
      breadCrumb: [],
      routes1dList: []
    }
  },
  created () {
    this.fommater()
  },
  watch: {
    $route: function () {
      // console.log(to)
      // console.log(this)
      this.fommater()
    }
  },
  methods: {
    fommater () {
      routes.map(lay1 => {
        // 第一层
        if (lay1.children) {
          // 有二级的
          lay1.children.map(lay2 => {
            const obj = {
              path: `${lay1.path}/${lay2.path}`,
              label: [lay1.label || lay1.name, lay2.label || lay2.name]
            }
            this.routes1dList.push(obj)
          })
        } else {
          // 没有二级的
          const obj = {
            path: lay1.path,
            label: [lay1.label || lay1.name]
          }
          this.routes1dList.push(obj)
        }
      })
      // 推进我想要的
      const path = this.$route.path
      this.routes1dList.map(item => {
        if (item.path === path) {
          this.breadCrumb = item.label
        }
      })
    }
  }
}
