<template>
  <div class="container my-5">

    <!-- Carrusel -->
    <div id="carouselExample" class="carousel slide mb-5" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/pastel_chocolate.png" class="d-block w-100" alt="Brownies" style="height: 120px; object-fit: cover;">
        </div>
        <div class="carousel-item">
          <img src="@/assets/galletas_artesanales.png" class="d-block w-100" alt="Galletas Artesanales" style="height: 120px; object-fit: cover;">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>

    <!-- Tarjetas con BaseCard -->
    <h2 class="text-center mb-4">Nuestros Productos</h2>
    <div class="row g-4">
      <div
        class="col-sm-6 col-lg-4"
        v-for="(producto, index) in productos"
        :key="index"
      >
        <BaseCard :producto="producto" @agregar="agregar" />
      </div>
    </div>

  </div>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";

export default {
  components: { BaseCard },
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
          imagen: "torta_fresa.png",
        },
        {
          nombre: "Galletas Artesanales",
          descripcion: "Crujientes y hechas con amor. Varios sabores.",
          imagen: "galletas_artesanales.png",
        },
      ],
    };
  },
  methods: {
    agregar(nombre) {
      alert(`¡${nombre} agregado al carrito!`);
    },
  },
};
</script>
