import Default from '@/layouts/default'
import Dashboard from '@/layouts/dashboard'
import SignIn from '@/views/signIn'

// Dashboard 页面
import Welcome from '@/views/dashboard/dashboard'
import BasicForm from '@/views/dashboard/basicForm'
import StepForm from '@/views/dashboard/stepForm'
import TableList from '@/views/dashboard/tableList'
import BasicList from '@/views/dashboard/basicList'
import CardList from '@/views/dashboard/cardList'
import ResultSuccess from '@/views/dashboard/resultSuccess'
import ResultFailure from '@/views/dashboard/resultFailure'
import Page403 from '@/views/dashboard/page403'
import Page404 from '@/views/dashboard/page404'
import Page500 from '@/views/dashboard/page500'

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
      },
      {
        path: 'table-list',
        name: 'TableList',
        component: TableList
      },
      {
        path: 'basic-list',
        name: 'BasicList',
        component: BasicList
      },
      {
        path: 'card-list',
        name: 'CardList',
        component: CardList
      },
      {
        path: 'result-success',
        name: 'ResultSuccess',
        component: ResultSuccess
      },
      {
        path: 'result-fail',
        name: 'ResultFailure',
        component: ResultFailure
      },
      {
        path: 'page-403',
        name: 'Page403',
        component: Page403
      },
      {
        path: 'page-404',
        name: 'Page404',
        component: Page404
      },
      {
        path: 'page-500',
        name: 'Page500',
        component: Page500
      }
    ]
  }
]

export default Routes
