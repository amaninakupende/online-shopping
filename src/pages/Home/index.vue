<template>
   
    <div>
         <!-- 三级联动全局组件 已经注册为全局 不需要再引入 -->
        <TypeNav></TypeNav>
        <ListContainer/>
        <Recommend/>
        <Rank/>
        <Like/>
        <Floor v-for="floor in floorList" :key="floor.id" :list="floor"/>
        <Brand/>
    </div>
    
</template>

<script>
    //引入其他的组件
    import ListContainer from '@/pages/Home/ListContainer';
    import Recommend from '@/pages/Home/Recommend';
    import Rank from '@/pages/Home/Rank';
    import Like from '@/pages/Home/Like';
    import Floor from '@/pages/Home/Floor';
    import Brand from './Brand';
    import { mapState } from 'vuex';
    export default {
        name:'Home',
        components:{
            ListContainer,Recommend,Rank,Like,Floor,Brand
        },
        mounted(){
            //派发action 获取floor组件的数据
            this.$store.dispatch('getFloorList');
            //获取登陆后用户数据
        },
        computed:{
            ...mapState({
                floorList:(state)=>state.home.floorList,
            }),
        }
    }
</script>

<style>

</style>