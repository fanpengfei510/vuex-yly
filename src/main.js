// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import server from './utils/api'
import store from './store';
import DrawerLayout from 'vue-drawer-layout'

Vue.use(DrawerLayout)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$server = server;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
