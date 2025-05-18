<template>
  <div class="container my-5">
    <h2 class="text-center mb-4">Nuestros Productos</h2>
    <div class="row g-4">
      <div
        class="col-sm-6 col-lg-4"
        v-for="(producto, index) in productos"
        :key="index"
      >
        <div class="card">
          <img :src="require(`@/assets/${producto.imagen}`)" class="card-img-top" :alt="producto.nombre">
          <div class="card-body">
            <h5 class="card-title">{{ producto.nombre }}</h5>
            <p class="card-text">{{ producto.descripcion }}</p>
            <button class="btn btn-primary" @click="agregar(producto.nombre)">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productos: [
        {
          nombre: "Brownie de Chocolate",
          descripcion: "Delicioso y suave, perfecto para los amantes del chocolate.",
          imagen: "pastel_chocolate.png",
        },
        {
          nombre: "Torta de Fresa",
          descripcion: "Fresca, dulce y decorada con frutas naturales.",
          imagen: "pastel_chocolate.png",
        },
        {
          nombre: "Galletas Artesanales",
          descripcion: "Crujientes y hechas con amor. Varios sabores.",
          imagen: "pastel_chocolate.png",
        },
      ],
    };
  },
  methods: {
    agregar(producto) {
      alert(`¡${producto} agregado al carrito!`);
    },
  },
};
</script>
