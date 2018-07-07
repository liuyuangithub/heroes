// 引入vue
import Vue from "vue"
// 引入路由
import Router from "vue-router"
// 引入路由相关组件
import Herose from '../views/heroes/List.vue'
import Equips from '../views/equips/List.vue'
import Weapons from '../views/weapons/List.vue'
// 注册路由
Vue.use(Router)

// 配置路由
const router = new Router({
  // 配置全局选择样式
  linkActiveClass: 'active',
  routes: [
    { name: 'heroes', path: '/heroes', component: Herose },
    { name: 'equips', path: '/equips', component: Equips },
    { name: 'weapons', path: '/weapons', component: Weapons }
  ]
})

export default router
