import Default from '@/layouts/default'
import Dashboard from '@/layouts/dashboard'
import SignIn from '@/views/signIn'

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
    path: '/dashboard',
    auth: ['admin', 'customer'],
    name: 'Dashboard',
    showInMenu: true,
    component: Dashboard,
    children: [
      {
        label: '工作台',
        path: 'welcome',
        auth: ['admin', 'customer'],
        name: 'Welcome',
        showInMenu: true,
        component: () => import('@/views/dashboard/dashboard')
      }]
  },
  {
    icon: 'el-icon-edit-outline',
    label: '表单页',
    path: '/dashboard',
    auth: ['admin', 'customer'],
    name: 'Dashboard',
    showInMenu: true,
    component: Dashboard,
    children: [
      {
        label: '基础表单',
        path: 'basic-form',
        auth: ['admin', 'customer'],
        name: 'BasicForm',
        showInMenu: true,
        component: () => import('@/views/dashboard/basicForm')
      },
      {
        label: '分步表单',
        path: 'step-form',
        auth: ['admin', 'customer'],
        name: 'StepForm',
        showInMenu: true,
        component: () => import('@/views/dashboard/stepForm')
      }
    ]
  }, {
    icon: 'el-icon-tickets',
    label: '列表页',
    path: '/dashboard',
    auth: ['admin', 'customer'],
    name: 'Dashboard',
    showInMenu: true,
    component: Dashboard,
    children: [
      {
        label: '查询表格',
        path: 'table-list',
        auth: ['admin', 'customer'],
        name: 'TableList',
        showInMenu: true,
        component: () => import('@/views/dashboard/tableList')
      },
      {
        label: '标准列表',
        path: 'basic-list',
        auth: ['admin', 'customer'],
        name: 'BasicList',
        showInMenu: true,
        component: () => import('@/views/dashboard/basicList')
      },
      {
        label: '卡片列表',
        path: 'card-list',
        auth: ['admin', 'customer'],
        name: 'CardList',
        showInMenu: true,
        component: () => import('@/views/dashboard/cardList')
      }
    ]
  },
  {
    icon: 'el-icon-document',
    label: '详情页',
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
    path: '/dashboard',
    auth: ['admin', 'customer'],
    name: 'Dashboard',
    showInMenu: true,
    component: Dashboard,
    children: [
      {
        label: '成功页',
        path: 'result-success',
        auth: ['admin', 'customer'],
        name: 'ResultSuccess',
        showInMenu: true,
        component: () => import('@/views/dashboard/resultSuccess')
      },
      {
        label: '失败页',
        path: 'result-fail',
        auth: ['admin', 'customer'],
        name: 'ResultFailure',
        showInMenu: true,
        component: () => import('@/views/dashboard/resultFailure')
      }
    ]
  },
  {
    icon: 'el-icon-circle-close-outline',
    label: '异常页',
    path: '/dashboard',
    auth: ['admin', 'customer'],
    name: 'Dashboard',
    showInMenu: true,
    component: Dashboard,
    children: [
      {
        label: '403',
        path: 'page-403',
        auth: ['admin', 'customer'],
        name: 'Page403',
        showInMenu: true,
        component: () => import('@/views/dashboard/page403')
      },
      {
        label: '404',
        path: 'page-404',
        auth: ['admin', 'customer'],
        name: 'Page404',
        showInMenu: true,
        component: () => import('@/views/dashboard/page404')
      },
      {
        label: '500',
        path: 'page-500',
        auth: ['admin', 'customer'],
        name: 'Page500',
        showInMenu: true,
        component: () => import('@/views/dashboard/page500')
      }
    ]
  },
  {
    icon: 'el-icon-star-off',
    label: '个人页',
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
