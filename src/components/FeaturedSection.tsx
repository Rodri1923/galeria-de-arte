import artworkImage from '../assets/images/artwork-2.jpg'

function FeaturedSection() {
  return (
    <section
      style={{
        padding: '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}
      >
        {/* Imagen */}
        <div>
          <img
            src={artworkImage}
            alt="Obra destacada"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>

        {/* Texto */}
        <div style={{ maxWidth: '600px' }}>
          <h2
            style={{
              fontSize: '28px',
              marginBottom: '16px',
              letterSpacing: '2px',
            }}
          >
            Obra Destacada
          </h2>

          <p style={{ lineHeight: 1.6, color: '#555' }}>
            Una pieza representativa del estilo artístico, donde la composición,
            el color y la técnica se combinan para transmitir una atmósfera única.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection