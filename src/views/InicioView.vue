<template>
  <div class="container mt-4">

    <!-- Carrusel -->
    <div id="carouselExample" class="carousel slide mb-5" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/pastel_chocolate.png" class="d-block w-100" alt="Brownies" style="height: 400px; object-fit: cover;">
        </div>
        <div class="carousel-item">
          <img src="@/assets/torta_fresa.png" class="d-block w-100" alt="Torta de Fresa" style="height: 400px; object-fit: cover;">
        </div>
        <div class="carousel-item">
          <img src="@/assets/galletas_artesanales.png" class="d-block w-100" alt="Galletas Artesanales" style="height: 400px; object-fit: cover;">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: "InicioView"
};
</script>
