<template>
    <div>
        <div class="demo">预定index</div>
    </div>

</template>

<script>
    export default {
        name: "demo1",
        layout:'home',
        head(){
            return {
                title:'预定'
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
