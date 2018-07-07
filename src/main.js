import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
// 引入路由
import router from './routers/routers'
// 引入MyAxios
import axios from './plugins/MyAxios'
Vue.use(axios)
new Vue({
  el: '#app',
  render: h => h(App),
  // 挂载到Vue实例
  router
})
