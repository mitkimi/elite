import axios from 'axios'
// import { Message } from 'iview';
import apiUrl from './api.js'
import router from '../router'

axios.defaults.timeout = 20000
axios.defaults.baseURL = apiUrl.url
axios.defaults.withCredentials = true
// axios.defaults.headers = { 'Content-Type': 'application/json; charset=utf-8' }
axios.defaults.headers.post['Content-Type'] = 'application/json'
// http request 拦截器
axios.interceptors.request.use(
  // (config) => {
  //   // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
  //   // config.data = JSON.stringify(config.data)
  //   config.headers = {
  //     'Content-Type': 'application/json; charset=utf-8'
  //   }
  //   // if(token){
  //   //   config.params = {'token':token}
  //   // }
  //   return config
  // }
  // eslint 报错 已声明“error”，但从未读取其值。
  // error => {
  //   return Promise.reject(err)
  // }
)

// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.data.errCode * 1 === 2) {
      // eslint 报错 'router' is not defined.
      // router.push({
      //   path: '/login',
      //   querry: { redirect: router.currentRoute.fullPath }// 从哪个页面跳转
      // })
    }
    return response
  },
  error => Promise.reject(error)
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params
    })
      .then((response) => {
        resolve(response)
        // console.log('from fetch promise', url, response)
        if (response.data.error.returnCode === -1) {
          router.push({
            path: '/signin'
          })
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 封装post方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(function (response) {
        resolve(response)
        // 在所有 post 接口出现 1000 状态时直接跳去登录
        // console.log('from post promise', url, response)
        if (response.data.error.returnCode === -1 && url !== '/login/check') {
          router.push({
            path: '/signin'
          })
        }
      })
      .catch(function (error) {
        reject(error)
      })
  })
}
