<template>
  <div class="perfil-view">
    <h2>Vista de Perfil</h2>
    <!-- Se utiliza LocalCardComponent para mostrar la tarjeta de perfil -->
    <LocalCardComponent temaId="perfil" />
  </div>
</template>

<script>
import LocalCardComponent from '@/components/LocalCardComponent.vue'

export default {
  name: 'PefilView',
  components: { LocalCardComponent }
}
</script>

<style scoped>
.perfil-view {
  text-align: center;
}
</style>
