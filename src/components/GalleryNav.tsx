function GalleryNav() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'white',
        borderBottom: '1px solid #eee',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo / Nombre */}
        <h1
          style={{
            fontSize: '18px',
            letterSpacing: '2px',
          }}
        >
          GALERÍA
        </h1>

        {/* Links */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="#">Inicio</a>
          <a href="#">Obras</a>
          <a href="#">Contacto</a>
        </div>
      </div>
    </nav>
  )
}

export default GalleryNav