import type { Metadata } from "next";
import { DesafioWrapper } from "@/components";

export const metadata: Metadata = {
    title: 'Desafio Verano',
    description: "Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.",
    keywords: ['Desafio Verano', 'gimnasio', 'Jockey GYM', 'jockey', 'tucuman', 'mejor', 'gym', 'ejercicio', 'salud'],
    openGraph: {
        title: 'Desafio Verano - Jockey GYM',
        description: 'Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.',
        url: 'https://jockeygym.com.ar/desafio-verano',
        siteName: 'Desafio Verano - Jockey GYM',
        locale: 'es_AR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        site: 'https://jockeygym.com.ar/desafio-verano',
        creator: 'Jockey GYM',
        title: 'Desafio Verano - Jockey GYM',
        description: 'Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.',
    },
};
  
export default function DesafioVeranoPage() {
    return (
        <main className="grow w-full min-h-lvh flex flex-col justify-center items-center bg-[rgb(23,23,23)] relative">
            <DesafioWrapper/>
        </main>
    );
}