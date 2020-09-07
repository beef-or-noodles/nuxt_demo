<template>
    <div class="layout_main">
        <nuxt />
        <van-tabbar route>
            <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item replace to="/reserver" icon="todo-list-o">预定</van-tabbar-item>
            <van-tabbar-item replace to="/user" icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
    import {  Tabbar as vantTabbar,TabbarItem as vantTabbarItem} from 'vant'
    import Vue from 'vue'
    Vue.use(vantTabbar).use(vantTabbarItem)
    export default {
        name: "home",
        data(){
            return {
                active:0
            }
        }
    }
</script>
<style scoped>

</style>