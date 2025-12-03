import { Toaster } from 'sonner'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { Products } from '@/components/Products'
import { TechnologyShowcase } from '@/components/TechnologyShowcase'
import { Specifications } from '@/components/Specifications'
import { Certifications } from '@/components/Certifications'
import { Gallery } from '@/components/Gallery'
import { Services } from '@/components/Services'
import { Testimonials } from '@/components/Testimonials'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background smooth-scroll power-grid-pattern">
      <Toaster position="top-right" richColors />
      <Header />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Products />
        <TechnologyShowcase />
        <Specifications />
        <Certifications />
        <Gallery />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App