import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import store from './store' //vuex

axios.defaults.baseURL="/api";
Vue.prototype.qs=qs;
Vue.prototype.axios=axios;
Vue.config.productionTip = false
Vue.component('MyHeader',MyHeader);
Vue.component('MyFooter',MyFooter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
