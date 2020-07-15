import Vue from 'vue';
import Vuex from 'vuex';
import * as state from './states';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  actions,
  mutations
});

export default store;