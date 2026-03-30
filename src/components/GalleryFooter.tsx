function GalleryFooter() {
  return (
    <footer className="bg-[#3d2d21] py-16 px-6 mt-20">

      <div className="max-w-4xl mx-auto text-center">

        {/* BRAND */}
        <h3 className="font-serif text-2xl tracking-widest text-white mb-4">
          E.ULTRA
        </h3>

        {/* LINE */}
        <div className="w-10 h-px bg-[hsl(36,40%,82%)]/70 mx-auto mb-6" />

        {/* DESCRIPTION */}
        <p className="font-sans text-[hsl(36,40%,82%)]/70 text-sm font-light mb-8">
          Para consultas sobre obras, exposiciones o encargos personalizados.
        </p>

        {/* CONTACT */}
        <a
          href="mailto:contacto@eultra.art"
          className="font-sans text-[hsl(36,57%,70%)] text-sm tracking-[0.2em] uppercase hover:opacity-70 transition"
        >
          contacto@eultra.art
        </a>

        {/* DIVIDER + COPYRIGHT */}
        <div className="mt-12 pt-8 border-t border-[hsl(36,40%,82%)]/20">
          <p className="font-sans text-[hsl(36,40%,82%)]/70 text-xs">
            © {new Date().getFullYear()} E.ULTRA · Todos los derechos reservados
          </p>
        </div>

      </div>

    </footer>
  )
}

export default GalleryFooter