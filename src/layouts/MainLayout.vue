<template>
    <div id="layout">
      <header>
        <h1>Mi Aplicación</h1>
        <nav>
          <router-link to="/">Rick</router-link> |
          <router-link to="/perfil">Perfil</router-link> |
          <router-link to="/tema">Tema</router-link>
        </nav>
      </header>
      <main>
        <!-- Aquí se renderizarán las vistas hijas -->
        <router-view />
      </main>
      <footer>
        <p>© 2025 Mi Aplicación. Todos los derechos reservados.</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  // No se requiere lógica adicional en el layout básico, 
  // pero se puede agregar si es necesario.
  </script>
  
  <style scoped>
  /* Ejemplo de estilos básicos para el layout */
  #layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  header,
  footer {
    background-color: #f5f5f5;
    padding: 20px;
    text-align: center;
  }
  main {
    flex: 1;
    padding: 20px;
  }
  nav a {
    margin: 0 5px;
    text-decoration: none;
    font-weight: bold;
  }
  nav a.router-link-exact-active {
    color: #42b983;
  }
  </style>
  