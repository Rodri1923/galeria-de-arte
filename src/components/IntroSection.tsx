const IntroSection = () => {
  return (
    <section className="bg-canvas py-20 md:py-32 px-6">
      
      <div className="max-w-2xl mx-auto md:ml-[15%] lg:ml-[20%]">
        
        <div className="w-10 h-px bg-gold mb-8" />

        <p className="
          font-serif
          text-2xl md:text-3xl lg:text-4xl
          leading-relaxed
          text-foreground/90
          italic
        ">
          "Cada pincelada es un diálogo entre la luz y la memoria."
        </p>

        <div className="mt-10 space-y-6">
          
          <p className="
            font-sans
            text-base md:text-lg
            leading-relaxed
            font-light
            text-[hsl(36,23%,47%)]
          ">
            María Elida Ultra es una artista plástica cuya obra ha trascendido fronteras, con cuadros vendidos tanto en Uruguay como en el extranjero. Sus inicios se remontan a la Casa de la Cultura, donde estudió bajo la guía del profesor Cabrera. Más tarde profundizó su formación junto a reconocidos maestros como Fernando Fraga y Daniel Arteta, hasta encontrar su propio camino artístico, que sigue desarrollando de manera independiente desde hace años.
          </p>

          <p className="
            font-sans
            text-base md:text-lg
            leading-relaxed
            font-light
            text-[hsl(36,23%,47%)]
          ">
            Su técnica preferida es el óleo aplicado con espátula, recurso con el que logra transmitir fuerza y vitalidad en cada trazo. Sus paisajes, cargados de color y textura, reflejan rincones de la Ciudad Vieja de Colonia del Sacramento, taperas que evocan la memoria del campo, marinas y otros escenarios que capturan la esencia del entorno uruguayo.
          </p>

          <p className="
            font-sans
            text-base md:text-lg
            leading-relaxed
            font-light
            text-[hsl(36,23%,47%)]
          ">
            La pintura de Ultra se caracteriza por un estilo expresivo y sensible, donde lo cotidiano se transforma en un espacio de contemplación. Cada una de sus obras invita a descubrir no solo la belleza del paisaje, sino también la emoción y la nostalgia que en él habitan.
          </p>

        </div>

      </div>
    </section>
  )
}

export default IntroSection