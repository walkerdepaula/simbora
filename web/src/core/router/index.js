import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/views/Auth.vue'

import Register from '@/views/Register.vue'
import RegisterFormStepOne from '@/shared/modules/register/_components/register-form-step-one.vue'
import RegisterFormStepTwo from '@/shared/modules/register/_components/register-form-step-two.vue'

import Calendar from '@/views/Calendar.vue'
import Profile from '@/views/Profile.vue'

import AppEvent from '@/views/Event.vue'

import eventDetail from '@/shared/modules/events/_components/event-detail.vue'
import eventCreate from '@/shared/modules/events/_components/event-create.vue'

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
      component: Register,
      children: [
        {
          path: 'step-one',
          name: 'register-step-one',
          component: RegisterFormStepOne
        },
        {
          path: 'step-two',
          name: 'register-step-two',
          component: RegisterFormStepTwo
        }
      ],
    },
    {
      path: '/event',
      name: 'event',
      component: AppEvent,
      children: [
        {
          path: 'create',
          name: 'event-create',
          component: eventCreate
        },
        {
          path: 'detail',
          name: 'event-detail',
          component: eventDetail
        }
      ]
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
  
  ]
});
