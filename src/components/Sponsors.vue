<template>
  <section id="patrocinadores" class="py-16 px-6 bg-secondary">
    <h2 class="section-title">Nuestros Patrocinadores</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      <div
        v-for="sponsor in sponsors"
        :key="sponsor.id"
        class="flex flex-col items-center"
      >
        <img
          :src="sponsor.logo"
          :alt="sponsor.name"
          class="w-full h-32 object-contain mb-2"
        />
        <p class="text-center font-bold">{{ sponsor.name }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sponsors = [
  {
    id: 1,
    name: "SkateShop X",
    logo: "https://images.pexels.com/photos/18789466/pexels-photo-18789466/free-photo-of-aleron-delantero-de-formula-1-bmw.jpeg",
  },
  {
    id: 2,
    name: "PunkWear",
    logo: "https://images.pexels.com/photos/4925883/pexels-photo-4925883.jpeg",
  },
  {
    id: 3,
    name: "Rebel Energy Drinks",
    logo: "https://images.pexels.com/photos/19542770/pexels-photo-19542770/free-photo-of-hombre-manos-mujer-alcohol.jpeg",
  },
  {
    id: 4,
    name: "Thrash Records",
    logo: "https://images.pexels.com/photos/12684530/pexels-photo-12684530.jpeg",
  },
  {
    id: 5,
    name: "Anarchy Guitars",
    logo: "https://images.pexels.com/photos/28159318/pexels-photo-28159318/free-photo-of-rojo-calle-hojas-carta.jpeg",
  },
  {
    id: 6,
    name: "Mosh Pit Insurance",
    logo: "https://images.pexels.com/photos/18757666/pexels-photo-18757666/free-photo-of-staffordshire-terrier-americano-zara.jpeg",
  },
];
</script>
