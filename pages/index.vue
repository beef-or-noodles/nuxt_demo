<template>
  <div class="container main">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <van-switch v-model="loading" size="24px"/>
    <van-skeleton title :row="3" :loading="loading">
      <div>实际内容</div>
    </van-skeleton>
    <van-button type="primary" @click="change">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <!-- 输入任意文本 -->
    <van-field v-model="text" label="文本" />
    <!-- 输入手机号，调起手机号键盘 -->
    <van-field v-model="text" type="tel" label="手机号" />
    <!-- 允许输入正整数，调起纯数字键盘 -->
    <van-field v-model="text" type="digit" label="整数" />
    <!-- 允许输入数字，调起带符号的纯数字键盘 -->
    <van-field v-model="text" type="number" label="数字" />
    <!-- 输入密码 -->
    <van-field v-model="text" type="password" label="密码" />
    <div>
      <h1 class="title home">
        我是主页
      </h1>
    </div>
    <div v-for="item in list" :key="item.id">
      {{item}}
    </div>
    <nuxt-link to="drag_demo/drag_index">拖拽页面</nuxt-link>
    <nuxt-link to="demo/demo1">路由跳转</nuxt-link>
    <nuxt-link to="demo/1">带id动态路由{{name}}</nuxt-link>
  </div>
</template>

<script>

import {mapGetters,mapActions,mapMutations} from 'vuex'
import Vue from 'vue'
import { Button as vantButton,
  Cell as vantCell,
  CellGroup as vantCellGroup,
  Field as vantField,
  Swipe as vantSwipe,
  SwipeItem  as vantSwipeItem,
  Skeleton as vantSkeleton,
  switch as vantSwitch
} from 'vant';
Vue.use(vantButton).use(vantCell).use(vantCellGroup).use(vantField).use(vantSwipeItem)
        .use(vantSwipe).use(vantSkeleton).use(vantSwitch)
export default {
  transition: 'test',
  layout:'home',
  components:{},
  computed:{
    ...mapGetters({
      name:"user/getName"
    })
  },
  head(){
    return{
      title:"首页"
    }
  },
  data(){
    return {
      text:'123',
      loading:true,
      active:0
    }
  },
  async asyncData({app}){
    const {data} = await app.$axios.get("/store/list",{name:123})
    return {list:data}
  },
  mounted () {
    this.getList()
  },
  methods:{
    ...mapActions('user',['restName']),
    ...mapMutations('user',['setName']),
    change(){
      this.restName("456")
      this.$get("/store/list",{name:123})
    },
    getList(){
        console.log("list",this.list);
    }
  }
}
</script>

<style lang="less">
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .container{
    padding-bottom: 50px;
  }
</style>
