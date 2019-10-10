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
    icon: 'el-icon-star-off',
    label: '会议室',
    name: 'Dashboard',
    path: '/dashboard',
    auth: ['admin', 'customer'],
    showInMenu: true,
    component: Dashboard,
    children: [
      {
        label: '会议室',
        path: 'room',
        auth: ['admin', 'customer'],
        name: 'Room',
        showInMenu: true,
        component: () => import('@/views/room')
      }]
  },
  {
    icon: 'el-icon-c-scale-to-original',
    label: '预约',
    name: 'Dashboard',
    path: '/dashboard',
    auth: ['admin', 'customer'],
    showInMenu: true,
    component: Dashboard,
    children: [
      {
        label: '预约记录',
        path: 'reservationHistory',
        auth: ['admin', 'customer'],
        name: 'Room',
        showInMenu: true,
        component: () => import('@/views/reservationHistory')
      },
      {
        label: '新预约',
        path: 'reserve',
        auth: ['admin', 'customer'],
        name: 'Room',
        showInMenu: true,
        component: () => import('@/views/reserve')
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
