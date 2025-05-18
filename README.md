# Proyecto: Dulce Encanto - Pastelería

##  Descripción General

Este proyecto corresponde a la actividad individual de la asignatura "Diseño con Frameworks". Utiliza **Vue 3**, **Bootstrap 5** y una estructura basada en **componentes y vistas** para representar el diseño de una tienda de pastelería llamada **Dulce Encanto**.

---

##  Requisitos y Cumplimiento

###  1. Tema
**Cumplido**  
El proyecto está basado en una pastelería virtual llamada _Dulce Encanto_, donde se visualizan productos como tortas, galletas y brownies, representando un diseño comercial/tienda.

---

###  2. Layout (Esqueletos o diseño adaptable)
**Cumplido**  
Se utilizó Bootstrap para garantizar un diseño **responsive**.  
La estructura se adapta a diferentes dispositivos mediante clases como `container`, `col-sm-6`, `col-lg-4`, `navbar-toggler`, etc.

---

###  3. Diseño adaptable o responsive
**Cumplido**  
El diseño se adapta perfectamente a dispositivos móviles y de escritorio. El navbar es colapsable y el contenido de tarjetas y carrusel se reorganiza dependiendo del tamaño de pantalla.

---

###  4. Componentes utilizados (mínimo 5)
**Cumplido**  
El diseño usa los siguientes **componentes de Bootstrap**:

1. **Navbar** (barra de navegación)
2. **Navbar-toggler** (menú offcanvas para móviles)
3. **Carousel** (carrusel de imágenes)
4. **Cards** (tarjetas de productos)
5. **Buttons** (`btn btn-primary`)

---

###  5. Funcionalidad JavaScript
**Cumplido**  
Se implementó una funcionalidad que permite **agregar productos al carrito** usando una alerta personalizada:

```js
methods: {
  agregar(producto) {
    alert(`¡${producto} agregado al carrito!`);
  }
}
```

Este evento está asociado al botón “Agregar al carrito” en cada tarjeta.

---

###  6. Personalización
**Cumplido**  
Se personalizó el diseño con:

- **Fuentes de Google Fonts:**
  - `Pacifico` para el nombre de la marca
  - `Quicksand` para el texto general
- **Colores personalizados** en los botones, fondo y textos usando `global.css`:

```css
body {
  font-family: 'Quicksand', sans-serif;
  background-color: #fff7f9;
}
.navbar-brand {
  font-family: 'Pacifico', cursive;
  color: #c76d7e !important;
}
.btn-primary {
  background-color: #c76d7e;
}
.btn-primary:hover {
  background-color: #a64e65;
}
```

---

##  Estructura del Proyecto

```
src/
├── assets/
├── components/
├── layouts/
│   └── MainLayout.vue
├── router/
│   └── index.js
├── views/
│   ├── InicioView.vue
│   └── TemaView.vue
├── App.vue
├── main.js
```

---

##  Entrega

- Proyecto comprimido en `.zip`
- Estructura modular limpia y organizada


