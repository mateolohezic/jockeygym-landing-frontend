import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Descubre las tres cosas que tienes que hacer en el gimnasio',
  description: "Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.",
  keywords: ['enlaces', 'gimnasio', 'Jockey GYM', 'jockey', 'tucuman', 'mejor', 'gym', 'ejercicio', 'salud'],
  openGraph: {
    title: 'Descubre las tres cosas que tienes que hacer en el gimnasio - Jockey GYM',
    description: 'Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.',
    url: 'https://jockeygym.com.ar/descubre-las-tres-cosas-que-tienes-que-hacer-en-el-gimnasio',
    siteName: 'Descubre las tres cosas que tienes que hacer en el gimnasio - Jockey GYM',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://jockeygym.com.ar/descubre-las-tres-cosas-que-tienes-que-hacer-en-el-gimnasio',
    creator: 'Jockey GYM',
    title: 'Descubre las tres cosas que tienes que hacer en el gimnasio - Jockey GYM',
    description: 'Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.',
  },
};

export default function FormularioExternoPage() {
  return (
    <main className="w-full grow min-h-svh relative">
        <h1 className="sr-only">Descubre las tres cosas que tienes que hacer en el gimnasio</h1>
        <iframe
            className="size-full absolute top-0 left-0"
            src="https://form.typeform.com/to/FKgW6KPP?typeform-source=jockey-gym.bitrix24.es"
            frameBorder="0"
        ></iframe>
    </main>
  );
}