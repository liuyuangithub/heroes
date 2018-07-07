// 引入vue
import Vue from "vue"
// 引入路由
import Router from "vue-router"
// 引入路由相关组件
import Herose from '../views/heroes/List.vue'
import Equips from '../views/equips/List.vue'
import Weapons from '../views/weapons/List.vue'
import AddHero from '../views/heroes/AddHero.vue'
import EditHero from '../views/heroes/EditHero.vue'
// 注册路由
Vue.use(Router)

// 配置路由
const router = new Router({
  // 配置全局选择样式
  linkActiveClass: 'active',
  routes: [
    { name: 'home', path: '/', redirect: { name: 'heroes' } },
    { name: 'heroes', path: '/heroes', component: Herose },
    { name: 'equips', path: '/equips', component: Equips },
    { name: 'weapons', path: '/weapons', component: Weapons },
    { name: 'addhero', path: '/heroes/addhero', component: AddHero },
    { name: 'edithero', path: '/heroes/edithero/:id', component: EditHero },
  ]
})

export default router
