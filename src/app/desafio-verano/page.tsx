import type { Metadata } from "next";
import styles from '../../styles/desafio-verano.module.css';
import desafio_1 from '../../assets/desafio/desafio_portada.webp';
import desafio_2 from '../../assets/desafio/desafio_reserva.webp';
import desafio_3 from '../../assets/desafio/deasfio_banner.webp';
import { ContadorEvento, IframeFormButton } from "@/components";

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
        <main className="grow w-full min-h-lvh pt-20 lg:pt-0 flex flex-col justify-center items-center bg-[rgb(23,23,23)] relative">
            <section className="w-full aspect-video relative">
                <video
                    playsInline
                    autoPlay
                    muted
                    loop
                    controls={false}
                    className="absolute top-0 left-0 size-full object-contain pointer-events-none select-none"
                >
                    <source src="/assets/video_desafio_verano.mp4" type="video/mp4" />
                    Tu navegador no soporta videos.
                </video>
            </section>
            <img src={desafio_1.src} alt="Portada desafio verano Jockey Gym" className="mt-8 lg:mt-14 w-[calc(100%-2rem)] lg:w-full max-w-7xl object-contain"/>
            <div className="mt-10 lg:mt-12 w-full max-w-7xl px-4 xl:px-0 text-center grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4">
                <h2 className="flex flex-col text-center lg:text-start uppercase">
                    <span className="font-gotham text-white text-3xl lg:text-3xl leading-none">Podes perder</span>
                    <span className="text-white text-7xl lg:text-7xl leading-[1] tracking-wider">hasta 10kg</span>
                    <span className="text-white text-3xl lg:ext-5xl leading-[0.6]">antes de que termine el año</span>
                </h2>
                <div className="size-full flex flex-col justify-center lg:justify-end items-center lg:items-end">
                    <IframeFormButton
                        className="bg-white text-2xl lg:text-3xl py-3 lg:py-4 px-8 lg:px-8 rounded-full shadow-md"
                        label={'QUIERO RESERVAR MI LUGAR!'}
                        iframeSrc={'https://b24-gean63.bitrix24.site/crm_form_tc8ds/'}
                    />
                </div>
            </div>
            <div className="mt-12 lg:mt-24 w-full aspect-[1688/109] relative overflow-hidden group">
                <img src={desafio_2.src} alt="Unite a desafio verano Jockey Gym" className="size-full object-cover absolute top-0 left-0 group-hover:scale-105 transition-all duration-150 ease-in-out"/>
            </div>
            <div className="my-12 lg:my-24 w-full max-w-7xl px-4 xl:px-0">
                <div className={`w-full py-14 lg:py-12 px-4 bg-white flex flex-col justify-center items-center ${styles.clip__diagonal}`}>
                    <h2 className="w-full text-center uppercase"><span className="font-gotham text-lg lg:text-3xl leading-none">Programa de <b className="font-gotham-black block lg:inline">entrenamiento gratuito</b></span> <b className="block text-4xl lg:text-7xl tracking-wide">para cambiar tu vida</b></h2>
                    <ContadorEvento/>
                    <div className="mt-10 lg:mt-12 w-full flex justify-center">
                        <IframeFormButton
                            className="w-full lg:w-fit bg-[rgb(23,23,23)] text-white text-xl lg:text-3xl py-2 lg:py-4 px-4 lg:px-8 rounded-full shadow-md"
                            label={'QUIERO ENTRAR!'}
                            iframeSrc={'https://b24-gean63.bitrix24.site/crm_form_tc8ds/'}
                        />
                    </div>
                </div>
            </div>
            <p className="w-full text-center font-gotham text-white text-2xl lg:text-3xl uppercase tracking-tighter">Unite y empeza el <b className="font-gotham-black text-white block lg:inline">cambio de vida</b> que mereces</p>
            <img src={desafio_3.src} alt="Desafio verano Jockey Gym" className="mt-12 lg:mt-24 w-[calc(100%-2rem)] lg:w-full max-w-7xl object-contain"/>
            <div className="my-12 lg:my-24 w-full max-w-7xl px-4 xl:px-0 flex flex-col">
                <p className="w-full text-center lg:text-start font-gotham text-white text-xl lg:text-3xl uppercase tracking-tighter">Este programa es <b className="font-gotham-black text-white">para vos</b> si:</p>
                <ul className="mt-4 font-gotham text-sm lg:text-lg tracking-tighter flex flex-col gap-2">
                    <li className=" flex items-center gap-1.5">
                        <span className="size-3 lg:size-5 rounded-full border border-white inline-flex justify-center items-center shrink-0"><span className="inline-block size-1.5 lg:size-3 bg-white rounded-full"></span></span>
                        <span className="text-white">Volviste hace poco al GYM para <b className="font-gotham-black text-white">"llegar al verano".</b></span>
                    </li>
                    <li className=" text-white flex items-center gap-1.5">
                        <span className="size-3 lg:size-5 rounded-full border border-white inline-flex justify-center items-center shrink-0"><span className="inline-block size-1.5 lg:size-3 bg-white rounded-full"></span></span>
                        <span className="text-white">Venís entrenando hace rato y <b className="font-gotham-black text-white">no ves cambios.</b></span>
                    </li>
                    <li className=" text-white flex items-center gap-1.5">
                        <span className="size-3 lg:size-5 rounded-full border border-white inline-flex justify-center items-center shrink-0"><span className="inline-block size-1.5 lg:size-3 bg-white rounded-full"></span></span>
                        <span className="text-white">Entrenas solo/a en el GYM y <b className="font-gotham-black text-white">te cuesta encontrar motivación.</b></span>
                    </li>
                    <li className=" text-white flex items-center gap-1.5">
                        <span className="size-3 lg:size-5 rounded-full border border-white inline-flex justify-center items-center shrink-0"><span className="inline-block size-1.5 lg:size-3 bg-white rounded-full"></span></span>
                        <span className="text-white">Tenes <b className="font-gotham-black text-white">horarios flexibles</b> y preferís entrenar sin depender de los horarios de un entrenador.</span>
                    </li>
                    <li className=" text-white flex items-center gap-1.5">
                        <span className="size-3 lg:size-5 rounded-full border border-white inline-flex justify-center items-center shrink-0"><span className="inline-block size-1.5 lg:size-3 bg-white rounded-full"></span></span>
                        <span className="text-white">Buscás una planificación mensual que <b className="font-gotham-black text-white">te mantenga enfocado/a y comprometido/a.</b></span>
                    </li>
                </ul>
            </div>
        </main>
    );
}