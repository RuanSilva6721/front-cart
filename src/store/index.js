import { createStore } from 'vuex';

export default createStore({
  state: {
    cartItems: []
  },
  mutations: {
    ADD_TO_CART(state, product) {
      state.cartItems.push(product);
    },
    REMOVE_FROM_CART(state, index) {
      state.cartItems.splice(index, 1);
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    removeFromCart({ commit }, index) {
      commit('REMOVE_FROM_CART', index);
    }
  },
  getters: {},
  modules: {}
});
