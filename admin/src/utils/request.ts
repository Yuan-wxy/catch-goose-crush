import axios from 'axios';
import { ElMessage } from 'element-plus';

/** Axios统一请求封装 */
const request = axios.create({
  baseURL: '/api',
  timeout: 10000,
});

// 请求拦截器 - 附加token
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('admin_token');
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 响应拦截器 - 统一错误处理
request.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 200) {
      ElMessage.error(res.msg || '请求失败');
      // 401未授权，跳转登录
      if (res.code === 401) {
        localStorage.removeItem('admin_token');
        window.location.href = '/login';
      }
      return Promise.reject(new Error(res.msg));
    }
    return res;
  },
  (error) => {
    ElMessage.error(error.message || '网络错误');
    return Promise.reject(error);
  },
);

export default request;
