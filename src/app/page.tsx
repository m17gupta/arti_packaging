import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Collections } from '@/components/sections/Collections'
import { FeaturedProducts } from '@/components/sections/FeaturedProducts'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Process } from '@/components/sections/Process'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Collections />
        <FeaturedProducts />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
