<template>
  <div>
    <h2>Pefil View</h2>
    <div class="card profile-data">
      <h3>{{ perfilData.nombre }}</h3>
      <img class="profile-img" :src="perfilData.foto" alt="Foto de perfil" />
      <p>{{ perfilData.cargo }}</p>
    </div>
  </div>
</template>

<script>
import data from '@/assets/datos.json'

export default {
  name: "PefilView",
  data() {
    return {
      perfilData: {}
    }
  },
  created() {
    // Como data.foto tiene una ruta absoluta, se usa directamente
    this.perfilData = {
      nombre: data.nombre,
      cargo: data.cargo,
      foto: data.foto  
    }
  }
}
</script>

<style scoped>
.profile-data {
padding: 0%

;}

.profile-img {
  display: block;
  margin: 20px auto;
  max-width: 150px;
  border-radius: 50%;
}
</style>
