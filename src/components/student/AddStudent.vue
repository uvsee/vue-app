<template>
  <div class="add-student">
    <div>添加学生：{{ $store.state.student.name }}</div>
    <div>
      姓名：
      <input type="text" v-model="name">
    </div>
    <div>
      年龄：
      <input type="text" v-model="age">
    </div>
    <div>
      <button @click="handleClick">添加</button>
    </div>
    <hr>
  </div>
</template>

<script>
import { mapState, mapgetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      name: "",
      age: null
    };
  },
  methods: {
    // ...mapMutations(['changeStudentList']),
    ...mapActions(['changeStudentList']),
    handleClick() {
      const tempObj = {
        name: this.name,
        age: this.age,
        id: +new Date()
      };
      // 不能直接修改state的值
      // this.$store.state.studentList.push(tempObj);
      // commit方式
      // this.$store.commit('changeStudentList', {tempObj, name: 'wang'});
      // mapMutations方式
      this.changeStudentList({tempObj, name: 'wang'});
      // this.$store.dispatch('changeStudentList', {tempObj, name: 'wang'});
    }
  }
};
</script>

<style scoped>
div {
  margin-bottom: 15px;
}
</style>
