import type { Metadata, Viewport } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import { AOSProvider, Footer, HeaderWebinar, Navbar, TawkTo } from "@/components";

const bebasNeue = Bebas_Neue({ weight:'400', style:'normal', preload: true, subsets: ['latin']});

export const metadata: Metadata = {
  title:{
    template: '%s - Jockey GYM',
    default: 'Jockey GYM',
  },
  description: "Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.",
  generator: 'Jockey GYM',
  applicationName: 'Jockey GYM',
  referrer: 'origin-when-cross-origin',
  keywords: ['emprendedores', 'Jockey GYM'],
  authors: [{ name: 'Jockey GYM', url: 'https://jockeygym.com.ar' }],
  creator: 'Jockey GYM',
  publisher: 'Jockey GYM',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://jockeygym.com.ar'),
  alternates: {
    canonical: '/',
    languages: {
      'x-default': '/',
    },
  },
  openGraph: {
    title: 'Jockey GYM',
    description: 'Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.',
    url: 'https://jockeygym.com.ar',
    siteName: 'Jockey GYM',
    locale: 'es_AR',
    type: 'website',
  },
  robots: { 
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: 'https://jockeygym.com.ar/manifest.json',
  twitter: {
    card: 'summary_large_image',
    site: 'https://jockeygym.com.ar',
    creator: 'Jockey GYM',
    title: 'Jockey GYM',
    description: 'Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.',
  },
  appleWebApp: {
    title: 'Jockey GYM',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/src/app/apple-icon.png',
      {
        url: '/src/app/apple-icon.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
  category: 'health',
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  colorScheme: 'normal',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  interactiveWidget: 'resizes-visual',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`w-full min-h-svh flex flex-col items-center justify-between ${bebasNeue.className}`}>
        <Navbar/>
        <HeaderWebinar/>
        {children}
        <Footer/>
        <AOSProvider/>
        <TawkTo/>
      </body>
    </html>
  );
}