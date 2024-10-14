import type { Metadata } from "next";
import styles from '../../styles/landing-hs.module.css'
import { ContadorEvento, IframeFormButton } from "@/components";
import { FaCircleCheck, FaPlus } from "react-icons/fa6";
import portada from '../../assets/desafio/desafio_verano_portada.webp'
import portada2 from '../../assets/desafio/portada_desafio.webp'
import foto from '../../assets/desafio/desafio_verano.webp'
import caracteristica1 from '../../assets/desafio/caracteristica1.webp'
import caracteristica2 from '../../assets/desafio/caracteristica2.webp'
import caracteristica3 from '../../assets/desafio/caracteristica3.webp'

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
        <main className="grow w-full flex flex-col justify-center items-center">
            <section className="w-full min-h-lvh flex flex-col justify-center items-center relative text-center">
                <div className={`absolute top-0 left-0 w-full h-full -z-10 ${styles.gradient__portada}`}></div>
                <img src={portada.src} className="absolute top-0 left-0 w-full h-full object-cover -z-20" alt='Desafio de verano Jockey GYM'/>
                <div className="w-full py-24 lg:py-8 max-w-7xl px-4 xl:px-0 text-center flex flex-col items-center justify-center relative">
                    <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-stretch">
                        <div className="w-full lg:w-1/2 flex flex-col">
                            <h1 className="w-full text-2xl lg:text-4xl text-white">Desafío verano</h1>
                            <p className="mt-4 w-full text-5xl lg:text-8xl font-black text-white leading-none">Podes perder <span className="leading-[0.8] py-2 lg:py-4 px-2 lg:px-4 inline-flex justify-center items-center bg-jockey relative -top-1.5 z-0"><span className="text-white relative top-1 lg:top-1.5">hasta 10 kg</span></span> <span className="block"></span>antes de que termine el a<span className="relative z-10 text-white">ñ</span>o.</p>
                        </div>
                        <div className="w-full max-w-xl lg:w-1/2 mt-8 lg:mt-20 flex justify-center items-center">
                            <img src={portada2.src} className="w-full object-contain"/>
                        </div>
                    </div>
                    <IframeFormButton
                        className="mt-8 bg-jockey w-full text-white text-2xl lg:text-4xl py-2 lg:py-4 px-4 lg:px-8 border-2 border-white rounded shadow-md"
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
                            DESAFIO VERANO
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
            <section className="w-full px-4 xl:px-0 flex flex-col justify-center items-center bg-white py-12 lg:py-24">
                <h2 className="text-5xl lg:text-7xl text-jockey uppercase">Así te ayudamos a cambiar</h2>
                <div className="mt-8 w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                    <div className="w-full flex flex-col justify-center items-center text-center">
                        <img src={caracteristica1.src} className="w-4/5 lg:w-full aspect-square object-cover rounded-lg"/>
                        <h3 className="mt-8 text-4xl lg:text-6xl text-jockey uppercase">Nutrición</h3>
                        <p className="mt-2 text-lg font-gotham">Guías nutricionales por objetivos, recetario, menú semanal. Además, una lista de compras pre-armadas en colaboración con mercados locales.</p>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center text-center">
                        <img src={caracteristica2.src} className="w-4/5 lg:w-full aspect-square object-cover rounded-lg"/>
                        <h3 className="mt-8 text-4xl lg:text-6xl text-jockey uppercase">Entrenamiento</h3>
                        <p className="mt-2 text-lg font-gotham">Plan diseñado por nuestros expertos para el objetivo que tengas.</p>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center text-center">
                        <img src={caracteristica3.src} className="w-4/5 lg:w-full aspect-square object-cover rounded-lg"/>
                        <h3 className="mt-8 text-4xl lg:text-6xl text-jockey uppercase">Comunidad</h3>
                        <p className="mt-2 text-lg font-gotham">Acceso a nuestra comunidad en Whatsapp exclusiva. Espacio para motivarte, resolver dudas, y compartir logros. Tambien disfrutaras de invitaciones gratuitas a Masterclasses mensuales sobre fitness y bienestar.</p>
                    </div>
                </div>
                <div className="mt-12 w-full max-w-7xl">
                    <IframeFormButton
                        className="bg-jockey w-full text-white text-2xl lg:text-4xl py-2 lg:py-4 px-4 lg:px-8 border-2 border-white rounded shadow-md"
                        label={'QUIERO INSCRIBIRME'}
                        iframeSrc={'https://b24-gean63.bitrix24.site/crm_form_tc8ds/'}
                    />
                </div>
            </section>
            <section className="w-full px-4 xl:px-0 flex flex-col justify-center items-center">
                <div className="w-full max-w-7xl bg-neutral-200 p-6 rounded-2xl flex flex-col lg:flex-row justify-between items-start gap-8">
                    <div className="w-full lg:w-[calc(50%-2rem)] text-center lg:text-start">
                        <h2 className="w-fit mx-auto lg:mx-0 text-xl lg:text-4xl uppercase bg-jockey py-1 px-2"><span className="relative top-0.5 lg:top-1 text-white">TESTIMONIO</span></h2>
                        <h3 className="mt-6 lg:mt-4 text-5xl lg:text-6xl">CELSO ALVES</h3>
                        <p className="mt-1 lg:mt-0 text-base lg:text-lg text-jockey font-gotham">GANADOR RETO 12 SEMANAS 2021</p>
                        <p className="mt-4 lg:mt-0 mx-auto lg:mx-0 w-full max-w-lg font-gotham text-lg">&ldquo;Lo más dificil fue cambiar mi alimentación. No pensé que llegaría a estos resultados. Y más importante que mi cambio físico, fue sentirme bien y cómo mejoró mi autoestima&rdquo;</p>
                    </div>
                    <div className="w-full lg:w-1/2 aspect-video relative rounded-2xl overflow-hidden">
                        <iframe
                            src="https://www.youtube.com/embed/kEBU5VaJxx0?si=321gstFygc0NIQmU"
                            title="Testimonio Celso Alves"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="h-full aspect-video absolute top-0 left-0"
                        ></iframe>
                    </div>
                </div>
            </section>
            <section className="mt-16 lg:mt-28 w-full max-w-7xl px-4 xl:px-0 flex flex-col justify-start items-start bg-white gap-12">
                <div className="w-full pt-8 lg:pt-12 p-6 border border-neutral-200 rounded-lg relative">
                    <h3 className="w-fit bg-jockey py-1 lg:py-2 px-4 text-2xl lg:text-6xl rounded-xl absolute top-0 left-4 -translate-y-1/2"><span className="relative top-0.5 lg:top-1 text-white">SEMANAS 1 Y 2</span></h3>
                    <p className="font-gotham text-base lg:text-lg">Durante las 2 primeras semanas del desafío verano vas a definir tus metas, encontrarte con tu “por qué”, empezar a sentar las bases para la formación de hábitos saludables duraderos.</p>
                    <p className="mt-2 font-gotham text-base lg:text-lg">En la app TraininGym vas a tener tu rutina de entrenamiento día por día, y en la comunidad de Whatsapp la motivación diaria que necesitas para no fallar.</p>
                </div>
                <div className="w-full pt-8 lg:pt-12 p-6 border border-neutral-200 rounded-lg relative">
                    <h3 className="w-fit bg-jockey py-1 lg:py-2 px-4 text-2xl lg:text-6xl rounded-xl absolute top-0 right-4 -translate-y-1/2"><span className="relative top-0.5 lg:top-1 text-white">SEMANAS 3 Y 4</span></h3>
                    <p className="font-gotham text-base lg:text-lg">Ya tenés las bases, ahora es el momento de subir el nivel. Con nuestros desafíos quincenales, te retaremos a dar lo mejor de ti. Competirás con otros participantes por increíbles premios, pero lo más importante es que demostrarás a vos mismo hasta dónde podes llegar. ¡Este es tu momento para superarte y alcanzar nuevas metas!</p>
                </div>
                <div className="w-full pt-8 lg:pt-12 p-6 border border-neutral-200 rounded-lg relative">
                    <h3 className="w-fit bg-jockey py-1 lg:py-2 px-4 text-2xl lg:text-6xl rounded-xl absolute top-0 left-4 -translate-y-1/2"><span className="relative top-0.5 lg:top-1 text-white">SEMANAS 5 Y 6</span></h3>
                    <p className="font-gotham text-base lg:text-lg">A medida que ganas fuerza, resistencia y comenzás a ver resultados, te acompañamos con <b className="font-gotham-black">MASTERCLASSES EXCLUSIVAS</b> diseñadas para llevar tu bienestar al siguiente nivel.</p>
                    <p className="mt-2 font-gotham text-base lg:text-lg">Aprende sobre temas clave como nutrición, cuidado del dolor lumbar, fortalecimiento del core, técnicas antiaging y cuidado de la piel. Todo lo que necesitas para potenciar tu cuerpo y mente con información de calidad y respaldo experto.</p>
                </div>
                <div className="w-full pt-8 lg:pt-12 p-6 border border-neutral-200 rounded-lg relative">
                    <h3 className="w-fit bg-jockey py-1 lg:py-2 px-4 text-2xl lg:text-6xl rounded-xl absolute top-0 right-4 -translate-y-1/2"><span className="relative top-0.5 lg:top-1 text-white">SEMANAS 7 Y 8</span></h3>
                    <p className="font-gotham text-base lg:text-lg">Semana a semana, estás adoptando nuevos hábitos saludables, eligiendo mejor tus comidas y encontrando tiempo en tu día para entrenar. Durante estas semanas, nos enfocaremos en fortalecer tu mentalidad, incorporar técnicas de relajación y asegurar que la recuperación forme parte clave de tu rutina. Es el momento de ajustar detalles para lograr cambios sostenibles mientras te preparas para la recta final.</p>
                </div>
                <div className="w-full pt-12 lg:pt-16 p-6 border border-neutral-200 rounded-lg relative">
                <h3 className="w-fit bg-jockey py-1 lg:py-2 px-4 text-2xl lg:text-6xl rounded-xl absolute top-0 left-4 -translate-y-1/2"><span className="relative top-0.5 lg:top-1 text-white">SEMANAS 9 Y 10</span><span className="text-2xl lg:text-4xl absolute top-7 lg:top-16 left-7 lg:left-56 whitespace-nowrap">LO LOGRASTE!</span></h3>
                    <p className="font-gotham text-base lg:text-lg">Estás en la recta final de este Desafío de Verano y es hora de disfrutar los resultados de todo tu esfuerzo.</p>
                    <p className="mt-2 font-gotham text-base lg:text-lg">Estas semanas se centran en terminar con fuerza, mejorar tus evaluaciones físicas y completar los últimos estudios de bioimpedancia.</p>
                    <p className="mt-2 font-gotham text-base lg:text-lg">Es también el momento de reflexionar sobre todos tus logros (¡grandes y pequeños!) y comenzar a crear el plan que te permitirá mantener hábitos saludables a largo plazo.</p>
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
        </main>
    );
}