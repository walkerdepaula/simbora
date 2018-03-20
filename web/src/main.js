// Import jQuery
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

// Slick carrousel
import 'slick-carousel/slick/slick.css';

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

const BASE_URL = process.env.BASE_URL

import VueResource from 'vue-resource'

Vue.use(VueMaterial);
Vue.use(VueResource);

Vue.http.options.crossOrigin = true
Vue.http.options.xhr = {withCredentials: true}
Vue.http.options.root = BASE_URL + 'api/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
