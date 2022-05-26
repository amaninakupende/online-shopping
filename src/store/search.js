/*jshint esversion:8*/
import {reqGetSearchInfo} from '@/api';
const state = {
    searchList:{}
};
const mutations = {
    GETSEARCHINFO(state,searchList){
        state.searchList = searchList;
    }
};
const actions = {
    async getSearchList({commit},params){
        //params形参:是当用户派发action时，第二个参数传递过来，至少是一个空对象
        let result = await reqGetSearchInfo(params);
        if(result.code==200){
            commit('GETSEARCHINFO',result.data);
        }
    }
};
const getters = {
    //计算属性，简化数据 方便组件获取
    //state 当前仓库中的state
    goodsList(state){
        return state.searchList.goodsList||[];
    },
    trademarketList(state){
        return state.searchList.trademarketList||[];
    },
    attrsList(state){
        return state.searchList.attrsList||[];
    }
};
export default {
    state,
    mutations,
    actions,
    getters
};