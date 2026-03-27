import GalleryNav from '../components/GalleryNav'
import GallerySection from '../components/GallerySection'
import HeroSection from '../components/HeroSection'
import IntroSection from '../components/IntroSection'
import FeaturedSection from '../components/FeaturedSection'
import AlternatingSection from '../components/AlternatingSection'
import GalleryFooter from '../components/GalleryFooter'

function Home() {
  return (
    <>
      <GalleryNav />

      <main>
      <h1 className="text-red-500 text-5xl bg-yellow-200">
        Test Tailwind
      </h1>

        <HeroSection />
        <IntroSection />
        <FeaturedSection />
        <AlternatingSection />
        <GallerySection />
      </main>

      <GalleryFooter />
    </>
  )
}

export default Home