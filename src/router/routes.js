/* jshint esversion:11 */
//路由配置信息
//引入路由组件
// import Home from '@/pages/Home';
// import Search from '@/pages/Search';
// import Login from '@/pages/Login';
// import Register from '@/pages/Register';
// import Detail from '@/pages/Detail';
// import AddCartSuccess from '@/pages/AddCartSuccess';
// import ShopCart from '@/pages/ShopCart';
// import Trade from '@/pages/Trade';
// import Pay from '@/pages/Pay';
// import PaySuccess from '@/pages/PaySuccess';
// import Center from '@/pages/Center';

//引入二级路由
import MyOrder from '@/pages/Center/MyOrder';
import GroupOrder from '@/pages/Center/GroupOrder';

/* 
    component: () => import('@/pages/Search')
1. import(modulePath): 动态import引入模块, 被引入的模块会被单独打包
2. 组件配置的是一个函数, 函数中通过import动态加载模块并返回, 
    初始时函数不会执行, 第一次访问对应的路由才会执行, 也就是说只有一次请求对应的路由路径才会请求加载单独打包的js
作用: 用于提高首屏的加载速度
*/

export default [
        // 重定向 项目启动时 定向开启的页面
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:"/home",
            component:()=>import('@/pages/Home'),
            meta:{show:true}
        },
        {
            path:"/search/:keyword?",
            component:()=>import('@/pages/Search'),
            meta:{show:true},
            name:"search"
        },
        {
            path:"/login",
            component:()=>import('@/pages/Login'),
            meta:{show:false}
        },
        {
            path:"/register",
            component:()=>import('@/pages/Register'),
            meta:{show:false}
        },
        {
            path:'/detail/:skuid',
            component:()=>import('@/pages/Detail'),
            meta:{show:true},
            name:'detail'
        },
        {
            path:'/addcartsuccess',
            component:()=>import('@/pages/AddCartSuccess'),
            meta:{show:true},
            name:'addcartsuccess'
        },
        {
            path:'/shopcart',
            component:()=>import('@/pages/ShopCart'),
            meta:{show:true},
            name:'shopcart'
        },
        {
            path:"/trade",
            component:()=>import('@/pages/ShopCart'),
            meta:{show:true},
            name:'trade',
            //路由独享守卫
            beforeEnter: (to, from, next) => {
                if(from.path == '/shopcart'){
                    next();
                }else{
                    next(false);
                }
            }
        },
        {
            path:"/pay",
            component:()=>import('@/pages/Pay'),
            meta:{show:true},
            beforeEnter: (to, from, next) => {
                if(from.path == '/pay'){
                    next();
                }else{
                    next(false);
                }
            }
        },
        {
            path:"/paysuccess",
            component:()=>import('@/pages/PaySuccess'),
            meta:{show:true},
        },
        {
            path:"/center",
            component:()=>import('@/pages/Center'),
            meta:{show:true},
            //二级路由
            children:[
                {
                    path:'myorder',
                    component:MyOrder
                },
                {
                    path:'grouporder',
                    component:GroupOrder
                },
                //重定位
                {
                    path:'/center',
                    redirect:'/center/myorder',
                }
            ]
        },
];