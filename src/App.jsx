import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Carrito from './pages/Carrito'
import DetalleProducto from './pages/DetalleProducto'
import Checkout from './pages/Checkout'
import { useState, useEffect } from 'react'

function App() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [carrito, setCarrito] = useState([])

  // Función para vaciar el carrito
  const vaciarCarrito = () => {
    setCarrito([])
  }

  useEffect(() => {
    setLoading(true)
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProductos(data)
        setLoading(false)
      })
      .catch(err => {
        setError('Error al cargar productos')
        setLoading(false)
      })
  }, [])

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto])
  }

  const isAuthenticated = carrito.length > 0

  return (
    <>
      <Navbar carritoCount={carrito.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/productos"
          element={
            <Productos
              productos={productos}
              loading={loading}
              error={error}
              agregarAlCarrito={agregarAlCarrito}
            />
          }
        />
        <Route
          path="/carrito"
          element={
            <Carrito carrito={carrito} vaciarCarrito={vaciarCarrito} />
          }
        />
        <Route
          path="/producto/:id"
          element={
            <DetalleProducto
              productos={productos}
              agregarAlCarrito={agregarAlCarrito}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            isAuthenticated ? (
              <Checkout carrito={carrito} vaciarCarrito={vaciarCarrito} />
            ) : (
              <Navigate to="/productos" />
            )
          }
        />
      </Routes>

      <Footer />
    </>
  )
}

export default App
