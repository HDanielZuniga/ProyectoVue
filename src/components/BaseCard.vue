<!-- src/components/BaseCard.vue -->
<template>
  <div class="card h-100 d-flex flex-column">
    <img
      :src="require(`@/assets/${producto.imagen}`)"
      class="card-img-top"
      :alt="producto.nombre"
      style="height: 200px; object-fit: cover;"
    >
    <div class="card-body d-flex flex-column justify-content-between">
      <div>
        <h5 class="card-title">{{ producto.nombre }}</h5>
        <p class="card-text">{{ producto.descripcion }}</p>
      </div>
      <button class="btn btn-primary mt-3" @click="$emit('agregar', producto.nombre)">
        Agregar al carrito
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
  props: {
    producto: {
      type: Object,
      required: true
    }
  }
};
</script>
