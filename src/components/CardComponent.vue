<template>
  <div class="card">
    <img :src="character.image" :alt="character.name" class="card-img" />
    <div class="card-content">
      <h2 class="card-title">{{ character.name }}</h2>
      <p class="card-status">{{ character.status }} - {{ character.species }}</p>
      <p class="card-origin">{{ character.origin.name }}</p>
      <div class="card-episodes">
        <p>Episodios:</p>
        <ul>
          <li v-for="episode in episodes" :key="episode">{{ episode }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CardComponent',
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      episodes: [] // Almacenará los nombres de los episodios
    }
  },
  mounted() {
    this.fetchEpisodes()
  },
  methods: {
    async fetchEpisodes() {
      try {
        // Realizamos una llamada para cada URL del array "episode"
        const responses = await Promise.all(
          this.character.episode.map(url => axios.get(url))
        )
        // Extraemos el nombre de cada episodio
        this.episodes = responses.map(response => response.data.name)
      } catch (error) {
        console.error('Error fetching episodes:', error)
      }
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 200px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin: 0 auto;
}
.card-img {
  width: 100%;
  height: auto;
}
.card-content {
  padding: 1rem;
}
.card-title {
  font-size: 1.2rem;
  margin: 0;
}
.card-status {
  font-size: 0.9rem;
  color: #666;
  margin: 0.5rem 0;
}
.card-origin {
  font-size: 0.9rem;
  margin: 0.5rem 0;
}
.card-episodes p {
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0.5rem 0 0.3rem;
}
.card-episodes ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.card-episodes li {
  font-size: 0.8rem;
  color: #666;
}
</style>
