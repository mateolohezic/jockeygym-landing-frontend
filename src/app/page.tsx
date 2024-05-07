import Link from "next/link";
import styles from '../styles/home.module.css'
import { Logo } from "@/components";
import app from "../assets/home/app.png";
import download_apple from "../assets/home/download_apple.png";
import download_playstore from "../assets/home/download_playstore.png";
import { Metadata } from "next";
import { FaCalendarPlus } from "react-icons/fa6";

export const metadata: Metadata = {
  title: 'Inicio - Jockey GYM',
  description: "Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.",
  keywords: ['gimnasio', 'Jockey GYM', 'jockey', 'tucuman', 'mejor', 'gym', 'ejercicio', 'salud'],
  openGraph: {
    title: 'Inicio - Jockey GYM',
    description: 'Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.',
    url: 'https://jockeygym.com.ar',
    siteName: 'Jockey GYM',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://jockeygym.com.ar',
    creator: 'Jockey GYM',
    title: 'Inicio - Jockey GYM',
    description: 'Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.',
  },
};

export default function HomePage() {
  return (
    <main className="grow w-full">
      <section className="w-full min-h-svh flex flex-col justify-center items-center relative text-center">
        <div className={`absolute top-0 left-0 w-full h-full z-0 ${styles.gradient__portada}`}></div>
        <video autoPlay muted loop controls={false} className="absolute top-0 left-0 w-full h-full object-cover -z-50">
          <source src="/assets/portada_home.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
        <div className="w-full xl:max-w-7xl px-4 xl:px-0 flex flex-col items-center justify-center relative z-10" data-aos="fade-down" data-aos-duration="300" data-aos-easing="ease-in-out">
          <h1 className="text-2xl lg:text-4xl text-white lg:font-extrabold -top-24 absolute">JOCKEY GYM</h1>
          <span className="text-7xl lg:text-8xl text-white lg:font-extrabold">NUNCA TE CONFORMES.</span>
          <h2 className="text-white text-base lg:text-4xl font-gotham">Descubrí el mejor gimnasio de Tucumán.</h2>
          <Link href="/" className="mt-8 flex justify-center items-center text-white text-xl lg:text-2xl border-2 px-4 lg:px-8 py-2 lg:py-4 rounded-lg  hover:bg-[#FFFFFF50] transition-all duration-300 ease-in-out">Empeza a entrenar</Link>
        </div>
        <span className="absolute bottom-8 text-white text-sm font-gotham-black">No pares de entrenar.</span>
      </section>
      <section className="bg-black py-24 flex justify-center items-center">
        <div className="w-full max-w-7xl flex flex-col justify-center items-center">
          <h2 className='w-full text-center text-jockey text-4xl'>WEBINAR GRATUITO</h2>
          <h3 className='mt-2 w-full text-center text-3xl font-gotham-black text-white'>3 claves para desbloquear tu potencial y cambiar tu vida para siempre.</h3>
          <span className='mt-4 mb-8 w-full font-gotham-black text-jockey flex justify-center items-center gap-2'><FaCalendarPlus className='fill-jockey inline relative -top-[2px]'/> JUEVES 9 DE MAYO</span>
          <p className="text-white text-xl font-gotham">Inscribite ahora a nuestro webinar gratuito para </p>
          <div className="mt-8 w-full text-center">
              <Link href='/webinar/inscripcion.html' className="block bg-jockey w-full py-2 px-8 rounded-lg text-white text-3xl hover:bg-jockey-light hover:scale-[1.025] transition-all duration-300 ease-in-out">
                  Inscribirme ahora
              </Link>
          </div>
        </div>
      </section>
      <section className="w-full min-h-svh flex flex-col justify-center items-center relative text-center pt-8 pb-24">
        <div className={`absolute top-0 left-0 w-full h-full -z-10 ${styles.gradient__sedes} bg-blend-multiply`}></div>
        <div className="w-full xl:max-w-7xl	px-4 xl:px-0">
          <h3 className="text-jockey text-xs lg:text-3xl font-gotham-black">LA CADENA DE GIMNASIOS MAS GRANDES DE TUCUMÁN</h3>
          <span className="mt-1 lg:mt-2 text-4xl lg:text-8xl text-white font-extrabold block">UNA SEDE JOCKEY <span className="text-white block lg:inline">CERCA TUYO</span></span>
          <span className="text-white text-base lg:text-2xl font-gotham block mt-4 lg:mt-8">Conocé nuestras sedes</span>
          <div className="w-full grid grid-cols-1 justify-items-center md:grid-cols-2 lg:flex gap-4 lg:items-stretch lg:justify-center mt-4">
            <Link href="/sedes/centro.html" className="md:justify-self-end border-2 border-white text-3xl lg:text-2xl w-4/5 lg:w-32 h-14 lg:h-12 rounded-lg flex flex-col justify-center items-center bg-[#FFFFFF25] lg:bg-transparent hover:bg-[#FFFFFF50] transition-all duration-300 ease-in-out">
              <span className="block leading-none text-white sr-only">SEDE</span>
              <span className="block leading-none text-white">CENTRO</span>
            </Link>
            <Link href="/sedes/peron.html" className="md:justify-self-start border-2 border-white text-3xl lg:text-2xl w-4/5 lg:w-32 h-14 lg:h-12 rounded-lg flex flex-col justify-center items-center bg-[#FFFFFF25] lg:bg-transparent hover:bg-[#FFFFFF50] transition-all duration-300 ease-in-out">
              <span className="block leading-none text-white sr-only">SEDE</span>
              <span className="block leading-none text-white">PERÓN</span>
            </Link>
            <Link href="/sedes/el-solar.html" className="md:justify-self-end border-2 border-white text-3xl lg:text-2xl w-4/5 lg:w-32 h-14 lg:h-12 rounded-lg flex flex-col justify-center items-center bg-[#FFFFFF25] lg:bg-transparent hover:bg-[#FFFFFF50] transition-all duration-300 ease-in-out">
              <span className="block leading-none text-white sr-only">SEDE</span>
              <span className="block leading-none text-white">EL SOLAR</span>
            </Link>
            <Link href="/sedes/catalinas.html" className="md:justify-self-start border-2 border-white text-3xl lg:text-2xl w-4/5 lg:w-32 h-14 lg:h-12 rounded-lg flex flex-col justify-center items-center bg-[#FFFFFF25] lg:bg-transparent hover:bg-[#FFFFFF50] transition-all duration-300 ease-in-out">
              <span className="block leading-none text-white sr-only">SEDE</span>
              <span className="block leading-none text-white">CATALINAS</span>
            </Link>
            <Link href="/sedes/distrito.html" className="md:justify-self-start border-2 border-white text-3xl lg:text-2xl w-4/5 lg:w-32 h-14 lg:h-12 rounded-lg flex flex-col justify-center items-center bg-[#FFFFFF25] lg:bg-transparent hover:bg-[#FFFFFF50] transition-all duration-300 ease-in-out">
              <span className="block leading-none text-white sr-only">SEDE</span>
              <span className="block leading-none text-white">DISTRITO</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full min-h-svh flex flex-col lg:flex-row justify-start md:justify-center items-stretch relative overflow-hidden">
        <Logo className="w-screen opacity-30 absolute translate-y-full md:-translate-y-1/2 translate-x-1/3 md:-translate-x-2/3 " pathClassName="fill-zinc-300" />
        <Logo className="w-screen opacity-30 absolute translate-y-[250%] md:-translate-y-1/3 -translate-x-1/2 md:translate-x-1/2 " pathClassName="fill-zinc-300" />
        <Logo className="w-screen opacity-30 absolute translate-y-1/3 -translate-x-1/2 " pathClassName="fill-zinc-300" />
        <div className="w-full md:w-[768px] relative z-10 flex flex-col justify-center items-start" id="downloadApp">
          <div className="bg-jockey w-full md:rounded-e-3xl px-4 md:px-6 py-12 shadow-xl">
            <h4 className="text-white text-4xl sm:text-7xl lg:text-6xl xl:text-7xl leading-none flex flex-col justify-start items-start"><span className="text-white">ENTRENÁ DONDE QUIERAS,</span> <span className="text-white">CUANDO QUIERAS</span></h4>
            <p className="font-gotham text-sm md:text-base opacity-75 mt-2 pr-12">Accedé a la app que creamos para que puedas vivir la experiencia Jockey desde donde estés. Los mejores entrenadores, clases exclusivas y la energía de siempre para poder seguir transformando tu vida y a tu medida.</p>
          </div>
          <div className="w-full flex gap-4 justify-center md:justify-start items-center px-4 mt-4">
            <Link href="https://play.google.com/store/apps/details?id=com.Intelinova.TgApp&hl=es">
              <img src={download_playstore.src} loading="lazy" className="h-14 w-auto" alt='Descarga nuestra app en Google Playstore'/>
            </Link>
            <Link href="https://apps.apple.com/es/app/trainingym/id598249672">
              <img src={download_apple.src} loading="lazy" className="h-14 w-auto" alt='Descarga nuestra app en iOS App Store'/> 
            </Link>
          </div>
        </div>
        <div className="w-full md:w-3/5 mt-8 relative z-10 grow md:grow-0 flex justify-center items-center" data-aos="fade-left" data-aos-duration="500" data-aos-anchor="#downloadApp" data-aos-easing="ease-in-out">
          <img src={app.src} loading="lazy" className="w-5/6 md:w-4/6 aspect-square object-contain" alt="Jockey GYM APP"/>
        </div>
      </section>
    </main>
  );
}