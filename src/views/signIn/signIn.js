import { post } from '@/utilitys/gecAxios'
export default {
  data () {
    return {
      loading: false,
      pageData: {
        rememberMe: false,
        signInMethod: '密码登录',
        verifcationCode: {
          button: '获取验证码',
          disabled: false,
          countDown: 60
        }
      },
      form: {
        userkey: null,
        password: null,
        code: null,
        pin: null
      }
    }
  },
  methods: {
    handleGetVerifictionCode () {
      // 防灌水逻辑
      this.getVerifictionCode()
    },
    async getVerifictionCode () {
      // 获取验证码逻辑
      /**
       * 获取验证码：发送获取验证码请求 - 关闭按钮可用 - 倒计时 - 打开按钮可用
       */
      if (!this.form.userkey) {
        this.$message.error('请输入手机号码')
        return
      }
      if (!/[1][3,4,5,6,7,8,9][0-9]\d{4,8}$/.test(this.form.userkey)) {
        this.$message.error('手机号码格式不正确')
        return
      }
      this.pageData.verifcationCode.disabled = true
      this.pageData.verifcationCode.button = `${this.pageData.verifcationCode.countDown}秒后获取`
      const params = {
        target: this.form.userkey,
        type: 'phone',
        purpose: '短信登录'
      }
      const { data: res } = await post('/code/create', params)
      if (res.code >= 0) {
        const verifyBtnCountdown = setInterval(() => {
          if (this.pageData.verifcationCode.countDown <= 1) {
            // 计时器结束
            clearInterval(verifyBtnCountdown)
            this.pageData.verifcationCode.countDown = 60
            this.pageData.verifcationCode.button = '获取验证码'
            this.pageData.verifcationCode.disabled = false
          } else {
            this.pageData.verifcationCode.countDown -= 1
            // //
            this.pageData.verifcationCode.button = `${this.pageData.verifcationCode.countDown}秒后获取`
          }
        }, 1000)
      } else {
        this.$message.error(`发送失败：${res.error}`)
      }
    },
    async handleSubmit () {
      // const params = this.form
      // // 添加登录方式
      // switch (this.pageData.signInMethod) {
      //   case '密码登录':
      //     params.type = 'password'
      //     break
      //   case 'PIN登录':
      //     params.type = 'pin'
      //     break
      //   case '短信登录':
      //     params.type = 'smscode'
      //     break
      //   default:
      //     break
      // }
      this.loading = true
      const params = {
        name: this.form.userkey,
        password: this.form.password
      }
      const { data: res } = await post('/user/login', params)
      if (res.error.returnCode === 0) {
        // 成功
        this.$message.success('登录成功')
        // 跳转判断终端是移动端还是pc端
        // this.$router.push({
        //   path: '/filter'
        // })
        // 登录成功，写一些内容在 localStroage 里
        // localStorage.token = res.data.token
        // localStorage.face = res.data.userInfo.defaultFace || 'customer'
        // localStorage.isAdmin = res.data.userInfo.isAdmin || 0
        // localStorage.isShop = res.data.userInfo.isShop || 0
        // localStorage.userInfo = JSON.stringify(res.data.userInfo)
        localStorage.realName = res.data.realName
        localStorage.phone = res.data.phone
        localStorage.email = res.data.phone
        this.$router.push({
          path: '/dashboard/welcome'
        })
      } else {
        this.$message.error(`登录失败：${res.error.returnUserMessage}`)
        this.loading = false
      }
    }
  }
}
