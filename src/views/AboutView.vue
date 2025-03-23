<template>
  <div class="home-view">
    <h1>Personajes</h1>
    <div class="cards-container">
      <CardComponent v-for="char in characters" :key="char.id" :character="char" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import CardComponent from '../components/CardComponent.vue'

export default {
  name: 'HomeView',
  components: { CardComponent },
  setup() {
    const characters = ref([])

    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character')
        characters.value = response.data.results
      } catch (error) {
        console.error("Error al obtener los personajes:", error)
      }
    }

    onMounted(fetchCharacters)

    return { characters }
  }
}
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}
</style>
