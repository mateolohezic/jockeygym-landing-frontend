import { AgendarCalendario, ContadorWebinar } from '@/components';
import portada from '../../../assets/webinar/portada.jpeg'

export default function InscriptoWebinarPage() {
    return (
        <main className="w-full min-h-lvh flex flex-col justify-center items-center">
            <h1 className="sr-only">Gracias por inscribirte a nuestro Webinar gratuito</h1>
            <section className="flex justify-start items-start w-full min-h-lvh">
                <div className='w-1/2 min-h-lvh relative'>
                    <div className='bg-[#00000049] size-full absolute top-0 left-0 z-20'></div>
                    <img src={portada.src} alt='Webinar gratuito' className='size-full object-cover absolute top-0 left-0 z-10'/>
                </div>
                <div className='w-1/2 min-h-lvh px-8 flex flex-col justify-center items-center py-24 relative'>
                    <h2 className='w-full text-center text-jockey text-4xl'>¡Ya reservaste tu lugar!</h2>
                    <h3 className='mt-2 w-full text-center text-3xl font-gotham-black'>Gracias por registrarte para participar en nuestro Webinar en vivo el <b className='text-jockey'>3 de mayo 2024</b>.</h3>
                    <AgendarCalendario />
                    <ContadorWebinar />
                </div>
            </section>
        </main>
    );
}