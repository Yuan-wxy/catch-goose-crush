import { defineStore } from 'pinia';

/** 登录状态管理 */
export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('admin_token') || '',
    username: '',
  }),
  getters: {
    isLoggedIn: (state) => !!state.token,
  },
  actions: {
    /** 登录成功，存储token */
    setLogin(token: string, username: string) {
      this.token = token;
      this.username = username;
      localStorage.setItem('admin_token', token);
    },
    /** 退出登录 */
    logout() {
      this.token = '';
      this.username = '';
      localStorage.removeItem('admin_token');
    },
  },
});
