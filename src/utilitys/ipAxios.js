import axios from 'axios'
import apiUrl from './api.js'
import qs from 'qs'

const useToken = true

axios.defaults.timeout = 20000
axios.defaults.baseURL = apiUrl.url
axios.defaults.withCredentials = true
// axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
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
  // 在所有 get 接口出现 token 超时的时候直接跳去登录
  if (localStorage.tokenExpiredAt * 1 < new Date() * 1) {
    alert('登录超时')
    return
  }
  return new Promise((resolve, reject) => {
    axios.get(url, qs.stringify(params))
      .then((response) => {
        resolve(response)
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
export function post (url, params = {}, noToken = false) {
  // 在所有 post 接口出现 token 超时的时候直接跳去登录
  if (!noToken && localStorage.tokenExpiredAt * 1 < new Date() * 1) {
    alert('登录超时')
    return
  }
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params))
      .then(function (response) {
        resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}
