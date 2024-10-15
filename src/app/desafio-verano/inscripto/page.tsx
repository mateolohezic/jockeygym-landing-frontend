import { Metadata } from 'next';
import portada from '../../../assets/desafio/gracias.webp'
import styles from '../../../styles/desafio-inscripto.module.css'
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Gracias por inscribirte',
    description: "Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.",
    keywords: ['desafio', 'verano', 'gimnasio', 'Jockey GYM', 'jockey', 'tucuman', 'mejor', 'gym', 'ejercicio', 'salud'],
    openGraph: {
        title: 'Gracias por inscribirte - Jockey GYM',
        description: "Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.",
        url: 'https://jockeygym.com.ar/desafio-verano/inscripto',
        siteName: 'Gracias por inscribirte - Jockey GYM',
        locale: 'es_AR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        site: 'https://jockeygym.com.ar/desafio-verano/inscripto',
        creator: 'Jockey GYM',
        title: 'Gracias por inscribirte - Jockey GYM',
        description: "Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.",
    },
};

export default function InscriptoDesafioVeranoPage() {
    return (
        <main className="w-full lg:min-h-lvh flex flex-col justify-center items-center bg-[rgb(23,23,23)]">
            <h1 className="sr-only">Gracias por inscribirte al Desafio Verano JOCKEY GYM</h1>
            <section className="flex flex-col lg:flex-row-reverse justify-start items-start w-full lg:min-h-lvh">
                <div className='w-full lg:w-[70%] aspect-[5/6] sm:aspect-video lg:aspect-auto lg:min-h-lvh relative'>
                    <div className={`bg-[#00000049] size-full absolute top-0 left-0 z-20 ${styles.clip__diagonal}`}></div>
                    <img src={portada.src} alt='Gracias por inscribirte a nuestro desafio verano' className={`${styles.clip__diagonal} size-full object-cover absolute top-0 left-0 z-10`}/>
                </div>
                <div className='w-full lg:w-[30%] lg:min-h-lvh px-4 lg:px-8 flex flex-col justify-center items-center pt-8 pb-12 lg:py-24 relative'>
                    <h2 className='w-full text-center text-white text-3xl lg:text-4xl'>¡Ya reservaste tu lugar!</h2>
                    <p className='mt-4 lg:mt-2 w-full text-center text-white text-xl lg:text-3xl font-gotham'>Gracias por registrarte al Desafio Verano.</p>
                    <p className='mt-4 lg:mt-4 w-full text-center text-white text-base lg:text-3xl font-gotham'>Recibirás más información en tu correo.</p>
                    <p className='mt-4 lg:mt-4 w-full text-center text-white text-base lg:text-base font-gotham'>En caso de no encontrarlo, revisa tu casillero de SPAM o PROMOCIONES y muevelo a tu bandeja principal.</p>
                    <div className="mt-8 w-full text-center flex justify-center items-center">
                        <Link href={'/desafio-verano'} className="bg-white w-full py-3 lg:py-4 px-4 lg:px-8 rounded-lg text-xl lg:text-2xl font-gotham-black">
                            Volver al inicio
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}