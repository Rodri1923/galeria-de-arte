import artwork1 from '../assets/images/artwork-1.jpg'
import artwork2 from '../assets/images/artwork-3.jpg'

function AlternatingSection() {
  return (
    <section className="bg-background py-24">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT: DIAGONAL COMPOSITION */}
        <div className="relative h-[560px]">

          {/* IMAGE 1 */}
          <div className="absolute top-0 left-0 w-[78%] h-[62%] overflow-hidden z-10">
            <img
              src={artwork1}
              className="w-full h-full object-cover"
            />
          </div>

          {/* IMAGE 2 (OFFSET DIAGONAL REAL) */}
          <div className="absolute bottom-0 right-0 w-[78%] h-[62%] overflow-hidden z-20 translate-x-2 translate-y-2">
            <img
              src={artwork2}
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* RIGHT: TEXT */}
        <div className="flex items-center">

          <div className="max-w-md">

            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-5">
              Técnica y expresión
            </h3>

            <p className="font-sans text-[hsl(36,23%,47%)] leading-relaxed font-light">
              Cada obra construye una relación entre composición y movimiento,
              donde la superposición visual genera profundidad y ritmo.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default AlternatingSection