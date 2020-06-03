import Vue from 'vue';
import Vuex from 'vuex';

import parts from './modules/parts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    parts,
  },
});
