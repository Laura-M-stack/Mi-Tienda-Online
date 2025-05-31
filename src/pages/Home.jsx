import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="hero">
      <h1 style={{
        fontSize: '5rem',
        marginBottom: '1.5rem',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontFamily: "'Montserrat', sans-serif",
        color: 'white',
      }}>
        Mi Tienda Online
      </h1>

      <p style={{
        fontSize: '1.8rem',
        marginBottom: '2rem',
        maxWidth: '800px'
      }}>
        Bienvenid@ a nuestra tienda de productos variados.
        ¡Descubrí ofertas únicas en tecnología, hogar, moda y mucho más!
      </p>

      <Link to="/productos">
        <button>
          Ver Productos
        </button>
      </Link>
    </div>
  )
}

export default Home
