<template>
  <div class="tema-view">
    <h2>Vista de Tema</h2>
    <!-- Se utiliza LocalCardComponent para mostrar la tarjeta del tema -->
    <LocalCardComponent temaId="01" />
  </div>
</template>

<script>
import LocalCardComponent from '@/components/LocalCardComponent.vue'

export default {
  name: 'TemaView',
  components: { LocalCardComponent }
}
</script>

<style scoped>
.tema-view {
  text-align: center;
}
</style>
