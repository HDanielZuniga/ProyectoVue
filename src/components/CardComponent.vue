<template>
    <div class="card">
      <img :src="character.image" :alt="character.name" class="card-img" />
      <div class="card-content">
        <h2 class="card-title">{{ character.name }}</h2>
        <p class="card-status">{{ character.status }} - {{ character.species }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardComponent',
    props: {
      character: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 200px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  .card-img {
    width: 100%;
    height: auto;
  }
  .card-content {
    padding: 1rem;
  }
  .card-title {
    font-size: 1.2rem;
    margin: 0;
  }
  .card-status {
    font-size: 0.9rem;
    color: #666;
  }
  </style>
  