import Link from "next/link";
import '../styles/home.css'
import { Logo } from "@/components";
import Image from "next/image";
import app from "../assets/app.png";
import download_apple from "../assets/download_apple.png";
import download_playstore from "../assets/download_playstore.png";

export default function HomePage() {
  return (
    <main className="grow w-full">
      <section className="w-full min-h-svh flex flex-col justify-center items-center relative text-center">
        <div className="absolute top-0 left-0 w-full h-full -z-10 gradient__portada"></div>
        <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover -z-20">
          <source src="/assets/portada_home.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
        <div className="w-full xl:max-w-7xl px-4 xl:px-0 flex flex-col items-center justify-center relative">
          <h1 className="text-4xl text-white font-extrabold -top-24 absolute">JOCKEY GYM</h1>
          <span className="text-8xl text-white font-extrabold">NUNCA TE CONFORMES.</span>
          <h2 className="text-white text-4xl font-gotham">Descubrí el mejor gimnasio de Tucumán.</h2>
          <Link href="/" className="mt-8 flex justify-center items-center text-white text-2xl border-2 px-8 py-4 rounded-lg  hover:bg-[#FFFFFF50] transition-all duration-300 ease-in-out">Empeza a entrenar</Link>
        </div>
        <span className="absolute bottom-8 text-white text-sm font-gotham-black">No pares de entrenar.</span>
      </section>
      <section className="w-full min-h-svh flex flex-col justify-center items-center relative text-center">
        <div className="absolute top-0 left-0 w-full h-full -z-10 gradient__sedes bg-blend-multiply"></div>
        <div className="w-full xl:max-w-7xl	 px-4 xl:px-0">
          <h3 className="text-jockey text-3xl font-gotham-black">LA CADENA DE GIMNASIOS MAS GRANDES DE TUCUMÁN</h3>
          <span className="text-8xl text-white font-extrabold block">UNA SEDE JOCKEY CERCA TUYO</span>
          <span className="text-white text-2xl font-gotham block mt-8">Conocé nuestras sedes</span>
          <div className="w-full flex gap-4 items-stretch justify-center mt-4">
            <Link href="/sedes/centro" className="border-2 border-white text-2xl w-32 px-2 py-3 rounded-lg flex flex-col justify-center items-center hover:bg-[#FFFFFF50] transition-all duration-300 ease-in-out">
              <span className="block leading-none text-white sr-only">SEDE</span>
              <span className="block leading-none text-white">CENTRO</span>
            </Link>
            <Link href="/sedes/centro" className="border-2 border-white text-2xl w-32 px-2 py-2 rounded-lg flex flex-col justify-center items-center hover:bg-[#FFFFFF50] transition-all duration-300 ease-in-out">
              <span className="block leading-none text-white sr-only">SEDE</span>
              <span className="block leading-none text-white">PERÓN</span>
            </Link>
            <Link href="/sedes/centro" className="border-2 border-white text-2xl w-32 px-2 py-2 rounded-lg flex flex-col justify-center items-center hover:bg-[#FFFFFF50] transition-all duration-300 ease-in-out">
              <span className="block leading-none text-white sr-only">SEDE</span>
              <span className="block leading-none text-white">EL SOLAR</span>
            </Link>
            <Link href="/sedes/centro" className="border-2 border-white text-2xl w-32 px-2 py-2 rounded-lg flex flex-col justify-center items-center hover:bg-[#FFFFFF50] transition-all duration-300 ease-in-out">
              <span className="block leading-none text-white sr-only">SEDE</span>
              <span className="block leading-none text-white">CATALINAS</span>
            </Link>
            <Link href="/sedes/centro" className="border-2 border-white text-2xl w-32 px-2 py-2 rounded-lg flex flex-col justify-center items-center hover:bg-[#FFFFFF50] transition-all duration-300 ease-in-out">
              <span className="block leading-none text-white sr-only">SEDE</span>
              <span className="block leading-none text-white">LULES</span>
            </Link>
            <Link href="/sedes/centro" className="border-2 border-white text-2xl w-32 px-2 py-2 rounded-lg flex flex-col justify-center items-center hover:bg-[#FFFFFF50] transition-all duration-300 ease-in-out">
              <span className="block leading-none text-white sr-only">SEDE</span>
              <span className="block leading-none text-white">DISTRITO</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full min-h-svh flex flex-col lg:flex-row justify-center items-stretch relative overflow-hidden">
        <Logo className="w-screen opacity-30 absolute -translate-y-1/2 -translate-x-2/3 " pathClassName="fill-zinc-300" />
        <Logo className="w-screen opacity-30 absolute -translate-y-1/3 translate-x-1/2 " pathClassName="fill-zinc-300" />
        <Logo className="w-screen opacity-30 absolute translate-y-1/3 -translate-x-1/2 " pathClassName="fill-zinc-300" />
        <div className="w-[768px] relative z-10 flex flex-col justify-center items-start">
          <div className="bg-jockey w-full rounded-e-3xl px-6 py-12 shadow-xl">
            <h4 className="text-white text-[4vw] leading-none flex flex-col justify-start items-start"><span>ENTRENÁ DONDE QUIERAS,</span> <span>CUANDO QUIERAS</span></h4>
            <p className="font-gotham opacity-75 mt-2 pr-12">Accedé a la app que creamos para que puedas vivir la experiencia Jockey desde donde estés. Los mejores entrenadores, clases exclusivas y la energía de siempre para poder seguir transformando tu vida y a tu medida.</p>
          </div>
          <div className="w-full flex gap-4 justify-start items-center px-4 mt-4">
            <Link href="https://play.google.com/store/apps/details?id=com.Intelinova.TgApp&hl=es">
              <Image src={download_playstore} className="h-14 w-auto" alt='Descarga nuestra app en Google Playstore'/> 
            </Link>
            <Link href="https://apps.apple.com/es/app/trainingym/id598249672">
              <Image src={download_apple} className="h-14 w-auto" alt='Descarga nuestra app en iOS App Store'/> 
            </Link>
          </div>
        </div>
        <div className="w-3/5 relative z-10 flex justify-center items-center">
          <Image src={app} className="w-4/6 aspect-square object-contain" alt="Jockey GYM APP"/>
        </div>
      </section>
    </main>
  );
}