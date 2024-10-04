<template>
  <section id="galería" class="py-16 px-6 bg-black">
    <h2 class="section-title">Galería de Giras</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="image in images" :key="image.id" class="relative overflow-hidden group">
        <img 
          @click="openModal(image.src, image.alt)" 
          :src="image.src" 
          :alt="image.alt" 
          class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer" 
        />
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <p class="text-white text-lg font-bold">{{ image.alt }}</p>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" @click="closeModal">
      <img :src="modalImage.src" :alt="modalImage.alt" class="max-w-full max-h-full p-4" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Define el tipo para las imágenes
interface Image {
  id: number
  src: string
  alt: string
}

// Array de imágenes
const images: Image[] = [
  { id: 1, src: 'https://images.pexels.com/photos/922322/pexels-photo-922322.jpeg', alt: 'Concierto en vivo' },
  { id: 2, src: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg', alt: 'Sesión de skate' },
  { id: 3, src: 'https://images.pexels.com/photos/15551838/pexels-photo-15551838/free-photo-of-hombre-musica-musico-concierto.jpeg', alt: 'Mosh pit' },
  { id: 4, src: 'https://images.pexels.com/photos/18128513/pexels-photo-18128513/free-photo-of-blanco-y-negro-hombre-gente-multitud.jpeg', alt: 'Backstage' },
  { id: 5, src: 'https://images.pexels.com/photos/11776935/pexels-photo-11776935.jpeg', alt: 'Crowd surfing' },
  { id: 6, src: 'https://images.pexels.com/photos/3672355/pexels-photo-3672355.jpeg', alt: 'Festival de punk' },
]

// Tipos de referencia para el modal
const isModalOpen = ref<boolean>(false)
const modalImage = ref<{ src: string; alt: string }>({ src: '', alt: '' })

const openModal = (src: string, alt: string): void => {
  modalImage.value = { src, alt }
  isModalOpen.value = true
}

const closeModal = (): void => {
  isModalOpen.value = false
}
</script>

<style scoped>
/* Estilos para el modal, si es necesario */
</style>
