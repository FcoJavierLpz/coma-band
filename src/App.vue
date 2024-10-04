<template>
  <div class="min-h-screen bg-secondary text-white">
    <header class="bg-primary py-4 px-6 flex justify-between items-center">
      <h1 class="text-2xl font-metal">COMA</h1>
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <nav :class="{'hidden': !isMenuOpen, 'flex': isMenuOpen}" class="md:flex">
        <ul class="flex flex-col md:flex-row md:space-x-4">
          <li v-for="item in menuItems" :key="item">
            <a :href="`#${item.toLowerCase()}`" class="hover:text-accent1 py-2 md:py-0">{{ item }}</a>
          </li>
        </ul>
      </nav>      
    </header>

    <main>
      <Slider />
      <BandInfo />
      <Gallery />
      <Events />
      <Roadmap />
      <Sponsors />
    </main>

    <footer class="bg-primary py-12 px-6 relative overflow-hidden">
      <div class="container mx-auto relative z-10">
        <div class="flex flex-wrap justify-between items-start">
          <div class="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 class="text-3xl font-metal text-accent1 mb-4">COMA</h3>
            <p class="text-sm">Doomed Skate Punk-Crust desde la CDMX</p>
          </div>
          <div class="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 class="text-xl font-bold mb-4">Síguenos</h4>
            <div class="flex space-x-4">
              <a href="#" class="text-white hover:text-accent1 transition-colors"><Instagram /></a>
              <a href="#" class="text-white hover:text-accent1 transition-colors"><Facebook /></a>
              <a href="#" class="text-white hover:text-accent1 transition-colors"><Twitter /></a>
              <a href="#" class="text-white hover:text-accent1 transition-colors"><Youtube /></a>
            </div>
          </div>
          <div class="w-full md:w-1/3">
            <h4 class="text-xl font-bold mb-4">Contacto</h4>
            <p class="text-sm">info@comadoomedpunk.com</p>
            <p class="text-sm">+52 55 1234 5678</p>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 Coma. Todos los derechos reservados.</p>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
      <div class="absolute top-0 left-0 w-full h-full opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" class="w-full h-full">
          <polygon fill="currentColor" points="0,0 100,0 100,20 0,100" />
          <polygon fill="currentColor" points="0,100 100,20 100,100" />
        </svg>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-vue-next'
import Slider from './components/Slider.vue'
import BandInfo from './components/BandInfo.vue'
import Gallery from './components/Gallery.vue'
import Events from './components/Events.vue'
import Roadmap from './components/Roadmap.vue'
import Sponsors from './components/Sponsors.vue'

const menuItems = ref(['Info', 'Galería', 'Eventos', 'Roadmap', 'Patrocinadores'])
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
/* Agrega estilos para la responsividad si es necesario */
</style>
