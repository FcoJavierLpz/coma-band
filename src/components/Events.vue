<template>
  <section id="eventos" class="py-16 px-6 bg-secondary">
    <h2 class="section-title">Próximos Eventos</h2>
    <div class="overflow-x-auto">
      <table class="w-full text-left">
        <thead>
          <tr class="bg-primary">
            <th class="p-3">Fecha</th>
            <th class="p-3">Lugar</th>
            <th class="p-3">Ciudad</th>
            <th class="p-3">Boletos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in events" :key="event.id" class="border-b border-gray-700">
            <td class="p-3">{{ new Date(event.date).toLocaleDateString() }}</td>
            <td class="p-3">{{ event.venue }}</td>
            <td class="p-3">{{ event.city }}</td>
            <td class="p-3">
              <a :href="event.tickets" class="cta-button">
                Comprar
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
const events = [
  { id: 1, date: '2024-06-15', venue: 'Skate Park Central', city: 'Ciudad de México', tickets: 'https://example.com/tickets1' },
  { id: 2, date: '2024-07-22', venue: 'La Guarida Punk', city: 'Guadalajara', tickets: 'https://example.com/tickets2' },
  { id: 3, date: '2024-08-10', venue: 'Festival Rebelde', city: 'Monterrey', tickets: 'https://example.com/tickets3' },
  { id: 4, date: '2024-09-05', venue: 'Club Underground', city: 'Tijuana', tickets: 'https://example.com/tickets4' },
]
</script>