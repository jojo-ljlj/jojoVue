import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogined:localStorage.getItem('isLogined') || 0,  //表示用户数否登录，登录即为1，未登陆为0
    userInfo:JSON.parse(localStorage.getItem('userInfo')) || {} //存储用户登录后需要的一些数据
  },
  mutations: {
    //修改登录状态为1，及登录用户的相关信息---登录
    login_mutations(state,payload){
      state.isLogined=1;
      state.userInfo=payload;
    },
    //注销
    logout_mutations(state){
      //修改登陆状态为0
      //修改登录用户信息为空对象
      state.isLogined=0;
      state.userInfo={};
    }
  },
  actions: {

  },
  modules: {
    
  }
})
