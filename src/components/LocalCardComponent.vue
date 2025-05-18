<template>
  <BaseCard>
    <template #image>
      <img :src="cardData.imagen" :alt="`Imagen de ${cardData.titulo}`" class="img-fluid rounded" />
    </template>
    <template #content>
      <h5 class="card-title text-danger">{{ cardData.titulo }}</h5>
      <p class="card-text">{{ cardData.descripcion_completa }}</p>
      <p><strong>Casos de uso:</strong> {{ cardData.casos_de_uso }}</p>
      <p><strong>Expertos:</strong> {{ cardData.expertos_destacados.join(', ') }}</p>
    </template>
  </BaseCard>
</template>
