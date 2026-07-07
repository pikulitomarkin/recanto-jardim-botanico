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
  title: 'Recanto Jardim Botânico — Moradia Compartilhada em Curitiba',
  description: 'Moradia compartilhada para trabalhadores e estudantes no Jardim Botânico, Curitiba. Quartos individuais mobiliados a partir de R$1.100/mês com água, luz e internet inclusos. Agende sua visita!',
  keywords: 'quarto para alugar Curitiba, quarto individual Curitiba, moradia compartilhada Curitiba, quarto para trabalhador Curitiba, quarto para estudante Curitiba, aluguel de quarto Jardim Botânico Curitiba, quarto mobiliado Curitiba, moradia compartilhada Jardim Botânico Curitiba',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
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
        {/* Google Analytics (gtag.js) Placeholder */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TRACKING-ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TRACKING-ID');
          `}
        </Script>

        {/* Meta Pixel Placeholder */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'PIXEL-ID-PLACEHOLDER');
            fbq('track', 'PageView');
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
