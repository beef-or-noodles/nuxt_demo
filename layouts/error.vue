<template>
    <div>
        自定义错误页面{{error.statusCode}}
        <h1 v-if="error.statusCode === 404">页面不存在</h1>
        <h1 v-else>应用发生错误异常</h1>
        <nuxt-link to="/">首 页</nuxt-link>
    </div>
</template>

<script>
    export default {
        name: "error",
        props: ['error']
    }
</script>

<style scoped>

</style>