import request from '../utils/request';

/** 管理员登录 */
export const adminLogin = (data: { username: string; password: string }) =>
  request.post('/admin/login', data);

/** 关卡列表 */
export const getLevelList = (page: number, pageSize: number) =>
  request.get('/admin/level/list', { params: { page, pageSize } });

/** 新增/修改关卡 */
export const saveLevel = (data: { levelNo: number; itemTypeList: string[]; itemTotal: number }) =>
  request.post('/admin/level/save', data);

/** 删除关卡 */
export const deleteLevel = (levelNo: number) =>
  request.delete(`/admin/level/${levelNo}`);

/** 食材列表 */
export const getItemList = () =>
  request.get('/item/all');

/** 新增/修改食材 */
export const saveItem = (data: { itemKey: string; resPath: string }) =>
  request.post('/admin/item/save', data);

/** 删除食材 */
export const deleteItem = (itemKey: string) =>
  request.delete(`/admin/item/${itemKey}`);

/** 玩家统计 */
export const getPlayerStats = (page: number, pageSize: number) =>
  request.get('/admin/player/stats', { params: { page, pageSize } });
