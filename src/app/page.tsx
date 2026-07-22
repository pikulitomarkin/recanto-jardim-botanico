import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import MoradiaCompartilhada from '@/components/sections/MoradiaCompartilhada'
import Diferenciais from '@/components/sections/Diferenciais'
import Quartos from '@/components/sections/Quartos'
import Estrutura from '@/components/sections/Estrutura'
import ComoFunciona from '@/components/sections/ComoFunciona'
import FAQ from '@/components/sections/FAQ'
import Localizacao from '@/components/sections/Localizacao'
import Contato from '@/components/sections/Contato'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <MoradiaCompartilhada />
      <Diferenciais />
      <Quartos />
      <Estrutura />
      <ComoFunciona />
      <FAQ />
      <Localizacao />
      <Contato />
      <Footer />
    </main>
  )
}
