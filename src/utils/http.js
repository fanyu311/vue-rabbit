// axios 基础封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/es/components/message/style/css'
const httpInstance = axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000,
})

//拦截器

//axios请求拦截器
httpInstance.interceptors.request.use(config=> {
    // 在发送请求之前做些什么
    return config;
  }, e=> 
    // 对请求错误做些什么
    Promise.reject(e));
//axios 响应式拦截器
httpInstance.interceptors.response.use(res=> res.data, e=>{
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
  // 统一错误提示
  ElMessage({
    type: 'warning',
    message:e.response.data.message
  })
    return Promise.reject(e);
  });
export default httpInstance