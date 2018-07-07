<template>
<div>
  <app-header></app-header>
  <div class="container-fluid">
    <div class="row">
      <side-bar></side-bar> 
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// 导入header组件
import AppHeader from "./components/Header";
// 导入sidebar组件
import SideBar from "./components/SideBar";

// 注册组件，在入口内部注册，也相当于全局注册
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    AppHeader,
    SideBar
  }
};
</script>

<style lang="scss">
</style>
