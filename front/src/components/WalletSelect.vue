<script lang="ts" setup>
import eternlImg from '@/assets/img/imgOptions/eternl.png'

import { onUnmounted, ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { onClickOutside } from '@vueuse/core';
import { Lucid, Blockfrost } from 'lucid-cardano';

const lucid = ref<Lucid | null>(null); // instancia do Lucid
const walletAddress = ref<string | null>(null);
const loading = ref<boolean>(false);

const BLOCKFROST_ID = 'preprod8NCRGEehauHVxMlfAu2bIaXN3df8tYtA'
const NETWORK = "Preprod"

onUnmounted(() => {
    selectedOption.value = null
})

const props = defineProps({
    walletOpen: Boolean,
    closeWalletModal: Function
})

type Opcao = {
    id: number,
    image: string,
    nome: string
}

// Será usado para fechar a tela ao clicar fora do Modal
const walletModal = ref()
onClickOutside(walletModal, () => props.closeWalletModal())

const dropdown = ref<boolean>(false)
const selectedOption = ref<Opcao | undefined>()
const opcoes : Opcao[] = [
    {
        id: 1,
        image: eternlImg,
        nome: "Eternl"
    },
]

const toggleDropdown = () => {
    dropdown.value = !dropdown.value
    selectedOption.value = undefined
}

const selectOption = (opt : Opcao) => {
    selectedOption.value = opt
    dropdown.value = false
}

const connectWallet = async () => {
    loading.value = true

    if(!selectedOption.value) {
        alert("Escolha uma Wallet antes de se conectar!")
        return
    }

    if(!window.cardano) 
        if (!window.cardano.eternl) {
        console.log("Carteira nao encontrada no navegador!")
        loading.value = false;
        return;
    }

    if (!window.cardano.eternl) {
        alert("Carteira Eternl não encontrada!");
        loading.value = false;
        return;
    }

    try {
        const walletApi = await window.cardano.eternl.enable(); // pede para a wallet ser habilitada -> retorna a api pronta pra uso

        if (!lucid.value) {
            lucid.value = await Lucid.new(
                new Blockfrost(
                    `https://cardano-${NETWORK.toLowerCase()}.blockfrost.io/api/v0`,
                    BLOCKFROST_ID
                ), NETWORK
            )
        }
        lucid.value.selectWallet(walletApi);

        walletAddress.value = await lucid.value.wallet.address();
        console.log("Carteira conectada! Endereço:", walletAddress.value);

    } catch (err) {
        console.log("erro ao conectar à carteira: ", err)
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div class="
     fixed top-0 left-0 w-full h-full
     flex justify-center items-center
     bg-[#0E001F]/70
     " 
     v-if="props.walletOpen"
    >
        <div class="
         relative max-w-110 w-full
         flex flex-col items-center gap-5
         px-5 py-5
         rounded-md
         bg-[#1A0033]
         shadow-lg shadow-black
         border border-[#3C007A]
         justify-center
        "
        ref="walletModal"
        >
            <img
             class="w-[105px] h-auto" 
             src="../assets/img/Saturno sem Fundo.png" alt=""
            >

            <h2 class="text-[190%] text-center text-white font-(DM Sans)mb-3!">
                Conecte sua Carteira
            </h2>
            
            <!--DROPDOWN DE SELEÇÃO-->
            <div class="flex flex-col gap-2">
                <div class="
                cursor-pointer
                flex items-center
                relative w-100 h-10 
                px-3.5
                rounded-[10px]
                border border-[#3C007A]
                bg-[#230953] text-white
                hover:bg-[#23095f] transition duration-300 
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
                <Transition name="fade">
                    <div v-if="dropdown">
                        <ul>
                            <li v-for="opcao in opcoes" :key="opcao.id"
                            class="
                            flex items-center
                            cursor-pointer
                            rounded-lg
                            text-[110%] p-1 pl-3.5
                            border border-[#3C007A]
                            relative w-100 h-10
                            mb-1!
                            bg-transparent text-white
                          hover:bg-[#3C007c] transition duration-300
                            last:mb-0!
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
                </Transition>
            </div>

            <!--BOTÃO DE CONFIRMAR-->
            <div class="flex gap-10 text-center justify-center">
                <span class="
                 cursor-pointer
                 w-auto h-10 px-5
                 text-[110%]
                 bg-[#6B00F5] p-2 
                 border border-[#3C007A]
                 rounded-[16px]
                 hover:bg-[#6B1fff] transition duration-300
                "
                @click="connectWallet()"
                >Conectar</span>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
@import 'tailwindcss/utilities';

.fade-enter-active,
.fade-leave-active {
    transition: all ease-in-out 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
</style>