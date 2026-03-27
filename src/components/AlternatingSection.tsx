import artwork1 from '../assets/images/artwork-1.jpg'
import artwork2 from '../assets/images/artwork-3.jpg'

function AlternatingSection() {
  return (
    <section
      style={{
        padding: '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '80px',
      }}
    >
      {/* BLOQUE 1 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <img
          src={artwork1}
          alt="Obra"
          style={{ width: '100%', height: 'auto' }}
        />

        <div>
          <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>
            Técnica y expresión
          </h3>
          <p style={{ color: '#555', lineHeight: 1.6 }}>
            Cada obra refleja una exploración profunda del color y la forma,
            combinando tradición y sensibilidad contemporánea.
          </p>
        </div>
      </div>

      {/* BLOQUE 2 (invertido en desktop después) */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <img
          src={artwork2}
          alt="Obra"
          style={{ width: '100%', height: 'auto' }}
        />

        <div>
          <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>
            Inspiración
          </h3>
          <p style={{ color: '#555', lineHeight: 1.6 }}>
            Paisajes, escenas cotidianas y emociones son reinterpretados desde
            una mirada personal que busca capturar lo esencial.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AlternatingSection