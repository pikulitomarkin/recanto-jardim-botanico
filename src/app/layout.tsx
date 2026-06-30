import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Recanto Jardim Botânico — Quartos para Alugar em Brasília',
  description: 'Quartos confortáveis próximos ao Jardim Botânico de Brasília. A partir de R$1.100/mês com água, luz e internet inclusos.',
  keywords: 'quarto aluguel brasília, jardim botânico, república, pensionato',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body className="font-poppins antialiased">{children}</body>
    </html>
  )
}
