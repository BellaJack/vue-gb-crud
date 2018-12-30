import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
const fb = require('./config/firebaseConf.js');

Vue.config.productionTip = false;

let app = '';

fb.auth.onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});
