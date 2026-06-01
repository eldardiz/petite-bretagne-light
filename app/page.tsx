import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import PhilosophySection from '@/components/sections/PhilosophySection'
import MenuShowcaseSection from '@/components/sections/MenuShowcaseSection'
import LocationShowcaseSection from '@/components/sections/LocationShowcaseSection'
import InfiniteScrollBanner from '@/components/sections/InfiniteScrollBanner'
import FeaturedOfferingSection from '@/components/sections/FeaturedOfferingSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import InstagramSection from '@/components/sections/InstagramSection'
import ContactSection from '@/components/sections/ContactSection'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <main className="page">
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <MenuShowcaseSection />
      <LocationShowcaseSection />
      <InfiniteScrollBanner />
      <FeaturedOfferingSection />
      <TestimonialsSection />
      <InstagramSection />
      <ContactSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
