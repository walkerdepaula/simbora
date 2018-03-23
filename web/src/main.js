import Vue from 'vue';
import App from './App.vue';

import router from './core/router';
import store from './core/store';
import './core/api';

import './shared/plugins/jquery.js'
import './shared/plugins/moment.js'
import './shared/plugins/slick-carousel.js'
import './shared/plugins/material-design.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
