<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';

/*
  Focar no Operacional, ou seja, criar os produtos e toda a interface de e-commerce.

  A partir do momento que a pessoa conectar sua carteira no site,
  não precisa de mais nada pra comprar tokens.

*/
</script>

<template>

  <NavBar />

  <Transition
   name="fade"
  >
    <RouterView />
  </Transition>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
