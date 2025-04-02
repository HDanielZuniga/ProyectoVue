<template>
  <BaseCard>
    <template #image>
      <img :src="character.image" :alt="character.name" class="card-img" />
    </template>
    <template #content>
      <h2 class="card-title">{{ character.name }}</h2>
      <p class="card-status">{{ character.status }} - {{ character.species }}</p>
      <p class="card-origin">{{ character.origin.name }}</p>
      <div class="card-episodes">
        <p>Episodios:</p>
        <ul>
          <li v-for="episode in episodes" :key="episode">{{ episode }}</li>
        </ul>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import axios from 'axios'
import BaseCard from './BaseCard.vue'

export default {
  name: 'CardComponent',
  components: { BaseCard },
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      episodes: []
    }
  },
  mounted() {
    this.fetchEpisodes()
  },
  methods: {
    async fetchEpisodes() {
      try {
        const responses = await Promise.all(
          this.character.episode.map(url => axios.get(url))
        )
        this.episodes = responses.map(response => response.data.name)
      } catch (error) {
        console.error('Error fetching episodes:', error)
      }
    }
  }
}
</script>
