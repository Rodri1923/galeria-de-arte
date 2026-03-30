import { useEffect, useState } from "react"

function Header() {
  const [open, setOpen] = useState(false)
  const [onHero, setOnHero] = useState(true)

  const toggleMenu = () => setOpen((v) => !v)
  const closeMenu = () => setOpen(false)

  useEffect(() => {
    const hero = document.getElementById("hero-section")
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setOnHero(entry.isIntersecting)
      },
      { threshold: 0.6 }
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const textColor = onHero
    ? "text-primary-foreground"
    : "text-foreground"

  return (
    <>
      <header className="
        fixed top-0 left-0 w-full z-[100]
        flex justify-between items-center
        px-7 py-5
        transition-all duration-300
      ">
        {/* BRAND */}
        <div
          className={`
            font-serif
            text-[18px]
            tracking-[0.08em]
            font-medium
            ${textColor}
          `}
        >
          E.ULTRA
        </div>

        {/* HAMBURGER */}
        <button
          onClick={toggleMenu}
          aria-label="Menu"
          className="flex flex-col justify-center gap-[5px] w-[28px] h-[24px]"
        >
          <span className={`h-[2px] w-full bg-current transition-all ${textColor}`} />
          <span className={`h-[2px] w-full bg-current transition-all ${textColor}`} />
          <span className={`h-[2px] w-full bg-current transition-all ${textColor}`} />
        </button>
      </header>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/40 z-[99]"
        >
          <nav
            onClick={(e) => e.stopPropagation()}
            className="
              absolute top-0 right-0
              w-[280px] h-full
              bg-background
              px-6 pt-20
              flex flex-col gap-4
              shadow-[-10px_0_30px_rgba(0,0,0,0.1)]
            "
          >
            <MenuItem label="Inicio" onClick={closeMenu} />
            <MenuItem label="Galeria" onClick={closeMenu} />
            <MenuItem label="Obras Destacadas" onClick={closeMenu} />
            <MenuItem label="Sobre la Artista" onClick={closeMenu} />
            <MenuItem label="Contacto" onClick={closeMenu} />
          </nav>
        </div>
      )}
    </>
  )
}

type MenuItemProps = {
  label: string
  onClick: () => void
}

function MenuItem({ label, onClick }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className="text-left text-[16px] py-1.5 font-sans text-foreground"
    >
      {label}
    </button>
  )
}

export default Header