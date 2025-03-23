<template>
  <div>
    <header class="default-header">
      <!-- Aquí sigue tu nav sin cambios -->
      <nav class="default-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">Rick</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout"
}
</script>

<style scoped>
/* Agregamos esta regla para ocultar el nav de este layout */
/* sin eliminar ni cambiar el código original */
.default-nav {
  display: none;
}
</style>
