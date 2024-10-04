<template>
  <section id="roadmap" class="py-16 px-6 bg-black">
    <h2 class="section-title text-red-600">Roadmap</h2>
    <div class="max-w-4xl mx-auto">
      <div v-for="milestone in milestones" :key="milestone.id" class="flex mb-8 last:mb-0">
        <div class="flex-shrink-0 w-24 text-right pr-4">
          <span class="text-accent1 font-bold">{{ milestone.date }}</span>
        </div>
        <div class="flex-grow pl-4 border-l-2 border-accent1">
          <h3 class="text-xl font-bold mb-2 text-red-600">{{ milestone.title }}</h3>
          <p>{{ milestone.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const milestones = [
  { id: 1, date: '2021', title: 'Lanzamiento de F.V.S.', description: 'Primer Full Length "F.V.S." lanzado el 2 de abril. Material lanzado en casette limitado a 77 piezas numeradas a mano.' },
  { id: 2, date: '2022', title: 'Serie de Sencillos Exitosos', description: 'Lanzamiento de "Huesos Rotos" (Video Oficial), "El pasado me pertenece mañana" y "Reflejo de ignorancia".' },
  { id: 3, date: 'Agosto 2023', title: 'Tour Internacional', description: 'Primer tour internacional en Vancouver, Canadá. Presentaciones en Lana Lou\'s Bar, Kingsway y Bully\'s Studios.' },
  { id: 4, date: 'Septiembre 2023', title: 'EP "INVOKATE & SKATE"', description: 'Grabación del EP en Vancouver con 3 tracks: "Deja ir", "Invokate & Skate" y "Devora Almas". Dos tracks con video oficial.' },
  { id: 5, date: '2024', title: 'Gira Nacional', description: 'Recorrido por las principales ciudades del país presentando el material de "INVOKATE & SKATE".' },
  { id: 6, date: '2025', title: 'Nuevo Material', description: 'Preparación y lanzamiento de nuevo material discográfico.' },
]
</script>