import Vue from 'vue'
import App from './App.vue'
import store from './store'
import * as axiosClient from 'utils/api/axiosClient';

axiosClient.init({ store, });
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
