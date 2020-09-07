<template>
    <div>
        <div class="demo">个人中心</div>
    </div>

</template>

<script>
    export default {
        name: "demo1",
        layout:'home',
        head(){
            return {
                title:'个人中心'
            }
        },
        watch: {
            $route(newValue, oldValue) {
                console.log(oldValue,newValue);
            }
        },
        methods: {

        },
    }
</script>

<style scoped>
    .demo{
        width: 60px;
        height: 60px;
    }
</style>
