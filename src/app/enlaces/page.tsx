import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa6";
import type { Metadata } from "next";
import Link from "next/link";
import logo from '../../assets/barras_blanco.webp'

export const metadata: Metadata = {
  title: 'Enlaces',
  description: "Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.",
  keywords: ['enlaces', 'gimnasio', 'Jockey GYM', 'jockey', 'tucuman', 'mejor', 'gym', 'ejercicio', 'salud'],
  openGraph: {
    title: 'Enlaces - Jockey GYM',
    description: 'Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.',
    url: 'https://jockeygym.com.ar/enlaces',
    siteName: 'Enlaces - Jockey GYM',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://jockeygym.com.ar/enlaces',
    creator: 'Jockey GYM',
    title: 'Enlaces - Jockey GYM',
    description: 'Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.',
  },
};

export default function EnlacesPage() {
    return (
        <main className="grow w-full">
            <section className="w-full min-h-lvh flex flex-col justify-center items-center bg-gradient-to-b from-jockey from-25% to-white to-[125%] relative">
                <img src={logo.src} alt='Jockey GYM Logo' className="w-5/6 lg:w-auto lg:h-full object-contain absolute left-0 right-0 mx-auto opacity-15"/>
                <h1 className="sr-only">Enlaces relevantes Jockey GYM</h1>
                <h2 className="text-5xl lg:text-5xl text-white">Jockey GYM</h2>
                <p className="w-full mt-2 text-center font-gotham text-lg lg:text-2xl text-white">Bienvenido a tu <b className="text-white font-gotham-black">segunda casa</b></p>
                <div className="mt-4 lg:mt-8 w-full max-w-xs font-gotham-black flex flex-col justify-center items-center gap-4 text-center relative z-30">
                    <Link href='/precios' className="block text-lg lg:text-xl text-jockey w-full py-4 px-4 bg-white rounded-3xl hover:scale-105 drop-shadow-md transition-all duration-300 ease-in-out">Ver precios</Link>
                    <Link href='https://b24-vu4prj.bitrix24.site/crm_form_dcuvx/' className="block text-lg lg:text-xl text-jockey w-full py-4 px-4 bg-white rounded-3xl hover:scale-105 drop-shadow-md transition-all duration-300 ease-in-out">Llamada gratuita con un experto</Link>
                    <Link href='/webinar/inscripcion' className="block text-lg lg:text-xl text-jockey w-full py-4 px-4 bg-white rounded-3xl hover:scale-105 drop-shadow-md transition-all duration-300 ease-in-out">Webinar gratuito:<span className="block text-jockey">3 claves para desbloquear tu potencial</span></Link>
                </div>
                <div className="mt-6 lg:mt-8 w-full flex justify-center items-center gap-4 relative z-30">
                    <Link href='https://www.instagram.com/jockeygymok/' target="_blank" className="text-xl bg-white w-10 h-10 aspect-square rounded-full flex justify-center items-center hover:scale-110 drop-shadow-md transition-all duration-300 ease-in-out">
                        <FaInstagram className="fill-jockey"/>
                    </Link>
                    <Link href='https://www.youtube.com/@JockeyGymOficial' target="_blank" className="text-xl bg-white w-10 h-10 aspect-square rounded-full flex justify-center items-center hover:scale-110 drop-shadow-md transition-all duration-300 ease-in-out">
                        <FaYoutube className="fill-jockey"/>
                    </Link>
                    <Link href='https://www.tiktok.com/@jockeygym' target="_blank" className="text-xl bg-white w-10 h-10 aspect-square rounded-full flex justify-center items-center hover:scale-110 drop-shadow-md transition-all duration-300 ease-in-out">
                        <FaTiktok className="fill-jockey"/>
                    </Link>
                </div>
            </section>
        </main>
    );
}