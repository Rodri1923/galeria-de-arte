function GalleryFooter() {
  return (
    <footer
      style={{
        borderTop: '1px solid #eee',
        marginTop: '80px',
        padding: '40px 20px',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontSize: '14px',
          color: '#777',
          marginBottom: '8px',
        }}
      >
        Galería de Arte
      </p>

      <p
        style={{
          fontSize: '12px',
          color: '#aaa',
        }}
      >
        © {new Date().getFullYear()} Todos los derechos reservados
      </p>
    </footer>
  )
}

export default GalleryFooter