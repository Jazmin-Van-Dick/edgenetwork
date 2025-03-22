<template>
  <aside class="w-64 py-5 h-screen flex flex-col bg-white">
    <h2 class="text-2xl font-bold px-5 mb-8 text-[#1da946] text-center font-mono">EDGE NETWORK</h2>
    <nav class="flex-1">
      <ul>
        <li v-for="item in menuItems" :key="item.name" class="mb-3">
          <a :href="item.link" class="flex items-center p-2 bg-[#f7fde9] hover:bg-[#1da946] border-r-3 border-[#1da946] text-[#1da946]">
            <component :is="item.icon" class="w-5 h-5 mr-3 text-[#1da946]"></component>
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
    
    <a href="https://drive.google.com/drive/folders/1txE7vqf1VTVLT3YRBK_3vmIJjiPrNUVd?usp=sharing">
      <div class="text-center">
        <div class="relative w-16 mx-auto">
          <img 
            src="https://media.licdn.com/dms/image/v2/D4D03AQEnJHLBfJI6ig/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700781305120?e=1747872000&v=beta&t=EFisEC9ci91vA1Qb-k0tIM0ySgVbszGuiKME0ZsjIK0"
            class="rounded-full size-16 mb-2"
          />
          <div class="size-6 rounded-full flex justify-center items-center bg-[#addc57] absolute -top-1.5 -right-1.5">
            <p class="font-medium text-xs text-gray-800">Hi!</p>
          </div>
        </div>
  
        <p class="font-medium text-xl">Jazmín Van Dick</p>
        
        <p class="font-medium text-md text-gray-500">jazminvandick@gmail.com</p>
      </div>
    </a>
  </aside>
</template>

<script setup>
import { ref } from 'vue';
import { ChartColumn } from 'lucide-vue-next';

const menuItems = ref([
  { name: 'Dashboard', link: '/', icon: ChartColumn },
]);
</script>