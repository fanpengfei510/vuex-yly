import axios from 'axios';
import { Loading } from 'element-ui';

let loading                       //定义loading变量
function startLoading(text) {     //使用Element loading-start 方法
    loading = Loading.service({
        lock: true,
        text,
        background: 'rgba(255, 255, 255, 0.8)'
    })
}
function endLoading() {           //使用Element loading-close 方法
    loading.close()
}

axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.baseURL = '/';

// // http request 拦截器
axios.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
    }
    // startLoading('加载中...');
    return config;
  },
  error => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  response => {
      //当返回信息为未登录或者登录失效的时候重定向为登录页面
      if(response && response.status != 200){
        startLoading('加载失败，请刷新页面!')
        endLoading()
      }
      return response;
  },
  error => {
      return Promise.reject(error)
  }
)

// 相应拦截器即异常处理
axios.interceptors.response.use(response => {
  return response
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log('错误请求');
        break;
      case 401:
        console.log('未授权，请重新登录')
        break;
      case 403:
        console.log('拒绝访问')
        break;
      case 404:
        console.log('请求错误,未找到该资源')
        break;
      case 405:
        console.log('请求方法未允许')
        break;
      case 408:
        console.log('请求超时')
        break;
      case 500:
        console.log('服务器端出错')
        break;
      case 501:
        console.log('网络未实现')
        break;
      case 502:
        console.log('网络错误')
        break;
      case 503:
        console.log('服务不可用')
        break;
      case 504:
        console.log('网络超时')
        break;
      case 505:
        console.log('http版本不支持该请求')
        break;
      default:
        console.log(`连接错误${err.response.status}`)
    }
  } else {
    console.log('连接到服务期失败')
  }
})

/**
|--------------------------------------------------
| @method get方法
|--------------------------------------------------
*/
export function Get(url,params={}){
  return new Promise((resolve,reject)=>{
    axios.get(url,{
      params     
    }).then(response=>{
      resolve(response.data)
    }).catch(err=>{
      reject(err)
    })
  })
}

/**
|--------------------------------------------------
| @method post 请求
|--------------------------------------------------
*/
export function Post(url,data){
  return new Promise((resolve,reject)=>{
    axios.post(url,data).then(response=>{
      resolve(response)
    },err=>{
      reject(err)
    })
  })
}

/**
|--------------------------------------------------
| @method postJson 请求
|--------------------------------------------------
*/
export function postJson(url,data){
  return new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url,
      data,
      'Content-Type': 'application/json'
    }).then(response=>{
      resolve(response)
    },err=>{
      reject(err)
    })
  })
}