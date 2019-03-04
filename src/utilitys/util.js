import { post } from '@/utilitys/ipAxios'
const utils = {
  signature: function () {
    // 获取登录状态
    /****
     * 检查本地是否已经有登录信息（有 - true）
     * 发请求检查服务端登录状态 （有 - ture）
     * false
     */
    if (localStorage.userId && localStorage.userId !== '') {
      return true
    }
    // 发请求
    const sessionCheck = this.getUserInfo()
    if (sessionCheck === true) {
      return true
    }
    return false
  },
  getUserInfo: async function () {
    let { data: res } = await post(
      `/login/check`,
      {})
    if (res.error.returnCode === 0) {
      localStorage.userId = res.data.id
      return true
    } else {
      return false
    }
  }
}

export default utils
