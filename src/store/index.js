import Vue from 'vue';
import Vuex from 'vuex';

import ui from '@/store/ui';
import search from '@/store/search';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { ui, search },
});
