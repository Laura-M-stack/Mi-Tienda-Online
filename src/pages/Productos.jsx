import { Link } from 'react-router-dom'

function Productos({ productos, loading, error, agregarAlCarrito }) {
  if (loading) return <p>Cargando productos...</p>
  if (error) return <p>{error}</p>

  return (
    <>
      <h1>Productos</h1>
      <div className="productos-lista">
        {productos.map(producto => (
          <div key={producto.id} className="producto-card">
            <h2>{producto.title}</h2>
            <img src={producto.image} alt={producto.title} />
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>${producto.price}</p>
            <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
            <br />
            <Link to={`/producto/${producto.id}`} className="ver-detalle-btn">
              Ver detalle
            </Link>

          </div>
        ))}
      </div>
    </>
  )
}

export default Productos
