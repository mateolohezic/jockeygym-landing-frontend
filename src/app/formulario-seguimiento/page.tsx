import { BitrixSeguimiento } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Formulario de seguimiento',
    description: "Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.",
    keywords: ['Formulario de seguimiento', 'gimnasio', 'Jockey GYM', 'jockey', 'tucuman', 'mejor', 'gym', 'ejercicio', 'salud'],
    openGraph: {
        title: 'Formulario de seguimiento - Jockey GYM',
        description: 'Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.',
        url: 'https://jockeygym.com.ar/formulario-seguimiento',
        siteName: 'Formulario de seguimiento - Jockey GYM',
        locale: 'es_AR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        site: 'https://jockeygym.com.ar/formulario-seguimiento',
        creator: 'Jockey GYM',
        title: 'Formulario de seguimiento - Jockey GYM',
        description: 'Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.',
    },
};

export default function FormularioSeguimientoPage() {
  return (
    <main className="grow w-full flex flex-col justify-center items-center bg-[#0F0F0F]">
        <section className="w-full min-h-lvh flex flex-col justify-center items-center px-4 text-center">
            <h1 className="sr-only">Formulario de Seguimiento</h1>
            <h2 className="w-full text-jockey text-4xl font-extrabold">JOCKEY GYM</h2>
            <p className="mt-2 w-full text-white text-2xl font-gotham-black">Completa el formulario a continuación para poder conocerte mejor.</p>
            <BitrixSeguimiento formId='123' formVersion='v8dvtr' />
        </section>
    </main>
  );
}