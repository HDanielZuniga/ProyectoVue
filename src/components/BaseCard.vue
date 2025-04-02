<template>
    <div class="base-card">
      <div class="base-card-image">
        <slot name="image"></slot>
      </div>
      <div class="base-card-content">
        <slot name="content"></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style>
  .base-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 200px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin: 0 auto;
  }
  .base-card-image {
    width: 100%;
    height: auto;
  }
  .base-card-content {
    padding: 1rem;
  }
  
  /* Estilos globales para el contenido de la tarjeta */
  .card-img {
    width: 100%;
    height: auto;
  }
  .card-title {
    font-size: 1.2rem;
    margin: 0;
  }
  .card-status,
  .card-origin,
  .card-description,
  .card-uso,
  .card-expertos {
    font-size: 0.9rem;
    color: #666;
    margin: 0.5rem 0;
  }
  .card-episodes p {
    font-size: 0.9rem;
    font-weight: bold;
    margin: 0.5rem 0 0.3rem;
  }
  .card-episodes ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .card-episodes li {
    font-size: 0.8rem;
    color: #666;
  }
  </style>
  