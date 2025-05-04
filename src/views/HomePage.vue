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
  <div 
   class=" 
   relative flex flex-col items-center 
   min-h-screen min-w-screen bg-[#453A62]
   p-9 pt-[75px]
   ">

    <div class="flex items-center !my-8">
      <!--Colocando um glow por tras-->
      <img 
        src="@/assets/img/saturno-logo.png" 
        alt="Saturno (logo)"
        class="absolute w-lg z-0 blur-md brightness-190 opacity-75"
      >

      <!--Imagem Original-->
      <img 
        src="@/assets/img/saturno-logo.png" 
        alt="Saturno (logo)"
        class="relative w-lg z-10"
      >
    </div>

    <h3 class="relative mb-6! brightness-120 text-[#EEEEEE] text-lg">
      Seja Bem-Vindo(a) à SaturnuS
    </h3>
  
    <div class="flex justify-center text-center">
      <button 
        @click="openWalletModal" 
        class="
          block w-full max-w-50 h-15
          !font-bold !text-center text-lg p-4 cursor-pointer
        text-white rounded-4xl bg-[#04335ee5] ring ring-white
        hover:bg-[#004e72] transition duration-300 ease-in-out
        "
        >
        Conectar Carteira
    </button>
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
        <WalletSelect class="z-50" :closeWalletModal="closeWalletModal" :wallet-open="walletOpen" />
      </Transition>
    </Teleport>
  </div>
</template>