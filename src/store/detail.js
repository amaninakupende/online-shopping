/*jshint esversion:8 */
import { reqAddOrUpdateShopCart, reqGoodsInfo } from "@/api";
import {getUUID} from '@/utils/uuid_token';
const state = {
    goodInfo:{},
    uuid_token:getUUID(),
};
const mutations = {
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo;
    },
};
const actions = {
    //获取产品信息action
    async getGoodInfo({commit},skuId){
        let result = await reqGoodsInfo(skuId);
        if(result.code == 200){
            commit('GETGOODINFO',result.data);
        }
    },
    //将产品加入购物车
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        let result = await reqAddOrUpdateShopCart(skuId,skuNum);
        //服务器只返回code200 没有别的数据 所以不需要三连环存储数据
        if(result.code == 200){
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
};
const getters = {
    categoryView(state){
        return state.goodInfo.categoryView||{};
    },
    skuInfo(state){
        return state.goodInfo.skuInfo||{};
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList||[];
    }
};
export default {
    state,
    mutations,
    actions,
    getters
};
