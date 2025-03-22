<template>
    <div class="p-4 rounded-3xl border-0.5 text-gray-900 border-gray-200 shadow-xs flex-1" :class="bg ? `bg-${bg}` : 'bg-white'">
      <div class="flex items-center">
        <component :is="icon" class="w-5 h-5 mr-3 text-gray-900"></component>
        
        <h2 class="text-xl font-semibold">{{ title }}</h2>
      </div>
        
        <p class="text-4xl font-medium">{{ data }}</p>

        <slot></slot>
    </div>
  </template>
  
  <script setup>
    defineProps({ title: String, data: String, icon: Object, bg: String });
  </script>