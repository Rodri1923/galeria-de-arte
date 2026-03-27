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