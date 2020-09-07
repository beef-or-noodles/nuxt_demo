<template>
    <div class="demo">{{id}}</div>
</template>

<script>
    export default {
        middleware: 'auth',//单页使用执行中间件
        transition: 'test',
        layout:"content",
        watchQuery: ['id'],//监听动态路由参数变化
        /*参数校对返回boolean*/
        validate({params}){
            return true
        },
        name: "_id",
        asyncData({params}){
            return { id: params.id }
        },
        fetch(){
          //不会设置组件data
        },
        head(){
            //设置meta标签
        },
        mounted() {

        }
    }
</script>

<style scoped>
.demo{
    width: 100px;
    height: 100px;
    background: #3b8070;
}
</style>