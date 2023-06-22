<template>
  <div class="cart">
    <h2 class="cart-title">Checkout</h2>
    <ul class="cart-items">
      <li v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <div class="item-info">
          <span class="item-price">{{ item.quantity }}X</span>
          <span class="item-name">{{ item.name }}</span>
          
        </div>
        <button @click="removeFromCart(index)" class="remove-btn"><i class="fa-solid fa-trash"></i></button>
      </li>
    </ul>
    <button @click="checkout" :disabled="cartItems.length === 0" class="checkout-btn">
      <i class="fa-solid fa-cart-shopping cart-end"></i>Fechar Pedido
    </button>
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h3>Login Required</h3>
        <p>Please log in to continue.</p>
        <form @submit.prevent="login">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="loginData.email" required>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="loginData.password" required>
          <button type="submit">Login</button>
        </form>
        <button @click="closeModal">Close</button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import api from "../axios/api";

const store = useStore();
const cartItems = computed(() => store.state.cartItems);
const showModal = ref(false);
const loginData = ref({
  email: '',
  password: ''
});

const removeFromCart = (index) => {
  store.dispatch('removeFromCart', index);
};

async function sendOrder() {
  try {
    const responseData = await api.post(`/api/cart-create`, {
      pedidos: cartItems.value
    });
    console.log('Order sent:', responseData);

    closeModal();
  } catch (err) {
    console.error(err);
  }
}

const checkout = () => {
  if (userIsLoggedIn()) {
    console.log('Compra finalizada!');
    sendOrder();
    store.commit('checkout');
  } else {
    showModal.value = true;
  }
};

const closeModal = () => {
  showModal.value = false;
};

// Mock function to check if the user is logged in
const userIsLoggedIn = () => {
  const token = localStorage.getItem('token');
  return token;
};

async function login() {
  const { email, password } = loginData.value;
  console.log('Login:', email, password);
  try {
    const responseData = await api.post(`/api/login`, {
      email: email,
      password: password
    });
    localStorage.setItem('token', responseData.data);
    closeModal();
  } catch (err) {
    console.error(err);
    closeModal();
  }
  
};
</script>
<style lang="sass" scoped>
.cart 
  background-color: #f9f9f9
  padding: 20px
  border-radius: 4px
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1)
  text-align: center

.cart-title 
  font-size: 1.5em
  margin-bottom: 10px

.cart-items 
  list-style-type: none
  padding: 0
  display: flex
  flex-wrap: wrap
  justify-content: center

.cart-item 
  display: flex
  align-items: center
  justify-content: space-between
  margin-bottom: 10px
  margin-right: 10px

.item-info 
  display: flex
  align-items: center
.item-name 
  font-weight: bold
  margin-right: 10px

.item-price 
  font-size: 0.9em
  margin-left: 10px
  margin-right: 10px

.remove-btn 
  background-color: red
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
  background-color: purple
  color: white
  border: none
  border-radius: 4px
  padding: 10px 20px
  font-size: 1em
  cursor: pointer
  margin-top: 20px
  padding: 15px
  padding-left: 160px
  padding-right: 160px

.checkout-btn:disabled 
  background-color: gray
  cursor: not-allowed

.cart-end
  margin-right: 8px

.modal 
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  display: flex
  align-items: center
  justify-content: center
  background-color: rgba(0, 0, 0, 0.5)
  z-index: 9999

.modal-content 
  background-color: purple
  color: white
  padding: 20px
  border-radius: 4px
  text-align: center

.success-modal 
  background-color: #4caf50
  color: white

.failure-modal 
  background-color: #f44336
  color: white

.modal h3 
  font-size: 1.2em
  margin-bottom: 10px
  color: white

.modal p 
  margin-bottom: 20px
  color: white

.modal-content button 
  background-color: #ccc
  color: #fff
  border: none
  border-radius: 4px
  padding: 10px 20px
  cursor: pointer
  transition: background-color 0.3s ease

.modal-content button:hover 
  background-color: #999
</style>
