export default {
  namespaced: true,
  state: {
    query: '',
  },
  getters: {},
  actions: {
    NEW_QUERY: ({ commit }, query) => {
      commit('SET_QUERY', query);
    },
  },
  mutations: {
    SET_QUERY: (state, query) => (state.query = query),
  },
};
