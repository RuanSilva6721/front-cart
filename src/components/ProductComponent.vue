<template>
  <div class="product-list-container">
    <div class="product-list">
      <h1 class="product-list-title">Lista de Produtos</h1>
      <h6 class="product-list-subtitle">Escolha uma das opções abaixo:</h6>
      <ul class="products">
        <li v-for="(product, index) in availableProducts" :key="index" class="product-item">
          <div class="item-actions">
            <button @click="addToCart(product)" class="add-btn"><i class="material-icons">add</i></button>
            <span class="item-name">{{ product.name }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const availableProducts = ref([
  { id: 1, name: 'Produto 1' },
  { id: 2, name: 'Produto 2' },
  { id: 3, name: 'Produto 3' }
]);

const addToCart = (product) => {
  const existingItem = store.state.cartItems.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const newItem = { ...product, quantity: 1 };
    store.dispatch('addToCart', newItem);
  }
};

const getCartItemQuantity = (product) => {
  const existingItem = store.state.cartItems.find(item => item.id === product.id);
  return existingItem ? existingItem.quantity : 0;
};
</script>

<style lang="sass" scoped>
.product-list-container 
  display: flex
  justify-content: center
  align-items: center
  background-color: #f9f9f9
  
.product-list 
  border-radius: 4px
  
.product-list-title 
  font-size: 3.0em
  font-weight: bold
  margin-bottom: -50px

.product-list-subtitle 
  font-size: 1em
  margin-left: 50px

.products 
  list-style-type: none
  padding: 0
  margin-left: 90px

.product-item 
  margin-bottom: 0.5em

.item-info 
  display: flex
  align-items: center

.item-name 
  font-weight: bold
  margin-right: 10px

.item-quantity 
  font-size: 0.9em
  margin-right: 10px

.item-actions 
  display: flex
  align-items: center

.add-btn 
  margin-left: 1em
  background: purple
  margin-right: 5px
  border-radius: 8px
.add-btn i
  color: #fff
</style>
