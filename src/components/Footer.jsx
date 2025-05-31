function Footer() {
  return (
    <footer style={{
      backgroundColor: '#f3e8f9',
      borderTop: '2px solid #D171FAFF',
      padding: '2rem',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '2rem',
      color: '#6e6e6e',
      marginTop: '3rem'
    }}>
      {/* Columna 1: Marca */}
      <div>
        <h2 style={{ color: '#4b007d', marginBottom: '1rem' }}>Mi Tienda Online</h2>
        <p style={{fontSize:'larger'}}>Tu tienda de confianza para productos variados.</p>
        <p style={{fontSize:'larger'}}>© {new Date().getFullYear()} Mi Tienda Online</p>
      </div>

      {/* Columna 2: Links */}
      <div>
        <h2 style={{ color: '#4b007d', marginBottom: '1rem' }}>Información</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="#" style={{ color: '#6e6e6e', textDecoration: 'none' }}>Política de Privacidad</a>
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="#" style={{ color: '#6e6e6e', textDecoration: 'none' }}>Términos y Condiciones</a>
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="#" style={{ color: '#6e6e6e', textDecoration: 'none' }}>Envíos y Devoluciones</a>
          </li>
        </ul>
      </div>

      {/* Columna 3: Redes */}
      <div>
        <h2 style={{ color: '#4b007d', marginBottom: '1rem' }}>Seguinos</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="#" style={{ color: '#6e6e6e', textDecoration: 'none' }}>Instagram</a>
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="#" style={{ color: '#6e6e6e', textDecoration: 'none' }}>Facebook</a>
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="#" style={{ color: '#6e6e6e', textDecoration: 'none' }}>Contacto</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
