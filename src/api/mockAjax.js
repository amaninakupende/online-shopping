/*jshint esversion:6*/
//对于axios进行二次封装

//引用axios
import axios from "axios";
//引入进度条  start:进度条开始 done:进度条结束
import nprogress from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css";

//1 创建axios实例
//request就是axios 只不过需要配置一下
const requests = axios.create({
    //配置对象
    //基础路径 发送请求时 路径中都会出现api
    baseURL:"/mock",

    //代表请求超时
    timeout:5000,
});

//请求拦截器 发送请求之前 拦截器可检测到 做一些事情
requests.interceptors.request.use((config)=>{

    //config:配置对象，对象里有一个属性很重要 header 请求头
    //进度条开始
    nprogress.start();
    return config;
});

//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功的回调函数 服务器响应数据回来后 响应拦截器可以检测到 做一些事情
    //进度条结束
    nprogress.done();
    return res.data;
},(error)=>{
    //响应失败的回调
    return Promise.reject(new Error('failed'));
});

export default requests;