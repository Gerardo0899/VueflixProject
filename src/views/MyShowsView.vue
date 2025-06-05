
<template>
  <div class="pt-4 pb-16">
    <!-- Barra de búsqueda y filtros -->
    <div class="flex items-center justify-between mb-4">
      <input
        type="text"
        placeholder="Search shows"
        class="bg-gray-800 text-white text-sm px-4 py-2 rounded-lg w-full mr-2"
      />
      <button class="text-white bg-gray-700 px-3 py-2 rounded-lg text-xs">
        Selection mode
      </button>
    </div>

    <!-- Filtros -->
    <div class="flex space-x-4 mb-4 text-sm">
      <button
        :class="['px-3 py-1 rounded-full', activeFilter === 'tv' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300']"
        @click="activeFilter = 'tv'"
      >
        TV series
      </button>
      <button
        :class="['px-3 py-1 rounded-full', activeFilter === 'movies' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300']"
        @click="activeFilter = 'movies'"
      >
        Movies
      </button>
    </div>

    <!-- Grid de shows -->
    <div class="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-2 justify-center">
      <MovieCard
        v-for="movie in filteredMovies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script setup>
import MovieCard from '@/components/MovieCard.vue'
import { ref, computed } from 'vue'

const activeFilter = ref('tv')

const myShows = [
  { id: 1, title: 'Friends', image: 'https://img.posterstore.com/zoom/wb0074-8friends-milkshake50x70.jpg', rating: '8.2', year: 2021 ,type: 'tv' },
  { id: 2, title: 'Harry Potter', image: 'https://images6.fanpop.com/image/photos/34600000/harry-potter-posters-harry-potter-34672512-850-1360.jpg', rating: '7.5', year: 2019,type: 'tv' },
  { id: 3, title: 'The Sandman 2', image: 'https://www.moviesvibe.com/wp-content/uploads/2025/02/475558152_1287081002530466_5435372505604198904_n-1.jpg', rating: '8.0',year: 2018, type: 'tv' },
  { id: 4, title: 'Crepusculo', image: 'https://www.findelahistoria.com/web/wp-content/uploads/2012/10/64558.jpg', rating: '8.7', year: 2025, type: 'tv' },
  { id: 5, title: 'Wednesday', image: 'https://i.pinimg.com/originals/85/ba/4e/85ba4e4731263f3e29226d5949aa542e.jpg', rating: '8.1', year: 2018, type: 'tv' },
  { id: 6, title: 'See', image: 'https://image.tmdb.org/t/p/original/xKdcovTKtSkKXqhG2cPhQvID46B.jpg', rating: '7.6', year: 2012, type: 'tv' },
  { id: 7, title: 'The Last of Us', image: 'https://pbs.twimg.com/media/Fgkht3XXoAE5FZO?format=jpg&name=large', rating: '9.0', year: 2020, type: 'tv' },
  { id: 8, title: 'Megan', image: 'https://i.etsystatic.com/27062086/r/il/8846eb/4446046704/il_794xN.4446046704_ccbk.jpg', rating: '7.9',year:2024,  type: 'movies' },
  { id: 9, title: 'Violent Night', image: 'https://image.tmdb.org/t/p/original/fKSd5N143caKxpg52NAe0Imu5CV.jpg', rating: '7.9', year: 2023, type: 'movies' },
]

const filteredMovies = computed(() => {
  return myShows.filter(show => show.type === activeFilter.value)
})
</script>