<template>
  <div>
        <h2 class="sub-header">编辑英雄</h2>
        <form>
          <div class="form-group">
            <label for="name">姓名</label>
            <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="姓名">
          </div>
          <div class="form-group">
            <label for="gender">性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="gender" placeholder="性别">
          </div>
          <button @click.prevent="handleAddHero" type="submit" class="btn btn-success">添加</button>
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
      }
    };
  },
  methods: {
    handleAddHero() {
      this.$http
        .post(`heroes`, this.formData)
        .then(res => {
          const { status } = res;
          if (status === 201) {
            alert("添加成功");
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
