import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
