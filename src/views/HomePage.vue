<script lang="ts" setup>
import { ref } from 'vue'
import WalletSelect from '../components/WalletSelect.vue'

const walletOpen = ref(false)

const openWalletModal = () => {
  walletOpen.value = true
}

const closeWalletModal = () => {
  walletOpen.value = false
}

</script>

<template>
  <div class="items-center !my-8">
    <img 
        src="@/assets/img/saturno-logo.png" 
        alt="Saturno (logo)"
        class="relative w-lg"
      >
  </div>

  <div class="flex justify-center text-center">
    <span 
      @click="openWalletModal" 
      class="
        block w-full max-w-50 h-15
        !font-bold !text-center text-lg p-4 cursor-pointer
      text-white rounded-xl bg-purple-500/75 ring-2 ring-purple-500/60
      hover:bg-purple-600/100 transition duration-300 ease-in-out
      "
      >
      Conectar Carteira
    </span>
  </div>

  <Teleport to="#walletSelect">
    <Transition 
      enter-active-class="duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <WalletSelect :closeWalletModal="closeWalletModal" :wallet-open="walletOpen" />
    </Transition>
  </Teleport>
</template>