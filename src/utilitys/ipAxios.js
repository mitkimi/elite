import axios from 'axios'
// import { Message } from 'iview';
import apiUrl from './api.js'
import router from '../router'

const useToken = true

axios.defaults.timeout = 20000
axios.defaults.baseURL = apiUrl.url
axios.defaults.withCredentials = true
// axios.defaults.headers = { 'Content-Type': 'application/json; charset=utf-8' }
axios.defaults.headers.post['Content-Type'] = 'application/json'
if (useToken) {
  axios.defaults.headers.get['token'] = localStorage.token
  axios.defaults.headers.post['token'] = localStorage.token
}
// http request 拦截器
axios.interceptors.request.use(

)

// http response 拦截器
axios.interceptors.response.use(

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
        if (response.code === -1000) {
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
        // 在所有 post 接口出现 -1000 状态时直接跳去登录
        if (response.code === -1000 && url !== '/login/check') {
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
