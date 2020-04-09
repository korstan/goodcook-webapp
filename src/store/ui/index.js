export default {
  namespaced: true,
  state: {
    isHeaderVisible: false,
  },
  getters: {},
  actions: {
    SHOW_HEADER: ({ commit }) => {
      commit('SET_IS_HEADER_VISIBLE', true);
    },
    HIDE_HEADER: ({ commit }) => {
      commit('SET_IS_HEADER_VISIBLE', false);
    },
    TOGGLE_HEADER: ({ commit, state }) => {
      commit('SET_IS_HEADER_VISIBLE', !state.isHeaderVisible);
    },
  },
  mutations: {
    SET_IS_HEADER_VISIBLE: (state, isHeaderVisible) =>
      (state.isHeaderVisible = isHeaderVisible),
  },
};
