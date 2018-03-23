import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import register from '@/shared/modules/register/_store'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters,
  modules: {register}
})
