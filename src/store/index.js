import { createStore } from 'vuex';

export default createStore({
  state: {
    cartItems: []
  },
  mutations: {
    ADD_TO_CART(state, product) {
      state.cartItems.push(product);
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    }
  },
  getters: {
    
  },
  modules: {
   
  }
});
