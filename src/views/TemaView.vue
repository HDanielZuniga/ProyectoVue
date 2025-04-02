<template>
  <div class="container my-4">
    <div class="card mx-auto card-custom text-center">
      <img :src="tema.imagen" class="img-custom" alt="Imagen de Inteligencia Artificial">
      <div class="card-body">
        <h5 class="card-title">{{ tema.titulo }}</h5>
        <p class="card-text">{{ tema.descripcion_completa }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <strong>Expertos Destacados:</strong>
          <ul class="list-unstyled">
            <li v-for="(experto, index) in tema.expertos_destacados" :key="index">{{ experto }}</li>
          </ul>
        </li>
        <li class="list-group-item">
          <strong>Casos de Uso:</strong> {{ tema.casos_de_uso }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import datos from '@/assets/datos.json';

export default {
  name: 'TemaView',
  data() {
    return {
      tema: datos["tema-libre"].find(item => item.id === "01")
    };
  }
};
</script>
