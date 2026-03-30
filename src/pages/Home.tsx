import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import GallerySection from "@/components/GallerySection";
import FeaturedSection from "@/components/FeaturedSection";
import AlternatingSection from "@/components/AlternatingSection";
import GalleryFooter from "@/components/GalleryFooter";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <HeroSection />
        <IntroSection />
        <GallerySection />
        <FeaturedSection />
        <AlternatingSection />
      </main>

      <GalleryFooter />
    </div>
  );
};

export default Home;