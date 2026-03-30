import artworkImage from '../assets/images/artwork-2.jpg'

function FeaturedSection() {
  return (
    <section className="bg-canvas py-16 md:py-28 px-6">
      
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-10 md:mb-14 md:w-2/3">
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gold" />

            <h2 className="font-serif text-sm tracking-[0.4em] uppercase text-[hsl(36,23%,47%)]">
              Obra Destacada
            </h2>
          </div>
        </div>

        {/* Layout */}
        <div className="md:flex md:gap-12 md:items-start">

          {/* Imagen */}
          <div className="md:w-2/3">
            <img
              src={artworkImage}
              alt="Obra destacada"
              className="w-full h-auto block"
            />
          </div>

          {/* Texto */}
          <div className="mt-8 md:mt-0 md:w-1/3">

            <h3 className="font-serif text-2xl md:text-3xl text-foreground italic">
              Cuadro Destacado
            </h3>

            <div className="w-8 h-px bg-gold my-5" />

            <p className="font-sans leading-relaxed text-[hsl(36,23%,47%)] text-sm md:text-base font-light">
              Una pieza representativa del estilo artístico, donde la composición,
              el color y la técnica se combinan para transmitir una atmósfera única.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection