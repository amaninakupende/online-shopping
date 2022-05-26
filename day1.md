1.1 路由组件和非路由组件的区别
-非路由组件通常放入components 路由组件通常放入pages/views
-路由组件通常使用router-view 展示
1.2 路由的跳转
-两种形式 1 声明式导航 router-link 2 编程式导航 push|replace 

面试题
-路由传参（对象写法）path能否与params参数一起使用？（不可以）
    this.$router.push({name:"search",params:{keyword:this.keyword},query:{k:this.keyword.toUpperCase()}})

-如何指定params可传可不传？
    在配置路由的时候 在占位的后面(path)加上1个? 代表[params可传可不传]

-params可传可不传 如果传空串怎么办?(用undefined解决)
    this,$router.push({name:search,params:{keyword:''||undefined})

-路由组件能不能传递props（可以）
    三种写法

2.api文件夹通常管理axios

3.接口统一管理
-项目小 在组件的生命周期函数中发请求
-项目大:axios.get('xxx');

4.nprogress进度条
-nprogress.start():进度条开始 nprogress.done():进度条结束

5.vuex插件(状态管理库，集中式管理项目中共用的数据) 存在store中

6.函数的节流 防抖
-节流：在规定的时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发
-防抖：前面所有的触发都被取消，最后一次执行在规定的时间之后才触发。也就是如果连续快速的触发 只会执行一次
-lodash插件：封装函数的防抖与节流业务(debounce防抖，throttle节流)

7.合并params和query参数(31集)

8.mock(模拟)
-mock数据 mock.js
-使用步骤：1.src中创建文件夹mock 2.准备JSON数据 3.把mock数据需要的图片放置在public文件夹中 4.创建mockServe.js虚拟数据 5.mockServer.js需要在入口文件main.js中引入

9.模块开发
-1.静态页面 + 静态组件拆分
-2.发请求(API)
-3.vuex(三连环)
-4.组件获取仓库数据，动态展示数据

10.分页器
-1 需要知道当前多少页 pageNo
-2 需要知道每一个需要展示多少条数据 pageSize
-3 需要知道每个分页器一共有多少条数据 total
-4 需要知道分页器连续页码个数（奇数） continues
eg: 每一页3条数据 一共91条数据  【一共31页】

11.token(令牌)
-登陆成功后 服务器下发token(唯一标识符) 前台持久化存储token 
-vuex存储数据不是持久的

-别在生命周期中加async(在methods中写)

-学习过的组件库
React:antd(PC端)  antd-mobile(移动端)
Vue:ElementUI(PC) vant(移动端) 

-面试： 问：是否封装过组件
-       答：分页器、日历

-购买云服务器(阿里，腾讯...)