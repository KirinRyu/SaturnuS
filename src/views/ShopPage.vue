<script lang="ts" setup>
import BgGlow from '../components/BgGlow.vue';
</script>

<template>
    <div class="
        overflow-y-scroll overflow-x-hidden! snap-y snap-mandatory scroll-smooth
        max-w-screen h-screen w-screen"
    >
        <BgGlow />
        
        <section 
        class=" 
        relative flex flex-col
        h-screen min-w-screen bg-[#000000f9]
        p-15 pt-[75px]
        snap-start
        ">
            <div class="
            flex
            text-start items-center
            h-screen justify-items-start
            z-10"
            >
                <div class="
                flex flex-col w-[70%] gap-5 pl-7
                ">
                    <h1 class="font-bold! text-[64px]!">Buy Products with Agility and Security</h1>
                    <h3 class="w-[80%] text-[36px]!">Choose your product and use your token. Your transaction will be completed in seconds!</h3>
                </div>
                
            </div>
            
            <div class="z-10 w-[100%] text-center">
                <font-awesome-icon class="text-[56px] text-[#989A9A]!" icon="angles-down" beat-fade/>
            </div>
        </section>

        <section class="
         relative
         flex flex-col 
         h-screen min-w-screen bg-[#000000f9]
         snap-start" 
        >
            <div class="p-50 pt-10 z-50">

                <h3>Pick your Product!</h3>
    
                <div class="grid grid-cols-3 grid-rows-2 gap-x-20 gap-y-10 mt-20! max-2xl:mt-10!">
                    <div class=" gift-cards">
                        <img src="../assets/img/products/gpstore.jpg" alt="">
                        <span>Google Play Store Gift Card</span>
                        <div class="flex gap-1">
                            <img src="../assets/img/venerius-navbar.png" class="h-[20px]! w-[20px]!" alt="">
                            <span>XX $</span>
                        </div>
                    </div>

                    <div class=" gift-cards">
                        <img src="../assets/img/products/applegc.jpg" alt="">
                        <span>Apple Gift Card</span>
                        <div class="flex gap-1">
                            <img src="../assets/img/venerius-navbar.png" class="h-[20px]! w-[20px]!" alt="">
                            <span>XX $</span>
                        </div>
                    </div>

                    <div class=" gift-cards">
                        <img src="../assets/img/products/psncard.jpeg" alt="">
                        <span>PlayStation Gift Card</span>
                        <div class="flex gap-1">
                            <img src="../assets/img/venerius-navbar.png" class="h-[20px]! w-[20px]!" alt="">
                            <span>XX $</span>
                        </div>
                    </div>

                    <div class=" gift-cards">
                        <img src="../assets/img/products/spotifygc.png" alt="">
                        <span>Spotify Gift Card</span>
                        <div class="flex gap-1">
                            <img src="../assets/img/venerius-navbar.png" class="h-[20px]! w-[20px]!" alt="">
                            <span>XX $</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>


</template>

<style scoped>
.gift-cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #3C007A;
    border-radius: 20px;
    background-color: #230953;
    gap: 20px;
    width: 400px;
    padding: 20px;
}

.gift-cards img {
    width: 300px;
    height: auto;
    border-radius: 20px;
}

@media screen and (max-width: 1540px) {
    .gift-cards {
        width: 300px !important;
        height: 230px;
    }

    .gift-cards img {
        width: 200px !important;
        height: 120px;
    }
}
</style>