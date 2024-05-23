import type { Metadata } from "next";
import Link from "next/link";
import styles from '../../styles/landing-hs.module.css'
import { ContadorHotSale, SwiperFotos, SwiperPreguntas, SwiperSedes } from "@/components";
import { FaCircleCheck, FaPlus } from "react-icons/fa6";

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
                    <source src="/assets/portada_hot_sale.mp4" type="video/mp4" />
                    Tu navegador no soporta videos.
                </video>
                <div className="w-full max-w-7xl px-4 xl:px-0 flex flex-col items-center justify-center relative z-10" data-aos="fade-down" data-aos-duration="300" data-aos-easing="ease-in-out">
                    <h1 className="mb-8 w-full text-start text-2xl lg:text-3xl text-white lg:font-extrabold">Hot Sale JOCKEY GYM</h1>
                    <SwiperPreguntas/>
                    <Link href="/" className="mt-6 w-full px-4 lg:px-8 py-2 lg:py-4 flex justify-center items-center text-white text-xl lg:text-4xl border-2 rounded-3xl bg-[#FFFFFF26] hover:bg-[#FFFFFF60] transition-all duration-300 ease-in-out">Sí, quiero cambiar mi vida!</Link>
                </div>
            </section>
            <section className="w-full lg:min-h-screen flex flex-col lg:flex-row justify-between items-stretch bg-black">
                <div className="w-full max-w-7xl bg-black flex flex-col justify-start items-start py-12 lg:py-24 px-4 lg:px-6 relative" data-aos="fade-right" data-aos-delay='150' data-aos-duration="300" data-aos-easing="ease-in-out">
                    <h3 className="w-full text-4xl lg:text-7xl leading-none text-start flex flex-col">
                        <span className="text-jockey">PASE MULTISEDE,</span>
                        <span className="text-5xl text-white">ACCESO A TODOS NUESTROS CLUBES.</span>
                    </h3>
                    <h3 className="w-full mt-2 text-4xl lg:text-7xl leading-none text-start flex flex-col">
                        <span className="text-jockey">TODOS LOS SERVICIOS,</span>
                        <span className="text-5xl text-white">+ DE 500 CLASES SEMANALES Y 30 INSTRUCTORES DE SALÓN.</span>
                    </h3>
                    <h3 className="w-full mt-2 text-4xl lg:text-7xl leading-none text-start flex flex-col">
                        <span className="text-jockey">PLAN QUINCENAL PARA UN AMIGO,</span>
                        <span className="text-5xl text-white">15 DÍAS COMPLETAMENTE GRATIS.</span>
                    </h3>
                    <ul className='w-full mt-4 text-center lg:text-start text-base lg:text-xl font-gotham flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6 lg:gap-2'>
                        <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-lg mr-0.5'/><span className='w-full text-white'>12 sesiones de sauna.</span></li>
                        <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-lg mr-0.5'/><span className='w-full text-white'>Reto de 6 semanas.</span></li>
                        <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-lg mr-0.5'/><span className='w-full text-white'>Emails semanales.</span></li>
                        <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-lg mr-0.5'/><span className='w-full text-white'>Plataforma de entrenamiento exclusiva "TRAININGGYM".</span></li>
                        <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-lg mr-0.5'/><span className='w-full text-white'>Grupo de Telegram exclusiva "JG VIP".</span></li>
                        <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-lg mr-0.5'/><span className='w-full text-white'>Extensión hasta 45 días por vacaciones.</span></li>
                    </ul>
                    <div className="mt-8 w-full flex justify-center text-center">
                        <Link href={'/'} className="w-full bg-jockey text-white text-3xl py-4 px-8 rounded font-gotham-black hover:drop-shadow-md hover:scale-[1.0125] transition-all duration-300 ease-in-out">Estoy listo para empezar</Link>
                    </div>
                </div>
                <div className="lg:grow relative">
                    <div className="lg:absolute size-full aspect-square lg:aspect-auto lg:top-0 lg:left-0">
                        <SwiperFotos/>
                    </div>
                </div>
            </section>
            <section className={`w-full flex justify-center items-center min-h-lvh relative ${styles.portada__anual}`}>
                <div className={`absolute top-0 left-0 w-full h-full z-0 ${styles.gradient__anual}`}></div>
                <div className="w-full max-w-7xl my-24 p-6 flex flex-col justify-center items-center bg-white font-gotham shadow-lg rounded relative z-10">
                    <p className="text-lg">Si queres ir más allá y progresar en <b className="text-jockey font-gotham-black">tiempo record</b> sin margen de error</p>
                    <div className="w-fit relative">
                        <h2 className="w-fit text-jocket text-6xl font-gotham-black drop-shadow-sm text-jockey relative">
                            JOCKEY GYM ANUAL PLUS
                            <span className="absolute top-0 left-0 text-xs bg-black text-white py-1.5 px-3 rounded-3xl leading-none -translate-x-1/2 -translate-y-1/2 -rotate-[20grad]">NUEVO!</span>
                        </h2>
                    </div>
                    <ul className='mt-8 w-full text-center lg:text-start text-lg lg:text-xl flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6 lg:gap-4'>
                        <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-2xl mr-1'/><span className='w-full'>Evaluación con un <b className="text-jockey">experto</b> para determinar tu punto de partida.</span></li>
                        <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-2xl mr-1'/><span className='w-full'>Determinación de <b className="text-jockey">objetivos 100% personalizados</b> con una rutina que se adapta a vos.</span></li>
                        <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-2xl mr-1'/><span className='w-full'><b className="text-jockey">Sesiones de entrenamiento</b> 2 o 3 veces por semana, en grupos de hasta 3 personas.</span></li>
                        <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-2xl mr-1'/><span className='w-full'>Guía nutricional hecha por nuestra nutricionista, para que aprendas a calcular tus requerimientos y <b className="text-jockey">comer de acuerdo a lo que necesitas.</b></span></li>
                        <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-2xl mr-1'/><span className='w-full'><b className="text-jockey font-gotham-black">Resultados 100% garantizados en tiempo record.</b></span></li>
                    </ul>
                    <Link href={'/'} className="mt-8 w-full bg-jockey rounded py-4 px-8 text-center text-xl text-white tracking-widest uppercase font-gotham-black hover:drop-shadow-md hover:scale-[1.025] transition-all duration-300 ease-in-out">Esto es justo lo que necesito</Link>
                </div>
            </section>
            <section className="w-full max-w-7xl flex flex-col justify-center items-center my-24">
                <h2 className="w-full text-5xl text-center">JOCKEY GYM HOT SALE</h2>
                <div className="mt-12 w-full flex justify-center items-center gap-8">
                    <div className="w-full flex flex-col justify-center items-center py-8 px-6 bg-white shadow-md border-2 border-neutral-200 rounded-3xl relative">
                        <div className="bg-jockey text-white font-gotham-black py-2 px-4 rounded-3xl absolute top-0 -translate-y-1/2">MÁS BARATO</div>
                        <h3 className="mt-2 w-full text-center text-5xl border-b-2 border-neutral-100 pb-1 mb-2">ANUAL VIP</h3>
                        <ul className='mt-2 w-full text-center lg:text-start text-base lg:text-base font-gotham flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6 lg:gap-3'>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-xl mr-1'/><span className='w-full lg:w-5/6'><b className="font-gotham-black text-neutral-800">Masterclasses</b></span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-xl mr-1'/><span className='w-full lg:w-5/6'>12 sesiones de <b className="font-gotham-black text-neutral-800">sauna</b></span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-xl mr-1'/><span className='w-full lg:w-5/6'>Reto 6 semanas y planes de entrenamiento <b className="font-gotham-black text-neutral-800">por objetivos</b></span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-xl mr-1'/><span className='w-full lg:w-5/6'><b className="font-gotham-black text-neutral-800">Correos personalizados</b></span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-xl mr-1'/><span className='w-full lg:w-5/6'>Grupo de <b className="font-gotham-black text-neutral-800">Telegram</b></span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-xl mr-1'/><span className='w-full lg:w-5/6'>Plataforma <b className="font-gotham-black text-neutral-800">Trainingym</b></span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-xl mr-1'/><span className='w-full lg:w-5/6'>Extensión hasta <b className="font-gotham-black text-neutral-800">45 días</b></span></li>
                        </ul>
                        <div className="mt-4 w-full flex flex-col justify-center items-center">
                            <p className="text-neutral-500 font-gotham font-light text-xl line-through decoration-neutral-400">$500</p>
                            <p className="text-jockey font-gotham-black text-5xl">$299.900</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center py-8 px-6 bg-white shadow-md border-2 border-neutral-200 rounded-3xl relative">
                        <div className="bg-jockey text-white font-gotham-black py-2 px-4 rounded-3xl absolute top-0 -translate-y-1/2">MEJOR OPCIÓN</div>
                        <h3 className="mt-2 w-full text-center text-5xl border-b-2 border-neutral-100 pb-1 mb-2">ANUAL PLUS</h3>
                        <ul className='mt-2 w-full text-center lg:text-start text-base lg:text-base font-gotham flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6 lg:gap-3'>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-xl mr-1'/><span className='w-full lg:w-5/6'><b className="font-gotham-black text-neutral-800">Masterclasses</b></span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-xl mr-1'/><span className='w-full lg:w-5/6'>12 sesiones de <b className="font-gotham-black text-neutral-800">sauna</b></span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-xl mr-1'/><span className='w-full lg:w-5/6'>Reto 6 semanas y planes de entrenamiento <b className="font-gotham-black text-neutral-800">por objetivos</b></span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-xl mr-1'/><span className='w-full lg:w-5/6'><b className="font-gotham-black text-neutral-800">Correos personalizados</b></span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-xl mr-1'/><span className='w-full lg:w-5/6'>Grupo de <b className="font-gotham-black text-neutral-800">Telegram</b></span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-xl mr-1'/><span className='w-full lg:w-5/6'>Plataforma <b className="font-gotham-black text-neutral-800">Trainingym</b></span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-xl mr-1'/><span className='w-full lg:w-5/6'>Extensión hasta <b className="font-gotham-black text-neutral-800">45 días</b></span></li>
                            <div className="w-full flex justify-center items-center text-center">
                                <FaPlus className='fill-jockey text-lg'/>
                            </div>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-xl mr-1'/><span className='w-full lg:w-5/6'>Entrenamiento <b className="font-gotham-black text-neutral-800">personalizado en equipo</b> (cupos de hasta 3 personas)</span></li>
                        </ul>
                        <div className="mt-4 w-full flex flex-col justify-center items-center">
                            <p className="text-neutral-500 font-gotham font-light text-xl line-through decoration-neutral-400">$500</p>
                            <p className="text-jockey font-gotham-black text-5xl">$600.000</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center py-8 px-6 bg-white shadow-md border-2 border-neutral-200 rounded-3xl relative">
                        <div className="bg-jockey text-white font-gotham-black py-2 px-4 rounded-3xl absolute top-0 -translate-y-1/2">VIP</div>
                        <h3 className="mt-2 w-full text-center text-5xl border-b-2 border-neutral-100 pb-1 mb-2">ANUAL ELITE</h3>
                        <ul className='mt-2 w-full text-center lg:text-start text-base lg:text-base font-gotham flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6 lg:gap-3'>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-xl mr-1'/><span className='w-full lg:w-5/6'><b className="font-gotham-black text-neutral-800">Masterclasses</b></span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-xl mr-1'/><span className='w-full lg:w-5/6'>12 sesiones de <b className="font-gotham-black text-neutral-800">sauna</b></span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-xl mr-1'/><span className='w-full lg:w-5/6'>Reto 6 semanas y planes de entrenamiento <b className="font-gotham-black text-neutral-800">por objetivos</b></span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-xl mr-1'/><span className='w-full lg:w-5/6'><b className="font-gotham-black text-neutral-800">Correos personalizados</b></span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-xl mr-1'/><span className='w-full lg:w-5/6'>Grupo de <b className="font-gotham-black text-neutral-800">Telegram</b></span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-xl mr-1'/><span className='w-full lg:w-5/6'>Plataforma <b className="font-gotham-black text-neutral-800">Trainingym</b></span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-xl mr-1'/><span className='w-full lg:w-5/6'>Extensión hasta <b className="font-gotham-black text-neutral-800">45 días</b></span></li>
                            <div className="w-full flex justify-center items-center text-center">
                                <FaPlus className='fill-jockey text-lg'/>
                            </div>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey text-xl mr-1'/><span className='w-full lg:w-5/6'>Entrenamiento <b className="font-gotham-black text-neutral-800">personalizado 1 a 1</b></span></li>
                        </ul>
                        <div className="mt-4 w-full flex flex-col justify-center items-center">
                            <p className="text-neutral-500 font-gotham font-light text-xl line-through decoration-neutral-400">$500</p>
                            <p className="text-jockey font-gotham-black text-5xl">$990.000</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-24 bg-black flex justify-center items-center">
                <div className="w-full max-w-7xl flex flex-col justify-center items-center text-center">
                    <h2 className="text-7xl text-white">APROVECHA AHORA</h2>
                    <p className="mt-2 text-xl text-white font-gotham">No te quedes sin ser parte de la <b className="font-gotham-black text-white">comunidad fitness más grande del NOA</b>, ¡por un precio unico por tiempo limitado!</p>
                    <Link href={''} className="mt-8 bg-jockey w-full text-white text-3xl py-4 px-4 rounded font-gotham-black hover:opacity-90 transition-all duration-200 ease-in-out">QUIERO SER PARTE</Link>
                </div>
            </section>
            <section className="w-full min-h-lvh flex flex-col justify-center items-center relative px-4 xl:px-0 py-24">
                <div className={`absolute top-0 left-0 w-full h-full z-10 ${styles.gradient__sedes}`}></div>
                <div className="absolute top-0 left-0 size-full z-0">
                    <SwiperSedes/>
                </div>
                <div className="w-full grow max-w-7xl flex flex-col justify-center items-center relative z-20">
                    <div className="w-full grow flex flex-col justify-center items-center">
                        <h2 className="flex flex-col justify-center items-center">
                            <span className="text-7xl text-white"> OFERTA EXCLUSIVA </span>
                            <span className="font-gotham-black text-3xl text-white">POR TIEMPO LIMITADO</span>
                        </h2>
                        <div className="mt-12 w-full">
                            <ContadorHotSale />
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-end font-gotham">
                        <div className="flex flex-col justify-start items-start">
                            <span className="text-4xl text-white font-gotham-black">+30</span>
                            <span className="text-2xl text-white opacity-90">años de experiencia</span>
                        </div>
                        <div className="flex flex-col justify-start items-start">
                            <span className="text-4xl text-white font-gotham-black">6</span>
                            <span className="text-2xl text-white opacity-90">sedes en la provincia</span>
                        </div>
                        <div className="flex flex-col justify-start items-start">
                            <span className="text-4xl text-white font-gotham-black">+12000</span>
                            <span className="text-2xl text-white opacity-90">socios confian en nosotros</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}