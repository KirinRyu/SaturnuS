<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const openWalletModal = () => {
  router.push({name: 'wallet'})
}

const closeWalletModal = () => {
  router.push({name: 'home'})
}

</script>

<template>
    <div class="relative justify-center">
        <div class="flex items-center">
            <img 
             src="@/assets/img/saturno-logo.png" 
             alt="Saturno (logo)"
             class="relative w-lg"
             >
        </div>

        <div>
            <span 
             @click="openWalletModal" 
             class="p-4 cursor-pointer text-white rounded-xl bg-indigo-500/75 hover:bg-indigo-500/100 transition duration-300 ease-in-out"
             >
                Conectar Carteira
            </span>
        </div>

    </div>
</template>