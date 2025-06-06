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
   h-screen min-w-screen bg-[#000000ee]
   p-9 pt-[75px]
   ">

   <div class="relative flex
    w-[100%] h-[100%]!
    items-center justify-center gap-10
   "
   >
    <div
     class="
      relative flex
      flex-col gap-5
      text-start
      w-[35%]
     "
    >
      <h1 class="relative w-[70%]">Own the Deal. Own the Token. Own the Power.</h1>
      <h3>From digital agreements to real transactions: explore a smarter way to trade.</h3>

      <div> <!--BOTÕES-->

      </div>

    </div>

    <div
     class="
     
     "
    >
      <img
       class="w-200 h-auto" 
       src="../assets/img/Saturno sem Fundo.png" 
       alt=""
      >
    </div>
   </div>
  
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