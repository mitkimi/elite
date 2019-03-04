import Default from '@/layouts/default'
import Dashboard from '@/layouts/dashboard'
import SignIn from '@/views/signIn'

// Dashboard 页面
import Welcome from '@/components/HelloWorld'
import StudentList from '@/views/dashboard/studentList'
import StudentDetail from '@/views/dashboard/studentDetail'
import MentorList from '@/views/dashboard/mentorList'
import MentorDetail from '@/views/dashboard/mentorDetail'
import BCreateStudent from '@/views/dashboard/bCreateStudent'
import BUpdateStudent from '@/views/dashboard/bUpdateStudent'

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
        path: 'student',
        name: 'StudentDetail',
        component: StudentDetail
      },
      {
        path: 'studentList',
        name: 'StudentList',
        component: StudentList
      },
      {
        path: 'mentorList',
        name: 'MentorList',
        component: MentorList
      },
      {
        path: 'mentor',
        name: 'MentorDetail',
        component: MentorDetail
      },
      {
        path: 'bCreateStudent',
        name: 'BCreateStudent',
        component: BCreateStudent
      },
      {
        path: 'bUpdateStudent',
        name: 'BUpdateStudent',
        component: BUpdateStudent
      }
    ]
  }
]

export default Routes
