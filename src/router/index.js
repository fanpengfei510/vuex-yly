import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login';
import LoginUp from '@/components/LoginUp';
import Home from '@/components/Home';
import MyProject from '@/components/MyProject';
import Setting from '@/components/Setting';
import Task from '@/components/Task';
import Approve from '@/components/Approve'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/loginup',
      name: 'LoginUp',
      component: LoginUp
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path : '/project/my',
      name : 'MyProject',
      component: MyProject
    },
    {
      path : '/project/task',
      name : 'Task',
      component: Task
    },
    {
      path : '/project/approve',
      name : 'Approve',
      component: Approve
    },
    {
      path : '/setting',
      name : 'Setting',
      component: Setting
    }
  ]
})
