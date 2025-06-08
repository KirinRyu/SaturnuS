<script lang="ts" setup>
import { ref } from 'vue'
import WalletSelect from '../components/WalletSelect.vue'

// WALLET
const walletOpen = ref(false)

const openWalletModal = () => {
  walletOpen.value = true
} 

const closeWalletModal = () => {
  walletOpen.value = false
}

</script>

<template>
  <div class="
    absolute flex
    w-[100%] h-[100%] 
    justify-center items-center
  ">
    <div class="
    w-[1px] h-[1px] z-1
    rounded-full
    shadow-[0_0_100px_100px_#240040]
    lg:shadow-[0_0_80px_80pxpx_#240040]
    ">
    </div>
    <div class="
    w-[1px] h-[1px] z-1
    rounded-full
    opacity-60
    shadow-[0_0_500px_700px_#240040]
    lg:shadow-[0_0_400px_500px_#240040]
    ">
    </div>
  </div>


  <div 
   class=" 
   relative flex flex-col items-center 
   h-screen min-w-screen bg-[#000000f9]
   p-15 pt-[75px]
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
      w-[35%] z-2
      max-[1550px]:w-[40%]
     "
    >
      <h1 class="relative w-[70%]">Own the Deal. Own the Token. Own the Power.</h1>
      <h3>From digital agreements to real transactions: explore a smarter way to trade.</h3>

      <div class="
       flex relative 
       z-2 
       gap-5
       mt-5
      ">
        <button
        @click="openWalletModal"  
        class="
         bg-linear-to-t from-black to-purple-800/20
         transition ease duration-300 hover:bg-linear-to-t hover:from-black hover:to-[#3c096c]
        ">
          Connect Wallet
          <font-awesome-icon class="chevron" icon="chevron-right" />
        </button>

        <router-link
          to="/shop"
        >
          <button class="
           bg-linear-to-t from-black to-purple-800/20
           transition ease duration-300 hover:bg-linear-to-t hover:from-black hover:to-[#3c096c]
          ">
            Shop
            <font-awesome-icon class="chevron" icon="chevron-right" />
          </button>
        </router-link>

      </div>

    </div>

    <div
     class="
      z-2
     "
    >
      <img
       class="w-200 h-auto" 
       src="../assets/img/Saturno sem Fundo.png" 
       alt=""
      >
    </div>
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

<style scoped>

button {
  cursor: pointer;
  padding: 12px;
  padding-top: 9px;
  padding-bottom: 9px;
  min-width: 90px;
  border-radius: 80px;
  border: #320A5D solid 1px;
}

.chevron {
  margin: 5px;
  margin-bottom: 0;
}

</style>