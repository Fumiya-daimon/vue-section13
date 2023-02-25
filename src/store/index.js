import Vue from 'vue';
import Vuex from 'vuex';
import Count from './modules/count';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: '',
  },
  getters,
  mutations,
  actions,
  modules: {
    Count
  }
});