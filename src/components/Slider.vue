<template>
  <div class="relative h-screen">
    <!-- Slider content -->
    <div v-for="(slide, index) in slides" :key="slide.id"
      class="absolute inset-0 transition-opacity duration-1000"
      :class="{ 'opacity-100': index === currentSlide, 'opacity-0': index !== currentSlide }">
      <img :src="slide.image" :alt="slide.title" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <h2 class="text-8xl md:text-9xl lg:text-10xl font-bold text-white text-center font-metal px-4 leading-tight shadow-text">{{ slide.title }}</h2>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <button @click="prevSlide"
      class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-accent-1 bg-opacity-80 p-4 rounded-full hover:bg-accent-2 transition duration-300 z-20">
      <!-- Left Arrow Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#FFFFFF" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button @click="nextSlide"
      class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-accent-1 bg-opacity-80 p-4 rounded-full hover:bg-accent-2 transition duration-300 z-20">
      <!-- Right Arrow Icon -->
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#FFFFFF" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Bullet Navigation -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
      <button v-for="(slide, index) in slides" :key="slide.id" @click="goToSlide(index)"
        class="w-4 h-4 rounded-full"
        :class="{ 'bg-white': index === currentSlide, 'bg-accent-1': index !== currentSlide }"></button>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  { id: 1, image: 'https://images.unsplash.com/photo-1572474042777-76f96d555951?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'COMA' },
  { id: 2, image: 'https://images.unsplash.com/photo-1690460814053-5906ac3e90cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'INVOKATE & SKATE' },
  { id: 3, image: 'https://images.unsplash.com/photo-1681855018254-a54babc49ea3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'DOOMED PUNK' },
]

const currentSlide = ref(0)

let timer: number

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

onMounted(() => {
  timer = setInterval(() => {
    nextSlide()
  }, 5000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped>
.shadow-text {
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
}
</style>
