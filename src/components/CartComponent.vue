<template>
  <div class="cart">
    <h2 class="cart-title">Checkout</h2>
    <ul class="cart-items">
      <li v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <div class="item-info">
          <span class="item-name">{{ item.name }}</span>
          <span class="item-price">{{ item.quantity }}</span>
        </div>
        <button @click="removeFromCart(index)" class="remove-btn"><i class="fa-solid fa-trash"></i></button>
      </li>
    </ul>
    <button @click="checkout" :disabled="cartItems.length === 0" class="checkout-btn">Finalizar Compra</button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const cartItems = computed(() => store.state.cartItems);

const removeFromCart = (index) => {
  store.dispatch('removeFromCart', index);
};

const checkout = () => {
  console.log('Compra finalizada!');
  store.commit('checkout');
};



</script>

<style lang="sass" scoped>
.cart 
  background-color: #f9f9f9
  padding: 20px
  border-radius: 4px
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1)
  text-align: center
  justify-content: center
  align-items: center

.cart-title 
  font-size: 1.5em
  margin-bottom: 10px

.cart-items 
  list-style-type: none
  padding: 0

.cart-item 
  display: flex
  align-items: center
  justify-content: space-between
  margin-bottom: 10px

.item-info 
  display: flex
  align-items: center

.item-name 
  font-weight: bold
  margin-right: 10px

.item-price 
  font-size: 0.9em

.remove-btn 
  background-color: #ff5858
  color: white
  border: none
  border-radius: 4px
  padding: 5px 10px
  justify-content: center
  cursor: pointer

.remove-btn:hover 
  background-color: #ff4040

.total 
  font-weight: bold
  margin-top: 10px

.checkout-btn 
  background-color: #4caf50
  color: white
  border: none
  border-radius: 4px
  padding: 10px 20px
  font-size: 1em
  cursor: pointer
  margin-top: 20px

.checkout-btn:disabled 
  background-color: gray
  cursor: not-allowed
</style>
