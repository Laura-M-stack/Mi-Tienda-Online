import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Carrito({ carrito, vaciarCarrito }) {
  const navigate = useNavigate()

  const confirmarCompra = () => {
    if (carrito.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Tu carrito está vacío',
        text: 'Agrega productos antes de confirmar la compra.',
        confirmButtonColor: '#a46fff'
      })
    } else {
      Swal.fire({
        icon: 'success',
        title: '¡Compra confirmada!',
        text: 'Gracias por tu compra. Te enviaremos un correo con los detalles.',
        confirmButtonColor: '#a46fff'
      }).then(() => {
        // Vaciar carrito
        vaciarCarrito()
        // Redirigir a Home
        navigate('/')
      })
    }
  }

  return (
    <>
      <h1>Carrito de compras</h1>
      {carrito.length === 0 ? (
        <p style={{fontSize:'x-large'}}>El carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {carrito.map((item, index) => (
              <li key={index}>
                {item.title} - ${item.price}
              </li>
            ))}
          </ul>

          {/* Botón Confirmar compra */}
          <button
            style={{ marginTop: '2rem', maxWidth: '300px' }}
            onClick={confirmarCompra}
          >
            Confirmar compra
          </button>

          {/* Botón para seguir comprando */}
          <button
            style={{
              marginTop: '1rem',
              maxWidth: '300px',
              backgroundColor: '#ffffff',
              color: '#a46fff',
              border: '2px solid #a46fff'
            }}
            onClick={() => navigate('/productos')}
          >
            Seguir comprando
          </button>
        </>
      )}
    </>
  )
}

export default Carrito
