import Default from '@/layouts/default'
import Dashboard from '@/layouts/dashboard'
import SignIn from '@/views/signIn'

// Dashboard 页面
import Welcome from '@/views/dashboard/dashboard'
import BasicForm from '@/views/dashboard/basicForm'
import StepForm from '@/views/dashboard/stepForm'

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
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: 'welcome',
        name: 'Welcome',
        component: Welcome
      },
      {
        path: 'basic-form',
        name: 'BasicForm',
        component: BasicForm
      },
      {
        path: 'step-form',
        name: 'StepForm',
        component: StepForm
      }
    ]
  }
]

export default Routes
