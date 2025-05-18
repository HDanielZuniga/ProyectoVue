<template>
  <div class="card shadow-sm mx-auto" style="max-width: 400px;">
    <div class="card-img-top text-center">
      <slot name="image"></slot>
    </div>
    <div class="card-body">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.card-img-top img {
  max-height: 200px;
  object-fit: cover;
}
</style>
