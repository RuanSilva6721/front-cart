<template>
  <div class="container">
    <ProductComponent @add-to-cart="addToCart" />
    <CartComponent :cartItems="cartItems" :removeFromCart="removeFromCart" :checkout="checkout" />    
  </div>
</template>

<script setup lang="ts">
import CartComponent from 'src/components/CartComponent.vue';
import ProductComponent from 'src/components/ProductComponent.vue';
import { ref, provide } from 'vue';

const cartItems = ref([]);

const removeFromCart = (index) => {
  cartItems.value.splice(index, 1);
};

const checkout = () => {
  console.log('Compra finalizada!');
  cartItems.value = [];
};

</script>
<style lang="sass" scoped>
.title
  font-size: 1.2rem
  font-weight: bold
  color: #333
  text-transform: uppercase
  margin-bottom: 0
  margin-left: 70px
.container
  justify-content: center
  align-items: center
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1)
  max-width: 600px
  margin: 0 auto
  padding: 20px
  border-radius: 20px

.image-main
  max-width: 500px
  margin-left: 25px

</style>