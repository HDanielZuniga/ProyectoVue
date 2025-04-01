<template>
    <div class="card" v-if="cardData">
      <img :src="cardImage" :alt="`Imagen de ${cardData.titulo}`" class="card-img" />
      <div class="card-content">
        <h2 class="card-title">{{ cardData.titulo }}</h2>
        <p class="card-description">{{ cardData.descripcion_completa }}</p>
        <p class="card-uso" v-if="cardData.casos_de_uso"><strong>Casos de uso:</strong> {{ cardData.casos_de_uso }}</p>
        <p class="card-expertos" v-if="cardData.expertos_destacados && cardData.expertos_destacados.length">
          <strong>Expertos:</strong> {{ cardData.expertos_destacados.join(', ') }}
        </p>
      </div>
    </div>
    <div v-else>
      <p>Cargando datos...</p>
    </div>
  </template>
  
  <script>
  import data from '@/assets/datos.json'
  export default {
    name: 'LocalCardComponent',
    props: {
      // Prop que indica qué temática se debe mostrar
      temaId: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        cardData: null,
        defaultImage: 'https://via.placeholder.com/400x200?text=Imagen+No+Disponible'
      }
    },
    computed: {
      cardImage() {
        return this.cardData && this.cardData.image ? this.cardData.image : this.defaultImage;
      }
    },
    created() {
      // Si el temaId es "perfil", usa los datos de perfil (a nivel raíz)
      if (this.temaId === 'perfil') {
        this.cardData = {
          titulo: data.nombre,
          descripcion_completa: data.cargo,
          casos_de_uso: "",
          expertos_destacados: []
        }
      } else {
        // De lo contrario, busca en el arreglo "tema-libre"
        this.cardData = data["tema-libre"].find(item => item.id === this.temaId) || null;
      }
    }
  }
  </script>
  
 