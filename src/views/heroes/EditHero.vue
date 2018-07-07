<template>
  <div>
        <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="name">姓名</label>
            <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="姓名">
          </div>
          <div class="form-group">
            <label for="gender">性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="gender" placeholder="性别">
          </div>
          <button @click.prevent="handleEditHero" type="submit" class="btn btn-success">确定</button>
        </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        gender: ""
      },
      editId: -1
    };
  },
  created() {
    console.log(this.$route);
    this.editId = this.$route.params.id;
    this.handleGetList();
  },
  methods: {
    handleGetList() {
      this.$http
        .get(`/heroes/${this.editId}`)
        .then(res => {
          const { status } = res;
          if (status === 200) {
            this.formData = res.data;
          }
        })
        .catch(err => err);
    },
    handleEditHero() {
      this.$http
        .put(`heroes/${this.editId}`, this.formData)
        .then(res => {
          const { status } = res;
          if (status === 200) {
            alert("编辑成功");
            this.$router.push({ name: "heroes" });
          } else {
            console.log(status);
          }
        })
        .catch(err => err);
    }
  }
};
</script>

<style>
</style>
