import { Get,Post } from './httpServer';
import qs from 'qs';

export default {
  // 用户登录
  userLogin(body){
    return Post("/api/post/loginin",body)
  },
  // 注册
  userLoginUp(body){
    return Post('/api/post/loginup',body)
  },
  // 系统应用于菜单
  getApp(){
    return Get("/api/get/system/applist")
  },
  // 添加菜单
  addMenu(body){
    return Post("/api/menu/addmenu",body)
  },

  // 我的项目-tabs
  getTabs(body){
    return Get(`/api/get/project/tabs/${body}`)
  },
  // 我的项目-列表
  getProjectList(body){
    return Get(`api/get/project/list/${body}`)
  },
  // 我的项目-添加项目
  addProject(body){
    return Post('api/post/project/add',body)
  }
}