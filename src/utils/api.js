import { Get,Post } from './httpServer';
import qs from 'qs';

export const server = {
  // 用户登录
  userLogin(body){
    return Post("/api/user/loginin",body)
  },
  // 菜单列表
  getMenu(){
    return Get("/api/menu/list")
  },
  // 添加菜单
  addMenu(body){
    return Post("/api/menu/addmenu",body)
  }
}