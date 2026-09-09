import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Script from 'next/script'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Recanto Jardim Botânico — Qualidade que Acolhe | Moradia Compartilhada em Curitiba',
  description:
    'Moradia Compartilhada UNISSEX no Jardim Botânico, Curitiba. Quartos individuais mobiliados a partir de R$ 1.100,00/mês com água, luz, gás e internet inclusos. Sem caução. Agende sua visita!',
  keywords:
    'quarto para alugar Curitiba, quarto individual Curitiba, moradia compartilhada Curitiba, quarto para trabalhador Curitiba, quarto para estudante Curitiba, aluguel de quarto Jardim Botânico Curitiba, quarto mobiliado Curitiba, Recanto Jardim Botânico',
  icons: {
    icon: '/logo.png?v=2',
    shortcut: '/logo.png?v=2',
    apple: '/logo.png?v=2',
  },
  verification: {
    google: 'google-site-verification-placeholder-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <head>
        {/* Google Ads (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18441175059"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18441175059');
          `}
        </Script>
      </head>
      <body className="font-poppins antialiased">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
