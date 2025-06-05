<template>
  <!-- Contenedor principal con restricciones responsivas -->
  <div class="min-h-screen bg-gray-900">
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="pt-4">
        <!-- SearchBar con contenedor responsivo -->
        <div class="w-full max-w-2xl mx-auto mb-6 lg:max-w-4xl">
          <SearchBar />
        </div>
        
        <!-- MovieCarousels con espaciado controlado -->
        <div class="space-y-8">
          <div class="w-full">
            <MovieCarousel title="Recommended movies" :movies="recommended" />
          </div>
          <div class="w-full">
            <MovieCarousel title="Popular TV series" :movies="popular" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SearchBar from '@/components/SearchBar.vue'
import MovieCarousel from '@/components/MovieCarousel.vue'

const recommended = [
  { id: 1, title: 'Violent Night', image: 'https://image.tmdb.org/t/p/original/fKSd5N143caKxpg52NAe0Imu5CV.jpg', rating: '7.9' },
  { id: 2, title: 'Megan', image: 'https://i.etsystatic.com/27062086/r/il/8846eb/4446046704/il_794xN.4446046704_ccbk.jpg', rating: '7.5'},
  { id: 3, title: 'Avengers', image: 'https://image.tmdb.org/t/p/original/kPL3q8MMJnzaHqsaZGv5OqIGAdh.jpg', rating: '6.9' },
  { id: 4, title: 'Avatar', image: 'https://cdna.artstation.com/p/assets/images/images/031/645/214/large/shreyas-raut-avatar-2.jpg?1604210989', rating: '6.9' },
  { id: 5, title: 'Mario bros', image: 'https://posterspy.com/wp-content/uploads/2023/03/Mario-movie-poster.jpg', rating: '9.0' },
  { id: 6, title: 'Barbie', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ce578c174088799.649bb208e091f.png', rating: '8.0' },
  { id: 7, title: 'Black Widow', image: 'https://www.vintagemovieposters.co.uk/wp-content/uploads/2022/09/IMG_8076-scaled.jpeg', rating: '6.0' },
  { id: 8, title: 'Alien', image: 'https://assets.mycast.io/posters/alien-2024-fan-casting-poster-263945-large.jpg?1669824410', rating: '7.4' },
  { id: 9, title: 'Super Man', image: 'https://static1.moviewebimages.com/wordpress/wp-content/uploads/sharedimages/2024/12/superman-2025-official-poster-1.jpeg', rating: '6.4' },
  { id: 10, title: 'Beetlejuice 2', image: 'https://image.tmdb.org/t/p/original/xSAXNLJsMiZNfOyg2gwHRHkiOkR.jpg', rating: '5.0' },
]

const popular = [
  { id: 3, title: 'Westworld', image: 'https://images6.fanpop.com/image/photos/39800000/Westworld-Season-1-Poster-westworld-39876284-1080-1600.jpg', rating: '7.9' },
  { id: 4, title: 'Wednesday', image: 'https://i.pinimg.com/originals/85/ba/4e/85ba4e4731263f3e29226d5949aa542e.jpg', rating: '7.9' },
  { id: 5, title: 'Dark', image: 'https://br.web.img3.acsta.net/pictures/17/11/01/13/35/2780331.jpg', rating: '5.9' },
  { id: 6, title: 'Chernobyl', image: 'https://image.tmdb.org/t/p/original/4cPTQbF2GL59j2YGeUaBg3yvzJw.jpg', rating: '7.9' },
  { id: 7, title: 'El Juego del calamar', image: 'https://images.justwatch.com/poster/251930981/s718/temporada-2.%7Bformat%7D', rating: '8.9' },
  { id: 8, title: 'House of the Dragon', image: 'https://sm.ign.com/t/ign_es/screenshot/default/hotd-alicent-4x5-es_5sxc.1080.jpg', rating: '7.5' },
  { id: 9, title: 'Game of thrones', image: 'https://image.tmdb.org/t/p/original/v9rg012OtFGxXK6tO9Jq2BOWesk.jpg', rating: '9.5' },
  { id: 10, title: 'The Witcher', image: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/06/the-witcher-netflix-poster.jpg', rating: '9.5' },
  { id: 11, title: 'Yellowstone', image: 'https://artworks.thetvdb.com/banners/v4/season/1825204/posters/61966711ce843.jpg', rating: '9.5' },
  { id: 12, title: 'The Last of Us', image: 'https://pbs.twimg.com/media/Fgkht3XXoAE5FZO?format=jpg&name=large', rating: '9.5' },
]
</script>