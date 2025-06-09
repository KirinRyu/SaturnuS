<script setup lang="ts">

</script>

<template>
    <div class="
     px-15 pt-5
     fixed top-0 left-0
     h-[60px] w-full z-100
     bg-transparent text-gray-50
     flex items-center justify-between
    ">
        <router-link
            to="/"
        >
            <img 
            src="../assets/img/Saturno sem Fundo.png" 
            class="w-15 h-auto cursor-pointer "
            >
        </router-link>

        <router-link
            to="/tokens"
        >
            <img src="../assets/img/venerius-escuro.png" 
            class="w-9 h-auto cursor-pointer 
            relative rounded-[100%]
            hover:shadow-[0_0_60px_40px_#24004f]
            transition-all duration-300"
            >
        </router-link>
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