/*jshint esversion:8*/
//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";

import routes from './routes.js';
//使用插件
Vue.use(VueRouter);

import store from '@/store';

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写VueRouter.prototype身上的push方法了
VueRouter.prototype.push = function(location, resolve, reject) {
  //第一个形参：路由跳转的配置对象（query|params）
  //第二个参数：undefined|箭头函数（成功的回调）
  //第三个参数:undefined|箭头函数（失败的回调）
  if (resolve && reject) {
    //push方法传递第二个参数|第三个参数（箭头函数）
    //originPush：利用call修改上下文，变为(路由组件.$router)这个对象，第二参数：配置对象、第三、第四个参数：成功和失败回调函数
    originPush.call(this, location, resolve, reject);
  } else {
    //push方法没有产地第二个参数|第三个参数
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

//配置路由
let router = new VueRouter({
    //配置路由
    routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
        //返回的这个y=0，代表的滚动条在最上方
        return { y: 0 };
    },
});

router.beforeEach(async (to,from,next)=>{
    //to:获取到要跳转到的路由信息
    //from：获取到从哪个路由跳转过来来的信息
    //next: next() 放行  next(path) 放行
    // next();
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    if(token){
        if(to.path=='/login'){
            next('/home');
        }else {
            if(name){
                next();
            }else{
                try {
                    //没有用户信息
                    await store.dispatch('getUserInfo');
                    next();
                } catch (error) {
                    //token失效
                    await store.dispatch('userLogout');
                    next('/login');
                }           
            }
        }
    }else{
        next();
        //未登录 不能去交易相关 支付相关(pay,paysuccess,center)
        //去登录页面
        //放行 home search shopcart
        let toPath = to.path;
        if(toPath.indexOf('/trade')!==-1 || toPath.indexOf('/pay')!==-1 || toPath.indexOf('/center')!==-1){
            next('/login?redirect='+toPath);
        }else{
            next();
        }
    }
});

export default router;