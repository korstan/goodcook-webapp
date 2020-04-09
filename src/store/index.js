import Vue from 'vue';
import Vuex from 'vuex';

import ui from '@/store/ui';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { ui },
});
