<template>
  <div>
        <h2 class="sub-header">英雄列表</h2>
        <a class="btn btn-success" href="add.html">Add</a>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>名称</th>
                <th>性别</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr :key="item.id" v-for="(item, index) in list">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.gender }}</td>
                <td>
                  <a href="edit.html">编辑</a>
                  &nbsp;&nbsp;
                  <a @click="handleDelList(item.id)" href="javascript:;">删除</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: {
        name: "",
        gender: ""
      }
    };
  },
  // 在created是请求数据
  created() {
    // 要调用方法
    this.handlerGetList();
  },
  methods: {
    handlerGetList() {
      this.$http
        .get("heroes")
        .then(res => {
          console.log(res);
          const { status, data } = res;
          if (status === 200) {
            this.list = data;
          }
        })
        .catch(err => err);
    },
    handleDelList(id) {
      if (!confirm("是否确认删除")) {
        return;
      }
      this.$http.delete(`heroes/${id}`).then(res => {
        const { status } = res;
        if (status === 200) {
          this.handlerGetList();
        }
      });
    }
  }
};
</script>

<style>
</style>

