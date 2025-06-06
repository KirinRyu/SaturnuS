<script setup lang="ts">

</script>

<template>
    <div class="
     pl-5 pr-5
     fixed top-0 left-0
     h-[60px] w-full z-10
     bg-transparent text-gray-50
     flex items-center
    ">
        <img src="../assets/img/saturno-logo.png" 
         class="w-15 h-auto cursor-default"
        >

        <ul class="relative flex items-center
         left-[50%] -translate-x-[100%]
         w-[10%] gap-20"
        >
            <li>
                <router-link
                 to="/"
                 class="opcaoNav"
                 active-class="opcaoNavAtiva"
                >
                    Home
                </router-link>
            </li>
            <li>
                <router-link
                 to="/shop"
                 class="opcaoNav"
                 active-class="opcaoNavAtiva"
                >
                    Loja
                </router-link>
            </li>
        </ul>

        <div class="relative flex items-center
         left-[77%]
        ">
            <router-link
             to="/carrinho"
             active-class="opcaoNavAtiva"
            >
                <font-awesome-icon icon="cart-shopping"
                class="text-lg cursor-pointer
                relative mr-5! 
                rounded-[8px] p-2 px-3
                hover:bg-[#6c5d96e1] hover:text-white 
                transition-all duration-300"
                />
            </router-link>

            <router-link
             to="/tokens"
            >
                <img src="../assets/img/venerius-navbar.png" 
                class="w-9 h-auto cursor-pointer 
                relative rounded-[100%]
                hover:shadow-lg shadow-[#453a628a] 
                transition-all duration-300"
                >
            </router-link>
        </div>
        <!--Img do Token e Icone do carrinho-->
    </div>
</template>

<style scoped>
.opcaoNav {
    cursor: pointer;
    border-radius: 8px;
    padding: 8px;
    width: 100px !important;
    text-decoration-line: underline;
}

.opcaoNav:hover{
    color: rgb(255, 255, 255);
    background-color: #6c5d96e1;
    transition: ease all 0.3s;
}

.opcaoNavAtiva {
    cursor: default;
    background-color: #6c5d9634;
    border-radius: 8px;
    padding: 8px;
    width: 100px !important;
    text-decoration-line: underline;
}
</style>