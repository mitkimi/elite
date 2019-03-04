export default {
  data () {
    return {
      defaultIndex: '/dashboard/welcome',
      menu: [
        // {
        //   icon: 'el-icon-menu', // 使用 elementUI 的 icon
        //   label: '欢迎使用', // 提示文字
        //   path: '/dashboard/welcome', // 路由点
        //   auth: ['admin', 'customer']
        // },
        {
          icon: 'el-icon-tickets',
          label: '网申',
          path: '/dashboard/apply',
          auth: ['admin', 'customer'],
          children: [
            {
              path: '/dashboard/studentList',
              label: '学员列表',
              auth: ['admin', 'customer']
            },
            {
              path: '/dashboard/mentorList',
              label: '导师列表',
              auth: ['admin', 'customer']
            }
          ]
        }
        // {
        //   icon: 'el-icon-edit-outline',
        //   label: '面试',
        //   path: '/dashboard/interview',
        //   auth: ['admin', 'customer'],
        //   children: [
        //     {
        //       path: '/dashboard/new1',
        //       label: '显示1',
        //       auth: ['admin', 'customer']
        //     },
        //     {
        //       path: '/dashboard/new2',
        //       label: '不显示1',
        //       auth: ['customer']
        //     }
        //   ]
        // },
        // {
        //   icon: 'el-icon-date',
        //   label: '上课',
        //   path: '/dashboard/classing',
        //   auth: ['admin', 'customer'],
        //   children: [
        //     {
        //       path: '/dashboard/new1',
        //       label: '显示2',
        //       auth: ['admin', 'customer']
        //     },
        //     {
        //       path: '/dashboard/new2',
        //       label: '显示3',
        //       auth: ['admin', 'customer']
        //     }
        //   ]
        // }
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
