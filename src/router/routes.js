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
        icon: 'el-icon-menu',
        label: '工作台',
        path: 'welcome',
        auth: ['admin', 'customer'],
        name: 'Welcome',
        component: () => import('@/views/dashboard/dashboard')
      },
      {
        path: 'basic-form',
        name: 'BasicForm',
        component: () => import('@/views/dashboard/basicForm')
      },
      {
        path: 'step-form',
        name: 'StepForm',
        component: () => import('@/views/dashboard/stepForm')
      },
      {
        path: 'table-list',
        name: 'TableList',
        component: () => import('@/views/dashboard/tableList')
      },
      {
        path: 'basic-list',
        name: 'BasicList',
        component: () => import('@/views/dashboard/basicList')
      },
      {
        path: 'card-list',
        name: 'CardList',
        component: () => import('@/views/dashboard/cardList')
      },
      {
        path: 'result-success',
        name: 'ResultSuccess',
        component: () => import('@/views/dashboard/resultSuccess')
      },
      {
        path: 'result-fail',
        name: 'ResultFailure',
        component: () => import('@/views/dashboard/resultFailure')
      },
      {
        path: 'page-403',
        name: 'Page403',
        component: () => import('@/views/dashboard/page403')
      },
      {
        path: 'page-404',
        name: 'Page404',
        component: () => import('@/views/dashboard/page404')
      },
      {
        path: 'page-500',
        name: 'Page500',
        component: () => import('@/views/dashboard/page500')
      }
    ]
  }
]

export default Routes
