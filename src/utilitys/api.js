const url = {
  // dev: 'http://192.168.1.89:10096',
  dev: 'https://gec-api.gecacademy.cn/synergy',
  pro: 'https://gec-api.gecacademy.cn/synergy'
}
//
export default {
  url: process.env.NODE_ENV === 'development' ? url.dev : url.pro
}
