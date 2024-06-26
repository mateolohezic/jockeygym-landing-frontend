import { AgendarCalendario, ContadorWebinar } from '@/components';
import portada from '../../../assets/webinar/portada_webinar_inscripto.webp'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gracias por inscribirte',
    description: "3 claves para desbloquear tu potencial y cambiar tu vida para siempre.",
    keywords: ['webinar', 'curso', 'gimnasio', 'Jockey GYM', 'jockey', 'tucuman', 'mejor', 'gym', 'ejercicio', 'salud'],
    openGraph: {
        title: 'Gracias por inscribirte - Jockey GYM',
        description: '3 claves para desbloquear tu potencial y cambiar tu vida para siempre.',
        url: 'https://jockeygym.com.ar/webinar/inscripto',
        siteName: 'Gracias por inscribirte - Jockey GYM',
        locale: 'es_AR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        site: 'https://jockeygym.com.ar/webinar/inscripto',
        creator: 'Jockey GYM',
        title: 'Gracias por inscribirte - Jockey GYM',
        description: '3 claves para desbloquear tu potencial y cambiar tu vida para siempre.',
    },
};

export default function InscriptoWebinarPage() {
    return (
        <main className="w-full lg:min-h-lvh flex flex-col justify-center items-center">
            <h1 className="sr-only">Gracias por inscribirte a nuestro Webinar gratuito</h1>
            <section className="flex flex-col lg:flex-row justify-start items-start w-full lg:min-h-lvh">
                <div className='w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto lg:min-h-lvh relative'>
                    <div className='bg-[#00000049] size-full absolute top-0 left-0 z-20'></div>
                    <img src={portada.src} alt='Webinar gratuito' className='size-full object-cover absolute top-0 left-0 z-10'/>
                </div>
                <div className='w-full lg:w-1/2 lg:min-h-lvh px-4 lg:px-8 flex flex-col justify-center items-center py-12 lg:py-24 relative'>
                    <h2 className='w-full text-center text-jockey text-3xl lg:text-4xl'>¡Ya reservaste tu lugar!</h2>
                    <h3 className='mt-4 lg:mt-2 w-full text-center text-xl lg:text-3xl font-gotham-black'>Gracias por registrarte para participar en nuestro Webinar en vivo el <b className='text-jockey'>14 de mayo 2024</b>.</h3>
                    <AgendarCalendario />
                    <ContadorWebinar />
                </div>
            </section>
        </main>
    );
}