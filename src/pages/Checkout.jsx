import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Checkout({ carrito, vaciarCarrito }) {
  const navigate = useNavigate()
  const total = carrito.reduce((sum, item) => sum + item.price, 0).toFixed(2)

  const confirmarPago = () => {
    if (carrito.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'No hay productos en el pedido',
        text: 'Por favor, agregá productos al carrito antes de pagar.',
        confirmButtonColor: '#a46fff'
      })
    } else {
      Swal.fire({
        icon: 'success',
        title: '¡Pago confirmado!',
        text: 'Gracias por tu compra. Pronto recibirás tu pedido.',
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
      <h1>Checkout</h1>

      {carrito.length === 0 ? (
        <p>No hay productos en el pedido.</p>
      ) : (
        <>
          <p>Productos en el pedido:</p>
          <ul>
            {carrito.map((item, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>
                {item.title} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>

          <h3 style={{ marginTop: '1.5rem' }}>Total: ${total}</h3>

          <button
            style={{ marginTop: '2rem', maxWidth: '300px' }}
            onClick={confirmarPago}
          >
            Confirmar pago
          </button>
        </>
      )}
    </>
  )
}

export default Checkout
