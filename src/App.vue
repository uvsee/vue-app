<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <div class="logo" @click="handleClick">XXX Education</div>
      <ul class="nav">
        <router-link class="nav-tag" tag="li" to="/home">首页</router-link>
        <router-link class="nav-tag" tag="li" to="/learn">课程学习</router-link>
        <router-link class="nav-tag" tag="li" to="/student">学生管理</router-link>
        <router-link class="nav-tag" tag="li" :to="{path: '/community'}">社区</router-link>
        <router-link class="nav-tag" tag="li" :to="{name: 'about'}">关于</router-link>
      </ul>
    </div>
    <router-view class="container"/>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      // push replace go
      // [a, b, c] -- push(d) -- [a, b, c, d]
      // [a, b, c] -- replace(d) -- [a, b, d]
      // go(-1) -- 前进传入值个页面

      this.$router.push('/home');
      // this.$router.replace('/home');
      // this.$router.go(-1);
    }
  }
}
</script>


<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

*{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
#nav{
  background-color: #0ff;
}
.logo{
  font-size: 24px;
  color: #ff0;
  padding: 20px 0 0 200px;
  cursor: pointer;
}
.nav{
  width: 100%;
  height: 150px;
  text-align: right;
}
.nav .nav-tag{
  display: inline-block;
  margin: 20px;
  font-size: 20px;
  color: #ff0;
  cursor: pointer;
}
.nav .nav-tag.router-link-active{
  color: #f0f;
}
.container{
  padding: 0 200px;
}
</style>
