<template>
  <div class="rick-view">
    <h1>Personajes</h1>
    <div 
      class="cards-container"
      :style="{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 200px)',
        gap: '2rem',
        marginTop: '1rem',
        width: 'fit-content',
        marginLeft: 'auto',
        marginRight: 'auto'
      }"
    >
      <CardComponent 
        v-for="char in characters" 
        :key="char.id" 
        :character="char" 
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import CardComponent from '../components/CardComponent.vue'

export default {
  name: 'RickView', 
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
/* Aquí puedes incluir estilos específicos para la vista de Rick */
</style>
