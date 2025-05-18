<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-4">
      <a class="navbar-brand fs-3" href="#">Dulce Encanto</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-none d-lg-block">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><router-link class="nav-link" to="/">Productos</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/inicio">Inicio</router-link></li>
          <li class="nav-item"><a class="nav-link" href="#">Contacto</a></li>
        </ul>
      </div>
    </nav>

    <router-view />

    <footer class="text-center py-4 bg-light mt-5">
      <p>&copy; 2025 Dulce Encanto. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>
