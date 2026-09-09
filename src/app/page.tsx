import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import MoradiaCompartilhada from '@/components/sections/MoradiaCompartilhada'
import Localizacao from '@/components/sections/Localizacao'
import Diferenciais from '@/components/sections/Diferenciais'
import Quartos from '@/components/sections/Quartos'
import Estrutura from '@/components/sections/Estrutura'
import ComoFunciona from '@/components/sections/ComoFunciona'
import Condicoes from '@/components/sections/Condicoes'
import Regras from '@/components/sections/Regras'
import FAQ from '@/components/sections/FAQ'
import Contato from '@/components/sections/Contato'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      {/* Moradia Compartilhada: opcional — só aparece ao clicar no link do hero */}
      <MoradiaCompartilhada />
      <Localizacao />
      <Diferenciais />
      <Quartos />
      <Estrutura />
      <ComoFunciona />
      <Condicoes />
      <Regras />
      <FAQ />
      <Contato />
      <Footer />
    </main>
  )
}
