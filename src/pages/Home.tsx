import GalleryNav from '../components/GalleryNav'
import GallerySection from '../components/GallerySection'
import HeroSection from '../components/HeroSection'
import IntroSection from '../components/IntroSection'

function Home() {
  return (
    <>
      <GalleryNav />

      <main>
        <HeroSection />
        <IntroSection />
        <GallerySection />
      </main>
    </>
  )
}

export default Home