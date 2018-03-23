import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/views/Auth.vue'
import Register from '@/views/Register.vue'
import Calendar from '@/views/Calendar.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/my-events'
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    },
    {
      path: '/my-events',
      name: 'myEvents',
      component: Calendar
    },
    {
      path: '/old-events',
      name: 'oldEvents',
      component: Calendar
    },
    {
      path: '/in-progress-events',
      name: 'inProgressEvents',
      component: Calendar
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
});
