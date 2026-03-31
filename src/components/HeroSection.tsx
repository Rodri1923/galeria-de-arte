import { siteContent } from "../content/siteContent"

function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Imagen */}
      <img
        src={siteContent.hero.image}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="gallery-overlay absolute inset-0" />

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">

        {/* Frame */}
        <div className="frame-border max-w-lg">

          {/* Título */}
          <h1 className="
            font-serif
            text-4xl md:text-6xl lg:text-7xl
            tracking-wide
            text-primary-foreground
            leading-tight
          ">
            María Elida
            <br />
            Ultra
          </h1>

          {/* Línea dorada */}
          <div className="w-12 h-px bg-gold mx-auto my-4" />

          {/* Subtexto */}
          <p className="
            font-sans
            text-sm md:text-base
            tracking-[0.3em]
            uppercase
            text-primary-foreground/80
            font-light
          ">
            Galería Personal
          </p>

        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 animate-fadeIn opacity-0"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="w-px h-12 bg-primary-foreground/40 mx-auto mb-2" />
          <span className="text-primary-foreground/50 text-xs tracking-[0.2em] uppercase font-sans">
            Deslizar
          </span>
        </div>

      </div>
    </section>
  )
}

export default HeroSection