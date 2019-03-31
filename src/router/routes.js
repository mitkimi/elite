import Default from '@/layouts/default'
import Dashboard from '@/layouts/dashboard'
import SignIn from '@/views/signIn'

const Routes = [
  {
    path: '/',
    name: 'Default',
    component: Default
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    icon: 'el-icon-menu',
    label: '工作台',
    path: '/dashboard',
    auth: ['admin', 'customer'],
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        label: '工作台',
        path: 'welcome',
        auth: ['admin', 'customer'],
        name: 'Welcome',
        component: () => import('@/views/dashboard/dashboard')
      }]
  },
  {
    icon: 'el-icon-menu',
    label: '表单页',
    path: '/dashboard',
    auth: ['admin', 'customer'],
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        label: '基础表单',
        path: 'basic-form',
        auth: ['admin', 'customer'],
        name: 'BasicForm',
        component: () => import('@/views/dashboard/basicForm')
      },
      {
        label: '分步表单',
        path: 'step-form',
        auth: ['admin', 'customer'],
        name: 'StepForm',
        component: () => import('@/views/dashboard/stepForm')
      }
    ]
  }, {
    icon: 'el-icon-menu',
    label: '列表页',
    path: '/dashboard',
    auth: ['admin', 'customer'],
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        label: '查询表格',
        path: 'table-list',
        auth: ['admin', 'customer'],
        name: 'TableList',
        component: () => import('@/views/dashboard/tableList')
      },
      {
        label: '标准列表',
        path: 'basic-list',
        auth: ['admin', 'customer'],
        name: 'BasicList',
        component: () => import('@/views/dashboard/basicList')
      },
      {
        label: '卡片列表',
        path: 'card-list',
        auth: ['admin', 'customer'],
        name: 'CardList',
        component: () => import('@/views/dashboard/cardList')
      }
    ]
  },
  {
    icon: 'el-icon-menu',
    label: '结果页',
    path: '/dashboard',
    auth: ['admin', 'customer'],
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        label: '成功页',
        path: 'result-success',
        auth: ['admin', 'customer'],
        name: 'ResultSuccess',
        component: () => import('@/views/dashboard/resultSuccess')
      },
      {
        label: '失败页',
        path: 'result-fail',
        auth: ['admin', 'customer'],
        name: 'ResultFailure',
        component: () => import('@/views/dashboard/resultFailure')
      }
    ]
  },
  {
    icon: 'el-icon-menu',
    label: '异常页',
    path: '/dashboard',
    auth: ['admin', 'customer'],
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        label: '403',
        path: 'page-403',
        auth: ['admin', 'customer'],
        name: 'Page403',
        component: () => import('@/views/dashboard/page403')
      },
      {
        label: '404',
        path: 'page-404',
        auth: ['admin', 'customer'],
        name: 'Page404',
        component: () => import('@/views/dashboard/page404')
      },
      {
        label: '500',
        path: 'page-500',
        auth: ['admin', 'customer'],
        name: 'Page500',
        component: () => import('@/views/dashboard/page500')
      }
    ]
  }
]

export default Routes
