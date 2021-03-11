import { createStore } from "vuex";
const defaultState = {
  count: 0,
};
const store = createStore({
  state() {
    return defaultState;
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  getters: {
    double(state) {
      return 2 * state.count;
    },
  },
});

export default store;