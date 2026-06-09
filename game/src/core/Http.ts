import axios from 'axios';

/**
 * Axios请求封装 - 对接后端API
 */
const http = axios.create({
  baseURL: '/api',
  timeout: 10000,
});

// 响应拦截器 - 解包统一返回格式
http.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code === 200) {
      return res.data;
    }
    return Promise.reject(new Error(res.msg || '请求失败'));
  },
  (error) => Promise.reject(error),
);

/** 获取单关卡配置 */
export const getLevelConfig = (levelNo: number) =>
  http.get(`/level/get/${levelNo}`);

/** 获取全量食材配置 */
export const getAllItems = () =>
  http.get('/item/all');

/** 提交玩家通关存档 */
export const saveUserRecord = (openid: string, maxLevel: number) =>
  http.post('/user/saveRecord', { openid, maxLevel });

export default http;
