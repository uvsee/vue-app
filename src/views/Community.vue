<template>
    <div class="community">
        <ul>
            <router-link class="nav-tag" tag="li" to="/community/academic">学术讨论</router-link>
            <router-link class="nav-tag" tag="li" :to="{path: '/community/download'}">资源下载</router-link>
            <router-link class="nav-tag" tag="li" :to="{name: 'personal'}">个人中心</router-link>
        </ul>
        <router-view class=""></router-view>
    </div>
</template>

<style scoped>
.nav-tag{
    display: inline-block;
    width: 100px;
    height: 30px;
    margin: 10px;
    text-align: center;
    line-height: 30px;
    font-size: 18px;
    color: #000;
    cursor: pointer;
}
.router-link-active{
    background-color: #99f;
}
</style>
