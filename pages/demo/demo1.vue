<template>
    <div>
        <div class="demo">我是demo1</div>
        <input type="color" @change="change">
    </div>

</template>

<script>
    export default {
        transition: 'test',
        name: "demo1",
        watch: {
            $route(newValue, oldValue) {
                console.log(oldValue,newValue);
            }
        },
        methods: {
            change(e) {
                document.documentElement.style.setProperty("--color-bg",e.target.value)
            }
        },
    }
</script>

<style scoped>
    .demo{
        background-color: var(--color-bg);
        width: 60px;
        height: 60px;
    }
</style>