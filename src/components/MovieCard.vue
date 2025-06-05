<template>
  <div class="w-[130px] bg-zinc-800 p-2 rounded-lg text-center">
    <div class="relative aspect-[2/3] w-full">
      <img
        :src="movie.image"
        :alt="movie.title"
        class="w-full h-full object-cover rounded"
        @error="handleImgError"
      />
      <div class="absolute top-1 right-1 bg-black bg-opacity-60 text-white text-[11px] px-2 py-0.5 rounded-full">
        ⭐ {{ movie.rating }}
      </div>


      
    </div>
    <div class="mt-2 text-white text-xs truncate">{{ movie.title }}</div>
    <div class="text-gray-400 text-[11px]">{{ movie.year }}</div>
  </div>
</template>

<script setup>
const props = defineProps(['movie'])

function handleImgError(event) {
  event.target.src = 'https://via.placeholder.com/150'
}
</script>

