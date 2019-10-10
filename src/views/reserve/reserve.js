import { post } from '../../utilitys/ipAxios'
import NumberGrow from '../../components/numberGrow'
import Moment from 'moment'
export default {
  components: {
    // GecStudentList,
    NumberGrow
  },
  data () {
    return {
      filterShow: false,
      loading: true,
      form: {
        name: '',
        reservation: '请大家来参加我的会议',
        partner: '',
        period: {
          startAt: null,
          endAt: null
        },
        notify: [],
        room: ''
      },
      pageData: {
        options: [],
        rooms: []
      }
    }
  },
  mounted () {
    this.initPageData()
    // this.testQueryRoom()
  },
  methods: {
    // 加载页面基础数据
    initPageData () {
      this.getToken()
    },
    async getToken () {
      // 获取 token
      const uri = '/dingtalk/gettoken'
      const params = {}
      const { data: res } = await post(uri, params)
      if (res.messageCode * 1 === 0) {
        const token = res.data.accessToken
        window.localStorage.token = token
        // 已经获取 token 并且存入本地
        // 获取部门列表
        this.queryDepartmentList(token)
      } else {
        this.$message.error('get token failed')
      }
    },
    async autoQueryFreeRoom() {
      const { startAt, endAt } = this.form.period
      // 测试：是否时间匹配
      const now = new Date() * 1
      if (startAt * 1 <= now) {
        this.$message.error('选择时间不能早于此刻时间')
        this.form.period.startAt = now
        return
      }
      if (endAt && startAt >= endAt) {
        this.$message.error('结束时间不能早于开始时间')
        this.form.period.endAt = startAt * 1 + 1800 * 1000
        return
      }
      const uri = '/meeting/getFreeRooms'
      const params = {
        startTime: Moment(startAt).format('YYYY-MM-DD HH:mm:ss'),
        endTime: Moment(endAt).format('YYYY-MM-DD HH:mm:ss')
      }
      console.log('params:', params)
      const { data: res } = await post(uri, params)
      this.pageData.rooms = res.data
    },
    async queryDepartmentList (accessToken) {
      console.log(accessToken)
      // 获取 部门列表
      const uri = '/dingtalk/getDepartmentList'
      const params = {
        accessToken
      }
      const { data: res } = await post(uri, params)
      if (res.messageCode * 1 === 0) {
        const id = res.data.department[0].id || 0
        this.queryDeptUserList(accessToken, id)
      }
    },
    async queryDeptUserList (accessToken, deptId) {
      const uri = '/dingtalk/getDeptUserList'
      const params = {
        accessToken,
        deptId,
        order: 'custom'
      }
      const { data: res } = await post(uri, params)
      console.log(res)
      if (res.messageCode * 1 === 0) {
        const userList = res.data.userlist || []
        this.pageData.options = userList
      }
    }
  }
}
