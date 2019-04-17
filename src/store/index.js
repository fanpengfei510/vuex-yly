import Vue from 'vue';
import Vuex from 'vuex';
import menu from './menu';
import login from './login';
import project from './project';
import task from './task';
Vue.use(Vuex);

export default new Vuex.Store({
  modules : {
    menu,
    login,
    project,
    task
  }
})