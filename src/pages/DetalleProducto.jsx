import { useParams } from 'react-router-dom'

function DetalleProducto({ productos, agregarAlCarrito }) {
  const { id } = useParams()
  const producto = productos.find(p => p.id === parseInt(id))

  if (!producto) return <p>Producto no encontrado.</p>

  return (
    <div className="detalle-producto">
      <h1>{producto.title}</h1>
      <img src={producto.image} alt={producto.title} />
      <p>{producto.description}</p>
      <p><strong>Precio:</strong> ${producto.price}</p>
      <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
    </div>
  )
}

export default DetalleProducto
