import {post} from '../../../utilitys/ipAxios'

export default {
  data () {
    return {
      loading: false,
      listDeleteIndex: -1,
      onceList: [],
      studentsInfo: {
        studentName: '',
        studentPhone: '',
        applicationList: [
          {
            projectName: '',
            applySchoolName: '',
            teacherName: '',
            deadline: null
          }
        ]
      }
    }
  },
  methods: {
    handleAddApply () {
      const obj = {
        projectName: '',
        applySchoolName: '',
        teacherName: '',
        deadline: null
      }
      this.studentsInfo.applicationList.push(obj)
    },
    handleCopyApply () {
      const obj = {
        projectName: this.studentsInfo.applicationList[this.studentsInfo.applicationList.length - 1].projectName,
        applySchoolName: '',
        teacherName: this.studentsInfo.applicationList[this.studentsInfo.applicationList.length - 1].teacherName,
        deadline: null
      }
      this.studentsInfo.applicationList.push(obj)
    },
    handleEdit (id) {
      this.$router.push({
        path: '/dashboard/bUpdateStudent',
        query: {
          id
        }
      })
    },
    async handleCreateSubmit () {
      this.loading = true
      // const uri = '/application/create/test'
      const uri = '/application/create'
      const studentsInfo = this.studentsInfo
      // console.log(studentsInfo)
      studentsInfo.applicationList.map(element => {
        if (element.deadline !== null) {
          element.deadline = Date.parse(element.deadline)
        } else {
          element.deadline = ''
        }
      })
      const params = {
        studentsInfo
      }
      const {data: res} = await post(uri, params)
      if (res.error.returnCode === 0) {
        this.$message.success('添加成功，您可以继续添加')
        this.onceList.push(res.data)
      } else {
        this.$message.error(`${res.error.returnUserMessage}`)
      }
      this.loading = false
      // 最后清掉录入表格
      this.studentsInfo = {
        studentName: '',
        studentPhone: '',
        applicationList: [
          {
            projectName: '',
            applySchoolName: '',
            teacherName: '',
            deadline: ''
          }
        ]
      }
    },
    handleDeleteListItem (index) {
      // console.log(index)
      this.studentsInfo.applicationList.splice(index, 1)
    },
    async handleDestroyListApply (applicationId, studentIndex, applicationIndex) {
      // console.log(arguments)
      // 删除流程
      const uri = '/application/delete'
      const params = {
        applicationId
      }
      const {data: res} = await post(uri, params)
      if (res.error.returnCode === 0) {
        // 删除条目
        this.onceList[studentIndex].applicationList.splice(applicationIndex, 1)
        if (this.onceList[studentIndex].applicationList.length <= 0) {
          this.onceList.splice(studentIndex, 1)
        }
        // 提示成功
        this.$message.success('删除成功')
      } else {
        this.$message.error(`删除失败：${res.error.returnUserMessage}`)
      }
    }
  }
}
