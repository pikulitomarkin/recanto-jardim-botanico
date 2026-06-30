import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import Quartos from '@/components/sections/Quartos'
import Estrutura from '@/components/sections/Estrutura'
import Valores from '@/components/sections/Valores'
import ComoFunciona from '@/components/sections/ComoFunciona'
import Regras from '@/components/sections/Regras'
import FAQ from '@/components/sections/FAQ'
import Contato from '@/components/sections/Contato'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Quartos />
      <Estrutura />
      <Valores />
      <ComoFunciona />
      <Regras />
      <FAQ />
      <Contato />
      <Footer />
    </main>
  )
}
