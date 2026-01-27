import Hero from '@/components/Hero'
import About from '@/components/About'
import Frameworks from '@/components/Frameworks'
import Methodology from '@/components/Methodology'
import Features from '@/components/Features'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

// React Server Component — рендерится на сервере
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Frameworks />
      <Methodology />
      <Features />
      <ContactForm />
      <Footer />
    </main>
  )
}
