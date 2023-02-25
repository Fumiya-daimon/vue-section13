import Vue from 'vue';
import Vuex from 'vuex';
import Count from './modules/count';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: '',
  },
  getters: {
    message: state => state.message,
  },
  mutations: {
    updateMessage(state, message) {
      state.message = message;
    }
  },
  actions: {
    // increment(context) {
    //   context.commit('increment', number);
    // }
    updateMessage({ commit }, message) {
      state.message = message;
    }
  },
  modules: {
    Count
  }
});