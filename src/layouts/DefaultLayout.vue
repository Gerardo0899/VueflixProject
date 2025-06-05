<template>
  <div class="bg-[#121212] min-h-screen pb-16 px-4">
    <slot />
    <BottomNavigation />
  </div>
</template>

<script setup>
import BottomNavigation from '../components/BottomNavigation.vue'
</script>