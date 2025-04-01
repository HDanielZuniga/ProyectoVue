<template>
  <div class="default-layout">
    <!-- Se muestra la carta de Rick solo si showDefaultCard es true -->
    <CardComponent v-if="showDefaultCard" :character="defaultCharacter" />
    <!-- Contenedor para el contenido específico de cada vista -->
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue'
export default {
  name: "DefaultLayout",
  components: {
    CardComponent
  },
  props: {
    showDefaultCard: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      defaultCharacter: {
        name: "Rick Sanchez",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        status: "Alive",
        species: "Human",
        origin: {
          name: "Earth (C-137)"
        },
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
          "https://rickandmortyapi.com/api/episode/3"
        ]
      }
    }
  }
}
</script>
