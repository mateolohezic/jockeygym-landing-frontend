import type { Metadata } from "next";
import Link from "next/link";
import styles from '../../styles/landing-hs.module.css'
import { ContadorEvento, IframeFormButton } from "@/components";
import { FaCircleCheck, FaPlus } from "react-icons/fa6";
import portada from '../../assets/desafio/desafio_verano_portada.webp'
import foto from '../../assets/desafio/desafio_verano.webp'

export const metadata: Metadata = {
    title: 'Desafio de Verano',
    description: "Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.",
    keywords: ['Desafio de Verano', 'gimnasio', 'Jockey GYM', 'jockey', 'tucuman', 'mejor', 'gym', 'ejercicio', 'salud'],
    openGraph: {
        title: 'Desafio de Verano - Jockey GYM',
        description: 'Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.',
        url: 'https://jockeygym.com.ar/desafio-de-verano',
        siteName: 'Desafio de Verano - Jockey GYM',
        locale: 'es_AR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        site: 'https://jockeygym.com.ar/desafio-de-verano',
        creator: 'Jockey GYM',
        title: 'Desafio de Verano - Jockey GYM',
        description: 'Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.',
    },
};
  
export default function DesafioVeranoPage() {
    return (
        <main className="grow w-full flex flex-col justify-center items-center">
            <section className="w-full min-h-lvh flex flex-col justify-center items-center relative text-center">
                <div className={`absolute top-0 left-0 w-full h-full -z-10 ${styles.gradient__portada}`}></div>
                <img src={portada.src} className="absolute top-0 left-0 w-full h-full object-cover -z-20" alt='Precios Jockey GYM'/>
                {/* <video playsInline autoPlay muted loop controls={false} className="absolute top-0 left-0 w-full h-full object-cover -z-50 pointer-events-none select-none">
                    <source src="/assets/portada_hot_sale.mp4" type="video/mp4" />
                    Tu navegador no soporta videos.
                </video> */}
                <div className="w-full max-w-7xl px-4 xl:px-0 text-center flex flex-col items-center justify-center relative">
                    <h1 className="w-full text-2xl lg:text-4xl text-white">Desafío de verano</h1>
                    <p className="mt-4 w-full text-5xl lg:text-8xl font-black text-white leading-none">Podes perder <span className="leading-[0.8] py-2 lg:py-4 px-2 lg:px-4 inline-flex justify-center items-center bg-jockey relative -top-1.5 z-0"><span className="text-white relative top-1 lg:top-1.5">hasta 10 kg</span></span> <span className="block"></span>antes de que termine el a<span className="relative z-10 text-white">ñ</span>o.</p>
                    <IframeFormButton
                        className="mt-6 bg-jockey w-full text-white text-2xl lg:text-4xl py-2 lg:py-4 px-4 lg:px-8 border-2 border-white rounded shadow-md"
                        label={'QUIERO RESERVAR MI LUGAR!'}
                        iframeSrc={'https://b24-gean63.bitrix24.site/crm_form_tc8ds/'}
                    />
                </div>
            </section>
            <section className="w-full max-w-7xl px-4 xl:px-0 flex flex-col justify-center items-center my-12 lg:my-24">
                <h2 className="text-4xl lg:text-6xl font-black text-center"><span className="block lg:inline">Programa de entrenamiento</span> gratuito para <b className="text-jockey block">cambiar tu vida</b></h2>
                <div className="mt-8">
                    <ContadorEvento />
                </div>
                <div className="mt-8 w-full md:w-auto">
                    <IframeFormButton
                        className="w-full md:w-auto px-4 lg:px-8 py-2 lg:py-4 flex justify-center items-center text-white text-2xl lg:text-4xl rounded bg-jockey"
                        label={'QUIERO ENTRAR!'}
                        iframeSrc={'https://b24-gean63.bitrix24.site/crm_form_tc8ds/'}
                    />
                </div>
            </section>
            <section className={`w-full flex justify-center items-center min-h-lvh relative px-4 xl:px-0 ${styles.portada__anual}`}>
                <div className={`absolute top-0 left-0 w-full h-full z-0 ${styles.gradient__anual}`}></div>
                <div className="w-full max-w-7xl my-24 p-6 flex flex-col justify-center items-center bg-white shadow-lg rounded relative z-10">
                    <p className="w-full text-center text-base lg:text-lg font-gotham">Unité y empeza el <b className="text-jockey font-gotham-black">cambio de vida</b> que mereces</p>
                    <div className="mt-4 lg:mt-0 w-fit relative font-gotham">
                        <h2 className="w-fit text-jockey text-center text-4xl lg:text-6xl font-gotham-black drop-shadow-sm relative">
                            DESAFIO DE VERANO
                        </h2>
                    </div>
                    <p className="mt-4 lg:mt-8 w-full text-center lg:text-start font-gotham">Es para vos si:</p>
                    <ul className='mt-2 w-full font-gotham text-center lg:text-start text-base lg:text-xl flex flex-col justify-center lg:justify-start items-center lg:items-start gap-2 lg:gap-4'>
                        <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block lg:text-2xl lg:mr-1'/><span className='w-full'>Volviste hace poco al GYM para <b className="text-jockey">&ldquo;llegar al verano&rdquo;</b>.</span></li>
                        <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block lg:text-2xl lg:mr-1'/><span className='w-full'>Venis entrenando hace rato y <b className="text-jockey">no ves cambios</b>.</span></li>
                        <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block lg:text-2xl lg:mr-1'/><span className='w-full'>Entrenas solo/a en el GYM y <b className="text-jockey">te cuesta encontrar motivación</b>.</span></li>
                        <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block lg:text-2xl lg:mr-1'/><span className='w-full'>Tenes <b className="text-jockey">horarios flexibles</b> y preferis <b className="text-jockey">entrenar sin depender de los horarios de un entrenador</b>.</span></li>
                        <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block lg:text-2xl lg:mr-1'/><span className='w-full'>Buscás una planificación mensual que <b className="text-jockey font-gotham-black">te mantenga enfocado/a y comprometido/a</b>.</span></li>
                    </ul>
                    <IframeFormButton
                        className="mt-8 w-full bg-jockey rounded py-2 lg:py-4 px-4 lg:px-8 text-center text-2xl lg:text-4xl text-white"
                        label={'ESTO ES JUSTO LO QUE NECESITO!'}
                        iframeSrc={'https://b24-gean63.bitrix24.site/crm_form_tc8ds/'}
                    />
                </div>
            </section>
            <section className="w-full lg:min-h-screen flex flex-col lg:flex-row justify-between items-stretch bg-black">
                <div className="w-full max-w-7xl bg-black flex flex-col justify-center lg:justify-start items-center lg:items-start py-12 lg:py-24 px-4 lg:px-6 relative">
                    <h2 className="w-full text-5xl lg:text-7xl text-jockey leading-none text-center lg:text-start uppercase">
                        Así te ayudamos a cambiar
                    </h2>
                    <p className="mt-2 w-full text-2xl lg:text-5xl text-white text-center lg:text-start uppercase">Obtendras:</p>
                    <ul className='mt-2 w-full text-center lg:text-start text-base lg:text-xl font-gotham flex flex-col justify-center lg:justify-start items-center lg:items-start gap-2 lg:gap-2'>
                        <li className='w-full flex lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-lg mr-0.5 hidden lg:block'/><span className='w-full text-white'><b className="text-jockey">Plan de entrenamiento</b> diseñado por nuestros expertos.</span></li>
                        <li className='w-full flex lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-lg mr-0.5 hidden lg:block'/><span className='w-full text-white'><b className="text-jockey">Guías nutricionales</b> por objetivos, recetario, menú semanal.</span></li>
                        <li className='w-full flex lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-lg mr-0.5 hidden lg:block'/><span className='w-full text-white'><b className="text-jockey">Lista de compras</b> pre armadas en <b className="text-jockey">colaboración con mercados locales.</b> Es una selección exclusiva que tiene todo lo necesario para una alimentación saludable y completa.</span></li>
                        <li className='w-full flex lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-lg mr-0.5 hidden lg:block'/><span className='w-full text-white'>Acceso a <b className="text-jockey">nuestra comunidad</b> en Telegram exclusiva. Espacio para motivarte, resolver dudas, y compartir logros.</span></li>
                        <li className='w-full flex lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-lg mr-0.5 hidden lg:block'/><span className='w-full text-white'>Invitación gratuita a <b className="text-jockey">Masterclasses mensuales.</b></span></li>
                    </ul>
                    <div className="mt-8 w-full flex justify-center text-center">
                        <IframeFormButton
                            className="w-full bg-jockey text-white text-2xl lg:text-4xl py-2 lg:py-4 px-4 lg:px-8 border-2 border-white rounded"
                            label={'ESTOY LISTO PARA EMPEZAR'}
                            iframeSrc={'https://b24-gean63.bitrix24.site/crm_form_tc8ds/'}
                        />
                    </div>
                </div>
                <div className="lg:grow relative">
                    <div className={`absolute top-0 left-0 w-full h-full z-10 ${styles.gradient__swiper__fotos}`}></div>
                    <div className="lg:absolute size-full aspect-[9/16] lg:aspect-auto lg:top-0 lg:left-0">
                        <img src={foto.src} alt="Desafio de verano JOCKEY GYM" className="size-full object-cover object-top"/>
                    </div>
                </div>
            </section>
            <section className="w-full max-w-7xl px-4 xl:px-0 flex flex-col justify-center items-center my-12 lg:my-24">
                <h2 className="w-full text-4xl lg:text-5xl text-center">Conoce nuestros planes</h2>
                <div className="mt-4 lg:mt-12 w-full flex justify-center items-start flex-wrap lg:flex-nowrap gap-12 lg:gap-8">
                    <div className="w-full max-w-sm flex flex-col justify-center items-center py-8 px-6 bg-white shadow-md border-2 border-neutral-200 rounded-3xl relative">
                        <h3 className="mt-2 w-full text-center text-5xl border-b-2 border-neutral-100 pb-1 mb-2">PLAN BÁSICO</h3>
                        <ul className='mt-4 lg:mt-2 w-full text-center lg:text-start text-base lg:text-base font-gotham flex flex-col justify-center lg:justify-start items-center lg:items-start gap-4 lg:gap-3'>
                            <FaCircleCheck className='fill-jockey text-xl block lg:hidden'/>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1'/><span className='w-full lg:w-5/6'>Acceso multisede</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1'/><span className='w-full lg:w-5/6'>Más de 300 clases</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1'/><span className='w-full lg:w-5/6'>App Trainingym con más de 12 rutinas</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1'/><span className='w-full lg:w-5/6'>Más de 20 instructores generales</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1'/><span className='w-full lg:w-5/6'>Masterclass de salud y bienestar</span></li>
                        </ul>
                        <div className="mt-4 w-full flex flex-col justify-center items-center">
                            <p className="text-jockey font-gotham-black text-5xl">$229.900</p>
                            <p className="text-sm font-gotham"><small>Por 6 meses</small></p>
                        </div>
                    </div>
                    <div className="w-full max-w-sm flex flex-col justify-center items-center py-8 px-6 bg-white shadow-md border-2 border-neutral-200 rounded-3xl relative">
                        <h3 className="mt-2 w-full text-center text-5xl border-b-2 border-neutral-100 pb-1 mb-2">PLAN PREMIUM</h3>
                        <ul className='mt-4 lg:mt-2 w-full text-center lg:text-start text-base lg:text-base font-gotham flex flex-col justify-center lg:justify-start items-center lg:items-start gap-4 lg:gap-3'>
                            <FaCircleCheck className='fill-jockey text-xl block lg:hidden'/>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1'/><span className='w-full lg:w-5/6'>Acceso multisede</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1'/><span className='w-full lg:w-5/6'>Más de 300 clases</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1'/><span className='w-full lg:w-5/6'>App Trainingym con más de 12 rutinas</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1'/><span className='w-full lg:w-5/6'>Más de 20 instructores generales</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1'/><span className='w-full lg:w-5/6'>Masterclass de salud y bienestar</span></li>
                            <div className="w-full flex justify-center items-center text-center">
                                <FaPlus className='fill-jockey text-lg'/>
                            </div>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1'/><span className='w-full lg:w-5/6'>Entrenamiento personal con 1 de nuestros 12 <b className="font-gotham-black text-jockey lg:text-neutral-800">entrenadores cinturon negro</b></span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1'/><span className='w-full lg:w-5/6'>Planes y guías <b className="font-gotham-black text-jockey lg:text-neutral-800">nutricionales</b></span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1'/><span className='w-full lg:w-5/6'>Sesiones de <b className="font-gotham-black text-jockey lg:text-neutral-800">coaching</b> grupal para motivarte</span></li>
                        </ul>
                        <div className="mt-4 w-full flex flex-col justify-center items-center">
                            <p className="text-neutral-500 font-gotham font-light text-xl line-through decoration-neutral-400">$289.900</p>
                            <p className="text-jockey font-gotham-black text-5xl">$249.900</p>
                            <p className="text-sm font-gotham"><small>Por 3 meses</small></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 lg:py-24 bg-black flex justify-center items-center">
                <div className="w-full max-w-7xl px-4 xl:px-0 flex flex-col justify-center items-center text-center">
                    <h2 className="text-5xl lg:text-7xl text-white">APROVECHA AHORA</h2>
                    <p className="mt-4 lg:mt-2 text-base lg:text-xl text-white font-gotham">Inscribite a nuestra <b className="font-gotham-black text-jockey">Masterclass</b>, y cambia tu vida ahora!</p>
                    <div className="mt-8 w-full">
                        <IframeFormButton
                            className="bg-jockey w-full text-white text-2xl lg:text-4xl py-2 lg:py-4 px-4 lg:px-8 border-2 border-white rounded shadow-md"
                            label={'QUIERO INSCRIBIRME'}
                            iframeSrc={'https://b24-gean63.bitrix24.site/crm_form_tc8ds/'}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}