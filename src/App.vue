<template>
  <div id="app">
    <header>
      <h1>Mi Aplicación</h1>
      <nav>
        <router-link to="/">Rick</router-link> |
        <router-link to="/perfil">Perfil</router-link> |
        <router-link to="/tema">Tema</router-link> |
        <router-link to="/vista">User</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/users">Usuarios</router-link> |
        <router-link to="/prototipe">ProtoTrash</router-link>
      
      </nav>
    </header>
    <main>
      <!-- Se aplicará el diseño (la tarjeta) solo si la ruta es "/perfil" o "/tema" -->
      <div class="views-container">
        <!-- Vista de Perfil formateada en tarjeta -->
        <div v-if="$route.path === '/perfil'" class="card-custom">
          <img :src="perfil.foto" class="card-img" alt="Foto de Perfil">
          <div class="card-content">
            <h2 class="card-title">{{ perfil.nombre }}</h2>
            <p class="card-description">{{ perfil.cargo }}</p>
          </div>
        </div>

        <!-- Vista de Tema formateada en tarjeta -->
        <div v-else-if="$route.path === '/tema'" class="card-custom">
          <img :src="tema.imagen" class="card-img" :alt="'Imagen de ' + tema.titulo">
          <div class="card-content">
            <h2 class="card-title">{{ tema.titulo }}</h2>
            <p class="card-description">{{ tema.descripcion_completa }}</p>
            <div>
              <strong>Expertos Destacados:</strong>
              <ul>
                <li v-for="(exp, index) in tema.expertos_destacados" :key="index">{{ exp }}</li>
              </ul>
            </div>
            <p><strong>Casos de Uso:</strong> {{ tema.casos_de_uso }}</p>
          </div>
        </div>

        <!-- Para otras rutas, si las hubiera, se renderiza el componente correspondiente -->
        <router-view v-else />
      </div>
    </main>
    <footer>
      <p>© 2025 Mi Aplicación. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
import datos from '@/assets/datos.json';

export default {
  name: "App",
  data() {
    return {
      // Datos de perfil (del JSON)
      perfil: {
        nombre: datos.nombre,
        cargo: datos.cargo,
        foto: datos.foto
      },
      // Se selecciona el tema con id "01" (por ejemplo, Inteligencia Artificial)
      tema: datos["tema-libre"].find(item => item.id === "01")
    };
  }
}
</script>

<style>
/* Estilos globales para la aplicación */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  text-align: center;
  color: #2c3e50;
}

header, footer {
  padding: 20px;
  background-color: #f5f5f5;
}

nav {
  margin: 20px 0;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 5px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* Contenedor para las vistas */
.views-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
}

/* Diseño de la tarjeta que se aplica tanto a Perfil como a Tema */
.card-custom {
  border: 1px solid #ccc;
  padding: 16px;
  margin: auto;
  border-radius: 8px;
  background-color: #fff;
  max-width: 300px; /* Dimensiones reducidas */
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Imagen dentro de la tarjeta */
.card-img {
  width: 150px;         /* Imagen más pequeña */
  height: auto;
  display: block;       /* Se convierte en bloque para centrarla */
  margin: 20px auto 0;   /* Centrado horizontal y margen superior */
  border-radius: 4px;
}

/* Contenido de la tarjeta */
.card-content {
  margin-top: 12px;
}

.card-title {
  font-size: 1.5rem;
  margin: 12px 0;
}

.card-description {
  font-size: 1rem;
  color: #555;
  margin-top: 8px;
}
</style>
