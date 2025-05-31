import { Link } from 'react-router-dom'

function Navbar({ carritoCount }) {
  return (
    <nav style={{
      backgroundColor: '#a46fff',
      padding: '1rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: '8px',
      marginBottom: '2rem'
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>

        <Link to="/" style={{
          color: '#ffffff',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.2rem'
                }}><img
          src="/logo.svg"
          alt="Logo"
          style={{ height: '60px' }}
        />
        </Link>
      </div>

      {/* Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <Link to="/productos" style={{ color: '#ffffff', textDecoration: 'none', fontSize:'larger' }}>
          Productos
        </Link>
        <Link to="/checkout" style={{ color: '#ffffff', textDecoration: 'none', fontSize:'larger' }}>
          Checkout
        </Link>

        {/* Carrito */}
        <Link to="/carrito" style={{
          color: '#ffffff',
          textDecoration: 'none',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
          position: 'relative'
        }}>
          🛒
          {carritoCount > 0 && (
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-10px',
              backgroundColor: '#ffffff',
              color: '#a46fff',
              borderRadius: '50%',
              padding: '0.2rem 0.5rem',
              fontSize: '0.8rem',
              fontWeight: 'bold'
            }}>
              {carritoCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
