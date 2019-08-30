import Default from '@/layouts/default'
import Dashboard from '@/layouts/dashboard'
import SignIn from '@/layouts/signIn'

const Routes = [
  {
    path: '/',
    name: 'Default',
    showInMenu: false,
    component: Default
  },
  {
    path: '/signin',
    name: 'SignIn',
    showInMenu: false,
    component: SignIn
  },
  {
    icon: 'el-icon-menu',
    label: '工作台',
    name: 'Dashboard',
    path: '/dashboard',
    auth: ['admin', 'customer'],
    showInMenu: true,
    component: Dashboard,
    children: [
      {
        label: '工作台',
        path: 'welcome',
        auth: ['admin', 'customer'],
        name: 'Welcome',
        showInMenu: true,
        component: () => import('@/views/dashboard')
      }]
  },
  {
    icon: 'el-icon-edit-outline',
    label: '表单页',
    name: 'FormPage',
    path: '/dashboard',
    auth: ['admin', 'customer'],
    showInMenu: true,
    component: Dashboard,
    children: [
      {
        label: '基础表单',
        path: 'basic-form',
        auth: ['admin', 'customer'],
        name: 'BasicForm',
        showInMenu: true,
        component: () => import('@/views/basicForm')
      },
      {
        label: '分步表单',
        path: 'step-form',
        auth: ['admin', 'customer'],
        name: 'StepForm',
        showInMenu: true,
        component: () => import('@/views/stepForm')
      }
    ]
  }, {
    icon: 'el-icon-tickets',
    label: '列表页',
    path: '/dashboard',
    auth: ['admin', 'customer'],
    name: 'ListPage',
    showInMenu: true,
    component: Dashboard,
    children: [
      {
        label: '查询表格',
        path: 'table-list',
        auth: ['admin', 'customer'],
        name: 'TableList',
        showInMenu: true,
        component: () => import('@/views/tableList')
      },
      {
        label: '标准列表',
        path: 'basic-list',
        auth: ['admin', 'customer'],
        name: 'BasicList',
        showInMenu: true,
        component: () => import('@/views/basicList')
      },
      {
        label: '卡片列表',
        path: 'card-list',
        auth: ['admin', 'customer'],
        name: 'CardList',
        showInMenu: true,
        component: () => import('@/views/cardList')
      }
    ]
  },
  {
    icon: 'el-icon-document',
    label: '详情页',
    name: 'DetailPage',
    path: '/dashboard/detail',
    auth: ['admin', 'customer'],
    showInMenu: false,
    children: [
      {
        path: '/dashboard/basic-detail',
        label: '基础详情页',
        showInMenu: false,
        auth: ['admin', 'customer']
      }
    ]
  },
  {
    icon: 'el-icon-circle-check-outline',
    label: '结果页',
    name: 'ResultPage',
    path: '/dashboard',
    auth: ['admin', 'customer'],
    showInMenu: true,
    component: Dashboard,
    children: [
      {
        label: '成功页',
        path: 'result-success',
        auth: ['admin', 'customer'],
        name: 'ResultSuccess',
        showInMenu: true,
        component: () => import('@/views/resultSuccess')
      },
      {
        label: '失败页',
        path: 'result-fail',
        auth: ['admin', 'customer'],
        name: 'ResultFailure',
        showInMenu: true,
        component: () => import('@/views/resultFailure')
      }
    ]
  },
  {
    icon: 'el-icon-circle-close-outline',
    label: '异常页',
    name: 'ErrorPage',
    path: '/dashboard',
    auth: ['admin', 'customer'],
    showInMenu: true,
    component: Dashboard,
    children: [
      {
        label: '403',
        path: 'page-403',
        auth: ['admin', 'customer'],
        name: 'Page403',
        showInMenu: true,
        component: () => import('@/views/page403')
      },
      {
        label: '404',
        path: 'page-404',
        auth: ['admin', 'customer'],
        name: 'Page404',
        showInMenu: true,
        component: () => import('@/views/page404')
      },
      {
        label: '500',
        path: 'page-500',
        auth: ['admin', 'customer'],
        name: 'Page500',
        showInMenu: true,
        component: () => import('@/views/page500')
      }
    ]
  },
  {
    icon: 'el-icon-star-off',
    label: '个人页',
    name: 'ProfilePage',
    path: '/dashboard/classing',
    auth: ['admin', 'customer'],
    showInMenu: false,
    children: [
      {
        path: '/dashboard/profile',
        label: '个人中心',
        showInMenu: false,
        auth: ['admin', 'customer']
      },
      {
        path: '/dashboard/setting',
        label: '个人设置',
        showInMenu: false,
        auth: ['admin', 'customer']
      },
      {
        path: '/dashboard/password',
        label: '修改密码',
        showInMenu: false,
        auth: ['admin', 'customer']
      }
    ]
  }
]

export default Routes
