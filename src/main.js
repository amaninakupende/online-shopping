/* jshint esversion:6 */
import Vue from 'vue';
import App from './App.vue';

//三级联动组件---注册全局组件
import TypeNav from '@/components/TypeNav';
Vue.component(TypeNav.name,TypeNav);   //第一个参数 名字 第二个参数 哪个组件
import Carousel from '@/components/Carousel';
Vue.component(Carousel.name,Carousel);
import pagination from '@/components/pagination';
Vue.component(pagination.name,pagination);

//引入路由
import router from '@/router';
Vue.config.productionTip = false;
//引入仓库
import store from './store';

// import { reqGetSearchInfo } from '@/api';
// console.log(reqGetSearchInfo({}));
//引入mockServer.js-----mock数据
import '@/mock/mockServer.js'; 
//引入swiper样式
import 'swiper/css/swiper.css';

//统一接口api文件夹里面全部请求函数(统一引入 )
import * as API from '@/api';

//引入lazyload
import VueLazyload from 'vue-lazyload';
// import atm from '@/assets/images/1.gif';
//注册lazyload
Vue.use(VueLazyload,{
  //懒加载默认图片
  // loading:atm,
});

//引入表单校验插件文件
import '@/plugins/validate';

//引入ElementUI
import { Button,MessageBox} from 'element-ui';
Vue.component(Button.name, Button);
//ElementUI注册组件写法之一，挂在原型上(需要先引入)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

const vm = new Vue({
  render: h => h(App),
  //全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  //注册路由：底下的写法KV一致省略V[router小写的]
  router,
  //注册仓库 组件实例上有一个$store属性
  store,
}).$mount('#app');
