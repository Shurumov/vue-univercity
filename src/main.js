import Vue from 'vue'
import App from './App.vue'
import { API_URL_PROD, API_VERSION } from 'config/constants';
import store from './store'
import * as axiosClient from 'utils/api/axiosClient';

axiosClient.init({store, API_URL_PROD, API_VERSION});
Vue.config.productionTip = false;
new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
