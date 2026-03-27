import heroImage from '../assets/images/artwork-1.jpg'

function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        height: '80vh',
        overflow: 'hidden',
      }}
    >
      {/* Imagen */}
      <img
        src={heroImage}
        alt="Obra destacada"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Overlay oscuro */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.4)',
        }}
      />

      {/* Contenido */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '48px',
            letterSpacing: '4px',
          }}
        >
          GALERÍA DE ARTE
        </h1>

        <p style={{ marginTop: '16px' }}>
          Obras originales
        </p>
      </div>
    </section>
  )
}

export default HeroSection