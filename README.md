
# 🛍️ Mi Tienda Online

Proyecto de eCommerce desarrollado en React.

Este proyecto forma parte de la pre-entrega del curso de React JS.  
Simula una tienda online con productos variados, carrito de compras y proceso de checkout.

## 🚀 Funcionalidades

✅ Catálogo de productos  
✅ Carrito de compras (agregar productos, confirmar compra)  
✅ Conexión a API pública de productos (`https://fakestoreapi.com/products`)  
✅ Rutas dinámicas (detalle de producto)  
✅ Ruta protegida para el Checkout (solo accesible si hay productos en el carrito)  
✅ Confirmación de compra con SweetAlert2  
✅ Responsive (adaptado a desktop, tablet, mobile)  
✅ Navbar con contador de carrito  
✅ Footer  
✅ Imagen hero de fondo  
✅ Favicon personalizado

## 🛠️ Tecnologías

- React
- React Router DOM
- SweetAlert2
- Vite
- CSS puro (con diseño responsive y moderno)

## 🎨 Estilo

- Paleta de colores personalizada (violetas, lavanda)
- Imagen hero de fondo
- Cards de productos con hover
- Diseño centrado y limpio
- Botones accesibles y coherentes en toda la app

## 🔗 Demo

👉 [Ver online en Netlify](https://<URL-NETLIFY>.netlify.app)

> *Reemplazar `<URL-NETLIFY>` por la URL de Netlify cuando lo suba.*

## 📂 Estructura del proyecto

```
/public
  /logo.svg
  /favicon.svg
  /banner.png
/src
  /components
    Navbar.jsx
    Footer.jsx
  /pages
    Home.jsx
    Productos.jsx
    Carrito.jsx
    DetalleProducto.jsx
    Checkout.jsx
  App.jsx
  main.jsx
  index.css
```

## ⚙️ Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## 📚 Consignas cumplidas

### Requerimiento 1: Carrito de compras

✅ Listado de productos  
✅ useState para manejar carrito  
✅ Evento click para agregar productos  
✅ Componente para mostrar carrito

### Requerimiento 2: API

✅ API integrada  
✅ useState para estado de carga  
✅ useEffect para efectos secundarios

### Requerimiento 3: Rutas

✅ Implementación de rutas  
✅ Detalle de producto dinámico

### Requerimiento 4: Rutas protegidas

✅ Checkout protegido → solo accesible si el carrito tiene productos

---

## 💻 Autor

Laura Moyano

---

## 🚀 ¡Gracias por visitar Mi Tienda Online! 🚀
