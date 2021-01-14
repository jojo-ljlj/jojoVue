module.exports={
  // chainWebpack:config=>{
  //   config.plugins.delete("prefetch")
  //   // 删除index.html开头的带有prefetch属性的link，不要异步下载暂时不需要的
  //   // 页面组件
  // },
  //下面配置客户端http代理跨域请求
  devServer:{
    proxy:{
      '/api':{
        target: `http://127.0.0.1:3000`,
        changerOrigin:true, //是否跨域
        pathRewrite:{
          '^/api':'' //将程序中的/api，替换为控制符传，再和target中的基础路径拼接起来
          // 作为服务器的最终请求地址 
        }
      }
    }
  }
}