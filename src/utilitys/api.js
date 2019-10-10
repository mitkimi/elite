/**
 * api 接口设置
 * 以下设置中，dev 为测试服务器地址，pro 为生产环境服务器地址，系统会根据选择开发环境或生产环境自动返回其相关的服务端地址
 */
const url = {
  dev: 'http://192.168.200.30:8081/meeting',
  pro: 'https://core.ipadmin.com'
}
//
export default {
  url: process.env.NODE_ENV === 'development' ? url.dev : url.pro
}
