<template>
    <div>
        <Header></Header>
        <!-- 路由组件出口的地方 -->
        <router-view></router-view>
        <!-- 在Home Search显示 登录 注册 隐藏 -->
        <Footer v-show="$route.meta.show"></Footer>
    </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
    name:'App',
    components:{Header,Footer},
    mounted(){
        //组件挂载完毕 可以向服务器发请求
        this.$store.dispatch("categoryList");
    }
}
</script>

<style>

</style>