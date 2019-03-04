import GecStatusPicker from '@/components/statusBlock'
import { post } from '../../../utilitys/gecAxios'
export default {
  components: {
    GecStatusPicker
  },
  data () {
    return {
      loading: true,
      data: {},
      pageData: {
        currentStudent: {}
      }
    }
  },
  created () {
    this.initPageData()
  },
  mounted () {},
  methods: {
    initPageData () {
      this.getCurrentStudentInfo()
    },
    async getCurrentStudentInfo () {
      const uri = '/application/query/by/studentId'
      const params = {
        studentId: this.$route.query.id
      }
      const { data: res } = await post(uri, params)
      if (res.error.returnCode === 0) {
        const data = res.data
        data.applicationList.map(element => {
          element.projectId = ''
          element.applySchoolId = ''
          element.teacherId = ''
        })
        this.pageData.currentStudent = data
        this.loading = false
      } else {
        this.$message.error(`${res.error.returnUserMessage}`)
      }
    },
    handleAddSchool () {
      const obj = {
        isDeleted: false, // 用于标记这个对象是否被删除
        applicationId: '', // 申请id
        projectId: '', // 项目id
        projectName: '', // 项目名称
        applySchoolName: '', // 申请学校名字
        applySchoolId: '', // 申请学校id
        teacherName: '', // 推荐人
        teacherId: '', // 推荐人id
        deadline: null, // ddl时间 时间戳
        submitDate: null, // 提交时间 时间戳
        remark: '', // 备注信息
        url: '', // 链接
        applicationStatus: 1 // 申请状态 1,没有任何改变 2,未收到链接 3,收到链接 4,完成申请 5,暂不申请
      }
      this.pageData.currentStudent.applicationList.push(obj)
    },
    handleCopySchool () {
      const obj = {
        isDeleted: false, // 用于标记这个对象是否被删除
        applicationId: '', // 申请id
        projectId: '', // 项目id
        projectName: this.pageData.currentStudent.applicationList[this.pageData.currentStudent.applicationList.length - 1].projectName, // 项目名称
        applySchoolName: '', // 申请学校名字
        applySchoolId: '', // 申请学校id
        teacherName: this.pageData.currentStudent.applicationList[this.pageData.currentStudent.applicationList.length - 1].teacherName, // 推荐人
        teacherId: '', // 推荐人id
        deadline: null, // ddl时间 时间戳
        submitDate: null, // 提交时间 时间戳
        remark: '', // 备注信息
        url: '', // 链接
        applicationStatus: 1 // 申请状态 1,没有任何改变 2,未收到链接 3,收到链接 4,完成申请 5,暂不申请
      }
      this.pageData.currentStudent.applicationList.push(obj)
    },
    async handleSaveSubmit () {
      this.loading = true
      const uri = '/application/update'
      const applyInfo = JSON.parse(JSON.stringify(this.pageData.currentStudent))

      applyInfo.applicationList.map(element => {
        element.deadline = element.deadline ? Date.parse(element.deadline) : null
        element.submitDate = element.submitDate ? Date.parse(element.submitDate) : null
      })
      const params = {
        applyInfo
      }
      const {data: res} = await post(uri, params)
      if (res.error.returnCode === 0) {
        this.$message.success('保存成功！')
        this.$router.push({
          path: '/dashboard/studentList'
        })
      } else {
        this.$message.error(`保存失败：${res.error.returnUserMessage}，请稍后再试`)
        this.loading = false
      }
    },
    submitDate (date, index) {
      this.pageData.currentStudent.applicationList[index].submitDate = date
    },
    setCurrentStatus (status, index) {
      this.pageData.currentStudent.applicationList[index].applicationStatus = status
    },
    handleDeleteListItem (index) {
      // console.log(this.pageData.currentStudent.applicationList[index])
      // this.$refs.schoolItem[index].style.borderColor = 'tomato'
      this.$refs.schoolItem[index].style.display = 'none'
      this.pageData.currentStudent.applicationList[index].isDeleted = true
    }
  }
}
