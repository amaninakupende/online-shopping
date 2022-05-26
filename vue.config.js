/* jshint esversion:6 */
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  //项目打包后关闭map文件
  productionSourceMap:false,

  transpileDependencies: true,
  // 关闭eslint
  lintOnSave: false,

  //代理跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
        // pathRewrite: { "^/api": "" }
      }
    }
  }

});
