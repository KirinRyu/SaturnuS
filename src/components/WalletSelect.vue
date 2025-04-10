<script lang="ts" setup>
import coin98Img from '@/assets/img/imgOptions/coin98.png'
import braveImg from '@/assets/img/imgOptions/brave.png'
import exodusImg from '@/assets/img/imgOptions/exodus.png'

import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { onClickOutside } from '@vueuse/core';

const props = defineProps({
    walletOpen: Boolean,
    closeWalletModal: Function
})

type Opcao = {
    id: number,
    image: string,
    nome: string,
    site: string
}

// Será usado para fechar a tela ao clicar fora do Modal
const walletModal = ref()
onClickOutside(walletModal, () => props.closeWalletModal())

const dropdown = ref<boolean>(false)
const selectedOption = ref<Opcao | undefined>()
const opcoes : Opcao[] = [
    {
        id: 1,
        image: braveImg,
        nome: "Brave",
        site: 'brave://wallet/crypto/onboarding/welcome'
    },
    {
        id: 2,
        image: exodusImg,
        nome: "Exodus",
        site: 'https://www.exodus.com/web3-wallet/'
    },
    {
        id: 3,
        image: coin98Img,
        nome: "COIN98",
        site: 'https://coin98.com/'
    }
]

const toggleDropdown = () => {
    dropdown.value = !dropdown.value
    selectedOption.value = undefined
}

const selectOption = (opt : Opcao) => {
    selectedOption.value = opt
    dropdown.value = false
}

const connectWallet = () => {
    if(selectedOption.value) {
        window.open(selectedOption.value.site, '_blank')
    }
}
</script>

<template>
    <div class="
     fixed top-0 left-0 w-full h-full
     flex justify-center items-center
     bg-black/65
     " 
     v-if="props.walletOpen"
    >
        <div class="
         relative max-w-110 w-full
         px-5 py-10
         rounded-md
         bg-purple-900
         shadow-lg shadow-black
        "
        ref="walletModal"
        >
            <h2 class="text-[180%] text-center font-serif text-white !font-bold">Conecte sua Carteira</h2>
            
            <!--DROPDOWN DE SELEÇÃO-->
            <div class="
            cursor-pointer
            flex items-center
            relative w-100 h-10
            !mt-8 px-3.5
            bg-gray-300 text-black/85
            hover:bg-white hover:text-black/110 transition duration-300 
            "
             :class="dropdown ? 'rounded-t-md' : 'rounded-md'"
             @click="toggleDropdown()"
            >
                <img v-if="selectedOption?.image"
                 class="w-5.5 h-auto object-contain !mr-2" 
                 :src='selectedOption.image'
                >
                <p class="text-[110%]">{{ selectedOption ? selectedOption.nome : 'Selecionar' }}</p>
                <FontAwesomeIcon v-if="!dropdown" :icon="faCaretDown" 
                 class="ml-auto"
                />
                <FontAwesomeIcon v-else :icon="faCaretUp" 
                 class="ml-auto"
                />
            </div>

            <!--OPÇÕES DE SELEÇÃO-->
            <div v-if="dropdown" class="">
                <ul>
                    <li v-for="opcao in opcoes" :key="opcao.id"
                     class="
                     flex items-center
                     cursor-pointer
                     text-[110%] p-1 pl-3.5
                     border-b-1
                     relative w-100 h-10
                   bg-gray-300 text-black/85
                   hover:bg-white hover:text-black/110 transition duration-300 
                     "
                     @click="selectOption(opcao)"
                    >
                        <img v-if="opcao.image" 
                         class="w-5.5 h-auto object-contain !mr-2" 
                         :src='opcao.image'
                        >
                        {{ opcao.nome }}
                    </li>
                </ul>
            </div>

            <!--BOTÃO DE CONFIRMAR-->
            <div class="flex gap-10 text-center justify-center !mt-6">
                <span class="
                 cursor-pointer
                 w-60 h-10
                 text-[110%]
                 bg-gray-400 p-2 
                 rounded-4xl ring-1 ring-black-500/100
                 hover:bg-blue-600 hover:text-white hover:!font-bold transition duration-300
                "
                @click="connectWallet()"
                >Conectar</span>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
@import 'tailwindcss/utilities';
</style>