<template>
  <div class="person">
    姓名：
    <input type="text" v-model="name">
    <button @click="handleClick">确定</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    handleClick() {
      this.name = "";
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.name) {
      const flag = window.confirm("are you sure to leave !!!");
      if (flag) {
        this.name = "";
        next();
      }
    } else {
      next();
    }
  }
};
</script>
