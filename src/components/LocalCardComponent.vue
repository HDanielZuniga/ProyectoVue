<template>
  <BaseCard>
    <template #image>
      <img :src="cardData.imagen" :alt="`Imagen de ${cardData.titulo}`" class="card-img" />
    </template>
    <template #content>
      <h2 class="card-title">{{ cardData.titulo }}</h2>
      <p class="card-description">{{ cardData.descripcion_completa }}</p>
      <p class="card-uso"><strong>Casos de uso:</strong> {{ cardData.casos_de_uso }}</p>
      <p class="card-expertos"><strong>Expertos:</strong> {{ cardData.expertos_destacados.join(', ') }}</p>
    </template>
  </BaseCard>
</template>

<script>
import data from '@/assets/datos.json'
import BaseCard from './BaseCard.vue'

export default {
  name: 'LocalCardComponent',
  components: { BaseCard },
  props: {
    temaId: {
      type: String,
      required: true
    }
  },
  computed: {
    cardData() {
      return this.temaId === 'perfil'
        ? {
            titulo: data.nombre,
            descripcion_completa: data.cargo,
            imagen: data.foto, // Asignamos directamente la imagen desde el JSON del perfil
            casos_de_uso: "",
            expertos_destacados: []
          }
        : data["tema-libre"].find(item => item.id === this.temaId) || {}
    }
  }
}
</script>
