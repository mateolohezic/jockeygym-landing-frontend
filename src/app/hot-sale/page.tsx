import type { Metadata } from "next";
import Link from "next/link";
import styles from '../../styles/landing-hs.module.css'
import { SwiperFotos, SwiperPreguntas } from "@/components";
import { FaCircleCheck } from "react-icons/fa6";

export const metadata: Metadata = {
    title: 'Hot Sale',
    description: "Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.",
    keywords: ['Hot Sale', 'gimnasio', 'Jockey GYM', 'jockey', 'tucuman', 'mejor', 'gym', 'ejercicio', 'salud'],
    openGraph: {
        title: 'Hot Sale - Jockey GYM',
        description: 'Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.',
        url: 'https://jockeygym.com.ar/hot-sale',
        siteName: 'Hot Sale - Jockey GYM',
        locale: 'es_AR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        site: 'https://jockeygym.com.ar/hot-sale',
        creator: 'Jockey GYM',
        title: 'Hot Sale - Jockey GYM',
        description: 'Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.',
    },
};
  
export default function HotSalePage() {
    return (
        <main className="grow w-full flex flex-col justify-center items-center">
            <section className="w-full min-h-svh flex flex-col justify-center items-center relative text-center">
                <div className={`absolute top-0 left-0 w-full h-full z-0 ${styles.gradient__portada}`}></div>
                <video autoPlay muted loop controls={false} className="absolute top-0 left-0 w-full h-full object-cover -z-50">
                    <source src="/assets/portada_home.mp4" type="video/mp4" />
                    Tu navegador no soporta videos.
                </video>
                <div className="w-full max-w-7xl px-4 xl:px-0 flex flex-col items-center justify-center relative z-10" data-aos="fade-down" data-aos-duration="300" data-aos-easing="ease-in-out">
                    <h1 className="mb-8 w-full text-start text-2xl lg:text-3xl text-white lg:font-extrabold">Hot Sale JOCKEY GYM</h1>
                    <SwiperPreguntas/>
                    <Link href="/" className="mt-6 w-full px-4 lg:px-8 py-2 lg:py-4 flex justify-center items-center text-white text-xl lg:text-4xl border-2 rounded-3xl bg-[#FFFFFF26] hover:bg-[#FFFFFF60] transition-all duration-300 ease-in-out">Sí, quiero cambiar mi vida!</Link>
                </div>
            </section>
            <section className="w-full lg:min-h-screen flex flex-col lg:flex-row justify-between items-stretch">
                <div className="w-full max-w-7xl bg-white flex flex-col justify-start items-start py-12 lg:py-24 px-4 lg:px-6 relative" data-aos="fade-right" data-aos-delay='150' data-aos-duration="300" data-aos-easing="ease-in-out">
                    <h3 className="w-full text-4xl lg:text-7xl leading-none text-start flex flex-col">
                        <span className="text-jockey">PASE MULTISEDE,</span>
                        <span className="text-5xl">ACCESO A TODOS NUESTROS CLUBES.</span>
                    </h3>
                    <h3 className="w-full mt-2 text-4xl lg:text-7xl leading-none text-start flex flex-col">
                        <span className="text-jockey">TODOS LOS SERVICIOS,</span>
                        <span className="text-5xl">+ DE 500 CLASES SEMANALES Y 30 INSTRUCTORES DE SALÓN.</span>
                    </h3>
                    <h3 className="w-full mt-2 text-4xl lg:text-7xl leading-none text-start flex flex-col">
                        <span className="text-jockey">PLAN QUINCENAL PARA UN AMIGO,</span>
                        <span className="text-5xl">15 DÍAS COMPLETAMENTE GRATIS.</span>
                    </h3>
                    <ul className='w-full mt-4 text-center lg:text-start text-base lg:text-xl font-gotham flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6 lg:gap-2'>
                        <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-lg mr-0.5'/><span className='w-full'>12 sesiones de sauna.</span></li>
                        <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-lg mr-0.5'/><span className='w-full'>Reto de 6 semanas.</span></li>
                        <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-lg mr-0.5'/><span className='w-full'>Emails semanales.</span></li>
                        <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-lg mr-0.5'/><span className='w-full'>Plataforma de entrenamiento exclusiva "TRAININGGYM".</span></li>
                        <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-lg mr-0.5'/><span className='w-full'>Grupo de Telegram exclusiva "JG VIP".</span></li>
                        <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-lg mr-0.5'/><span className='w-full'>Extensión hasta 45 días por vacaciones.</span></li>
                    </ul>
                    <div className="mt-8 w-full flex justify-center text-center">
                        <Link href={'/'} className="w-full bg-jockey text-white text-3xl py-4 px-8 rounded-3xl font-gotham-black hover:drop-shadow-md hover:scale-[1.0125] transition-all duration-300 ease-in-out">Estoy listo para empezar</Link>
                    </div>
                </div>
                <div className="lg:grow relative">
                    <div className="lg:absolute size-full aspect-square lg:aspect-auto lg:top-0 lg:left-0">
                        <SwiperFotos/>
                    </div>
                </div>
            </section>
            <section className="w-full max-w-7xl flex flex-col justify-center items-center py-24 font-gotham">
                <p className="text-lg">Si queres ir más allá y progresar en <b className="text-jockey font-gotham-black">tiempo record</b> sin margen de error</p>
                <div className="w-fit relative">
                    <h2 className="w-full text-jocket text-6xl font-gotham-black drop-shadow-sm text-jockey">JOCKEY GYM ANUAL PLUS</h2>
                </div>
                <ul className='mt-8 w-full text-center lg:text-start text-lg lg:text-xl flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6 lg:gap-4'>
                    <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-2xl mr-1'/><span className='w-full'>Evaluación con un <b className="text-jockey">experto</b> para determinar tu punto de partida.</span></li>
                    <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-2xl mr-1'/><span className='w-full'>Determinación de <b className="text-jockey">objetivos 100% personalizados</b> con una rutina que se adapta a vos.</span></li>
                    <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-2xl mr-1'/><span className='w-full'><b className="text-jockey">Sesiones de entrenamiento</b> 2 o 3 veces por semana, en grupos de hasta 3 personas.</span></li>
                    <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-2xl mr-1'/><span className='w-full'>Guía nutricional hecha por nuestra nutricionista, para que aprendas a calcular tus requerimientos y <b className="text-jockey">comer de acuerdo a lo que necesitas.</b></span></li>
                    <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-2xl mr-1'/><span className='w-full'><b className="text-jockey font-gotham-black">Resultados 100% garantizados en tiempo record.</b></span></li>
                </ul>
                <Link href={'/'} className="mt-8 w-full bg-jockey rounded-3xl py-4 px-8 text-center text-xl text-white tracking-widest uppercase font-gotham-black hover:drop-shadow-md hover:scale-[1.025] transition-all duration-300 ease-in-out">Esto es justo lo que necesito</Link>
            </section>
            {/* <section className="w-full max-w-7xl flex flex-col justify-center items-center">
                <h2 className="w-full text-xl text-center">JOCKEY GYM HOT SALE</h2>
                <div className="mt-12 w-full grid grid-cols-3 gap-8">
                    <div className="w-full flex flex-col justify-center items-center py-12 px-6 bg-white drop-shadow-md rounded-3xl">
                        <h3>ANUAL VIP</h3>
                        <ul className='mt-8 w-full text-center lg:text-start text-base lg:text-lg font-gotham flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6 lg:gap-2'>
                            <li className='flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-2xl mr-1'/><span className='w-full lg:w-5/6'>Evaluación con un <b>experto</b> para determinar tu punto de partida.</span></li>
                            <li className='flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-2xl mr-1'/><span className='w-full lg:w-5/6'>Determinación de <b>objetivos 100% personalizados</b> con una rutina que se adapta a vos.</span></li>
                            <li className='flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-2xl mr-1'/><span className='w-full lg:w-5/6'><b>Sesiones de entrenamiento</b> 2 o 3 veces por semana, en grupos de hasta 3 personas.</span></li>
                            <li className='flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-2xl mr-1'/><span className='w-full lg:w-5/6'>Guía nutricional hecha por nuestra nutricionista, para que aprendas a calcular tus requerimientos y <b>comer de acuerdo a lo que necesitas.</b></span></li>
                            <li className='flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-2xl mr-1'/><span className='w-full lg:w-5/6'><b>Resultados 100% garantizados en tiempo record.</b></span></li>
                        </ul>
                        <div className="w-full flex flex-col justify-center items-center">
                            <p className="text-neutral-500 font-light text-lg">$500</p>
                            <p className="text-jockey font-gotham-black text-3xl">$250</p>
                        </div>
                    </div>
                </div>
            </section> */}
        </main>
    );
}