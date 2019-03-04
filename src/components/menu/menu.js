export default {
  data () {
    return {
      defaultIndex: '/dashboard/welcome',
      menu: [
        {
          icon: 'el-icon-menu', // 使用 elementUI 的 icon
          label: '工作台', // 提示文字
          path: '/dashboard/welcome', // 路由点
          auth: ['admin', 'customer']
        },
        {
          icon: 'el-icon-edit-outline',
          label: '表单页',
          path: '/dashboard/form',
          auth: ['admin', 'customer'],
          children: [
            {
              path: '/dashboard/basic-form',
              label: '基础表单',
              auth: ['admin', 'customer']
            },
            {
              path: '/dashboard/step-form',
              label: '分布表单',
              auth: ['admin', 'customer']
            }
          ]
        },
        {
          icon: 'el-icon-tickets',
          label: '列表页',
          path: '/dashboard/list',
          auth: ['admin', 'customer'],
          children: [
            {
              path: '/dashboard/new1',
              label: '查询表格',
              auth: ['admin', 'customer']
            },
            {
              path: '/dashboard/new2',
              label: '标准',
              auth: ['admin', 'customer']
            },
            {
              path: '/dashboard/new2',
              label: '卡片列表',
              auth: ['admin', 'customer']
            }
          ]
        },
        {
          icon: 'el-icon-document',
          label: '详情页',
          path: '/dashboard/detail',
          auth: ['admin', 'customer'],
          children: [
            {
              path: '/dashboard/new1',
              label: '基础详情页',
              auth: ['admin', 'customer']
            }
          ]
        },
        {
          icon: 'el-icon-circle-check-outline',
          label: '结果页',
          path: '/dashboard/result',
          auth: ['admin', 'customer'],
          children: [
            {
              path: '/dashboard/new1',
              label: '成功页',
              auth: ['admin', 'customer']
            },
            {
              path: '/dashboard/new1',
              label: '失败页',
              auth: ['admin', 'customer']
            }
          ]
        },
        {
          icon: 'el-icon-circle-close-outline',
          label: '异常页',
          path: '/dashboard/error',
          auth: ['admin', 'customer'],
          children: [
            {
              path: '/dashboard/new1',
              label: '403',
              auth: ['admin', 'customer']
            },
            {
              path: '/dashboard/new1',
              label: '404',
              auth: ['admin', 'customer']
            },
            {
              path: '/dashboard/new1',
              label: '500',
              auth: ['admin', 'customer']
            }
          ]
        },
        {
          icon: 'el-icon-star-off',
          label: '个人页',
          path: '/dashboard/classing',
          auth: ['admin', 'customer'],
          children: [
            {
              path: '/dashboard/new1',
              label: '个人中心',
              auth: ['admin', 'customer']
            },
            {
              path: '/dashboard/new1',
              label: '个人设置',
              auth: ['admin', 'customer']
            },
            {
              path: '/dashboard/new1',
              label: '修改密码',
              auth: ['admin', 'customer']
            }
          ]
        }
      ]
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
    testAuth (auth) {
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
