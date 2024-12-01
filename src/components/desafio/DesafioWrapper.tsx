'use client'

import { Fragment, useState } from "react";
import { FaCircleCheck, FaPlus } from "react-icons/fa6";
import { ContadorEvento, DesafioVeranoModal } from "@/components";
import styles from '../../styles/desafio-verano.module.css';
import desafio_2 from '../../assets/desafio/desafio_reserva.webp';
import desafio_3 from '../../assets/desafio/deasfio_banner.webp';
import portada from '../../assets/desafio/desafio_verano_portada.webp';
import portada2 from '../../assets/desafio/portada_desafio.webp';
import caracteristica1 from '../../assets/desafio/caracteristica1.webp';
import caracteristica2 from '../../assets/desafio/caracteristica2.webp';
import caracteristica3 from '../../assets/desafio/caracteristica3.webp';
import trama from '../../assets/desafio/desafio-trama-cuadrada.webp';
import combo from '../../assets/desafio/anti_inflamatorio.webp';
import combo2 from '../../assets/desafio/proteico.webp';
import combo3 from '../../assets/desafio/sin_tacc.webp';
import combo4 from '../../assets/desafio/energetico.webp';
import logo_octaviano from '../../assets/desafio/logo_octaviano.webp';
import Link from "next/link";

export const DesafioWrapper = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <Fragment>
            <section className="w-full min-h-lvh flex flex-col justify-center items-center relative text-center">
                <div className={`absolute top-0 left-0 size-full z-10 ${styles.gradient__portada}`}></div>
                <div className="absolute bottom-0 left-0 w-full h-24 z-20 bg-gradient-to-b from-transparent to-[rgb(23,23,23)]"></div>
                <img src={portada.src} className="absolute top-0 left-0 w-full h-full object-cover z-0" alt='Desafio de verano Jockey GYM'/>
                <div className="w-full py-24 lg:py-8 max-w-7xl px-4 xl:px-0 text-center flex flex-col items-center justify-center relative z-30">
                    <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-stretch">
                        <div className="w-full lg:w-1/2 flex flex-col">
                            <h1 className="w-full text-2xl lg:text-4xl text-white">Desafío verano</h1>
                            <p className="mt-4 w-full text-5xl lg:text-8xl font-black text-white leading-none">
                                Podes perder 
                                <span className="leading-[0.8] py-2 lg:py-4 px-2 lg:px-4 inline-flex justify-center items-center bg-white relative -top-1.5 z-0">
                                    <span className="relative top-1 lg:top-1.5">
                                        hasta 10 kg
                                    </span>
                                </span>
                                <span className="block"></span>
                                antes de que termine el a
                                <span className="relative z-10 text-white">
                                    ñ
                                </span>
                                o.
                            </p>
                        </div>
                        <div className="w-full max-w-xl lg:w-1/2 mt-8 lg:mt-20 flex justify-center items-center">
                            <img src={portada2.src} className="w-full object-contain"/>
                        </div>
                    </div>
                    <button
                        onClick={ () => { setIsOpen(true) }}
                        type="button"
                        aria-label='Quiero reservar mi lugar'
                        className='mt-8 bg-white w-full text-2xl lg:text-4xl py-2 lg:py-4 px-4 lg:px-8 rounded-full shadow-md hover:opacity-90 transition-all duration-150 ease-in-out'
                    >
                        Quiero reservar mi lugar
                    </button>
                </div>
            </section>
            <div className="mt-12 lg:mt-24 w-full h-14 lg:h-auto lg:aspect-[1688/109] relative overflow-hidden group">
                <img onClick={ () => { setIsOpen(true) }} src={desafio_2.src} alt="Unite a desafio verano Jockey Gym" className="size-full object-cover absolute top-0 left-0 z-0 group-hover:scale-105 transition-all duration-150 ease-in-out"/>
            </div>
            <p className="mt-12 lg:mt-24 w-full text-center font-gotham text-white text-2xl lg:text-3xl uppercase tracking-tighter">Unite y empeza el <b className="font-gotham-black text-white block lg:inline">cambio de vida</b> que mereces</p>
            <img src={desafio_3.src} alt="Desafio verano Jockey Gym" className="mt-12 lg:mt-24 w-[calc(100%-2rem)] lg:w-full max-w-7xl object-contain"/>
            <div className="my-12 lg:my-24 w-full max-w-7xl px-4 xl:px-0 flex flex-col">
                <p className="w-full text-center lg:text-start font-gotham text-white text-xl lg:text-3xl uppercase tracking-tighter">Este programa es <b className="font-gotham-black text-white">para vos</b> si:</p>
                <ul className="mt-4 font-gotham text-sm lg:text-lg tracking-tighter flex flex-col gap-2">
                    <li className=" flex items-center gap-1.5">
                        <span className="size-3 lg:size-5 rounded-full border border-white inline-flex justify-center items-center shrink-0"><span className="inline-block size-1.5 lg:size-3 bg-white rounded-full"></span></span>
                        <span className="text-white">Volviste hace poco al GYM para <b className="font-gotham-black text-white">&ldquo;llegar al verano&rdquo;.</b></span>
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
            <section className="w-full px-4 xl:px-0 flex flex-col justify-center items-center mb-12 lg:mb-24">
                <h2 className="w-full text-center font-gotham text-white text-2xl lg:text-3xl uppercase tracking-tighter">Así te <b className="font-gotham-black text-white block lg:inline">ayudamos a cambiar</b></h2>
                <div className="mt-8 w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                    <div className="w-full flex flex-col justify-center items-center text-center">
                        <img src={caracteristica1.src} className="w-4/5 lg:w-full aspect-square object-cover rounded-lg"/>
                        <h3 className="mt-8 text-4xl lg:text-6xl text-white uppercase">Nutrición</h3>
                        <p className="mt-2 text-lg font-gotham text-white">Guías nutricionales por objetivos, recetario, menú semanal. Además, una lista de compras pre-armadas en colaboración con mercados locales.</p>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center text-center">
                        <img src={caracteristica2.src} className="w-4/5 lg:w-full aspect-square object-cover rounded-lg"/>
                        <h3 className="mt-8 text-4xl lg:text-6xl text-white uppercase">Entrenamiento</h3>
                        <p className="mt-2 text-lg font-gotham text-white">Plan diseñado por nuestros expertos para el objetivo que tengas.</p>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center text-center">
                        <img src={caracteristica3.src} className="w-4/5 lg:w-full aspect-square object-cover rounded-lg"/>
                        <h3 className="mt-8 text-4xl lg:text-6xl text-white uppercase">Comunidad</h3>
                        <p className="mt-2 text-lg font-gotham text-white">Acceso a nuestra comunidad en Whatsapp exclusiva. Espacio para motivarte, resolver dudas, y compartir logros. Tambien disfrutaras de invitaciones gratuitas a Masterclasses mensuales sobre fitness y bienestar.</p>
                    </div>
                </div>
                <div className="mt-12 w-full max-w-7xl">
                    <button
                        onClick={ () => { setIsOpen(true) }}
                        type="button"
                        aria-label='Quiero reservar mi lugar'
                        className='bg-white w-full text-2xl lg:text-4xl py-2 lg:py-4 px-4 lg:px-8 rounded-full shadow-md hover:opacity-90 transition-all duration-150 ease-in-out'
                    >
                        Quiero inscribirme!
                    </button>
                </div>
            </section>
            <section className="w-full px-4 xl:px-0 flex flex-col justify-center items-center mb-12 lg:mb-24">
                <div className="w-full max-w-7xl flex flex-col justify-center items-center text-center">
                    <h2 className="w-full text-5xl lg:text-8xl text-center text-white">Mercadito JG</h2>
                    <p className="mt-2 bg-octaviano px-2 py-2 font-gotham text-lg lg:text-3xl text-white uppercase">Cuidamos tu bienestar dentro y fuera del gimnasio</p>
                    <p className="mt-4 font-gotham text-lg lg:text-3xl text-white">De la mano de octaviano, el mercado saludable líder en Tucumán, diseñamos una <b className="text-octaviano">seleccion de combos nutricionales</b> pensados especialmente para complementar <b className="text-octaviano">tu entrenamiento</b> y <b className="text-octaviano">estilo de vida.</b></p>
                    <h3 className="mt-4 lg:mt-12 w-full text-4xl lg:text-5xl text-center text-white">Encontra el pack ideal para vos</h3>
                    <div className="mt-4 lg:mt-8 w-full grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
                        <Link href="https://w.app/GMatWo" target="_blank" className="w-full p-4 flex flex-col items-center bg-white/5 lg:bg-transparent hover:bg-white/10 rounded-xl transition-all duration-200 ease-in-out">
                            <div className="w-full aspect-square relative">
                                <img className="size-full rounded-full object-cover absolute top-0 left-0" src={combo.src} alt="Combo Antiinflamatorio"/>
                            </div>
                            <h4 className="mt-4 text-3xl lg:text-3xl text-center text-white">Combo Antiinflamatorio</h4>
                            <p className="mt-2 grow font-gotham text-base lg:text-lg text-white">Cuida tu cuerpo y reduce molestias post-entreno.</p>
                            <button type="button" className="mt-4 w-full bg-white py-2 px-2 rounded-lg text-center font-gotham-black text-octaviano text-lg">Quiero mi pack</button>
                        </Link>
                        <Link href="https://w.app/GMatWo" target="_blank" className="w-full p-4 flex flex-col items-center bg-white/5 lg:bg-transparent hover:bg-white/10 rounded-xl transition-all duration-200 ease-in-out">
                            <div className="w-full aspect-square relative">
                                <img className="size-full rounded-full object-cover absolute top-0 left-0" src={combo2.src} alt="Combo Proteíco"/>
                            </div>
                            <h4 className="mt-4 text-3xl lg:text-3xl text-center text-white">Combo Proteíco</h4>
                            <p className="mt-2 grow font-gotham text-base lg:text-lg text-white">Perfecto para alimentar tus músculos despues de ejercitar.</p>
                            <button type="button" className="mt-4 w-full bg-white py-2 px-2 rounded-lg text-center font-gotham-black text-octaviano text-lg">Quiero mi pack</button>
                        </Link>
                        <Link href="https://w.app/GMatWo" target="_blank" className="w-full p-4 flex flex-col items-center bg-white/5 lg:bg-transparent hover:bg-white/10 rounded-xl transition-all duration-200 ease-in-out">
                            <div className="w-full aspect-square relative">
                                <img className="size-full rounded-full object-cover absolute top-0 left-0" src={combo3.src} alt="Combo Sin T.A.C.C."/>
                            </div>
                            <h4 className="mt-4 text-3xl lg:text-3xl text-center text-white">Combo Sin T.A.C.C.</h4>
                            <p className="mt-2 grow font-gotham text-base lg:text-lg text-white">Opciones saludables para quienes buscan alimentos libres de glúten.</p>
                            <button type="button" className="mt-4 w-full bg-white py-2 px-2 rounded-lg text-center font-gotham-black text-octaviano text-lg">Quiero mi pack</button>
                        </Link>
                        <Link href="https://w.app/GMatWo" target="_blank" className="w-full p-4 flex flex-col items-center bg-white/5 lg:bg-transparent hover:bg-white/10 rounded-xl transition-all duration-200 ease-in-out">
                            <div className="w-full aspect-square relative">
                                <img className="size-full rounded-full object-cover absolute top-0 left-0" src={combo4.src} alt="Combo Energético"/>
                            </div>
                            <h4 className="mt-4 text-3xl lg:text-3xl text-center text-white">Combo Energético</h4>
                            <p className="mt-2 grow font-gotham text-base lg:text-lg text-white">Ideal para deportistas o si buscas mejorar tu rendimiento.</p>
                            <button type="button" className="mt-4 w-full bg-white py-2 px-2 rounded-lg text-center font-gotham-black text-octaviano text-lg">Quiero mi pack</button>
                        </Link>
                    </div>
                </div>
                <div className="mt-4 lg:mt-8 w-full max-w-7xl flex justify-center lg:justify-end">
                    <img className="w-full max-w-xs object-contain lg:relative lg:left-10" src={logo_octaviano.src} alt="Logo Octaviano"/>
                </div>
            </section>
            <section className="w-full px-4 xl:px-0 flex flex-col justify-center items-center relative pb-4 lg:pb-12">
                <div className="size-full max-w-7xl mx-auto flex justify-center items-end absolute top-0 left-0 right-0 z-0 px-12 lg:px-24">
                    <img src={trama.src} alt="Desafio verano Jockey GYM" className="w-full max-w-7xl object-contain"/>
                </div>
                <div className="w-full max-w-7xl bg-neutral-800 p-6 rounded-2xl flex flex-col lg:flex-row justify-between items-start gap-8 relative z-10">
                    <div className="w-full lg:w-[calc(50%-2rem)] text-center lg:text-start">
                        <h2 className="w-fit mx-auto lg:mx-0 text-xl lg:text-4xl uppercase bg-white py-1 px-2"><span className="relative top-0.5 lg:top-1">TESTIMONIO</span></h2>
                        <h3 className="mt-6 lg:mt-4 text-5xl lg:text-6xl text-white">CELSO ALVES</h3>
                        <p className="mt-1 lg:mt-0 text-base lg:text-lg text-white font-gotham">GANADOR RETO 12 SEMANAS 2021</p>
                        <p className="mt-4 lg:mt-0 mx-auto lg:mx-0 w-full max-w-lg font-gotham text-white text-lg">&ldquo;Lo más dificil fue cambiar mi alimentación. No pensé que llegaría a estos resultados. Y más importante que mi cambio físico, fue sentirme bien y cómo mejoró mi autoestima&rdquo;</p>
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
            <section className="mt-16 lg:mt-28 w-full max-w-7xl px-4 xl:px-0 flex flex-col justify-start items-start gap-16">
                <div className="w-full pt-8 lg:pt-14 p-6 bg-neutral-800 rounded-lg relative">
                    <h3 className="w-fit bg-white py-1 lg:py-2 px-4 text-2xl lg:text-6xl rounded-xl absolute top-0 left-4 -translate-y-1/2"><span className="relative top-0.5 lg:top-1">SEMANAS 1 Y 2</span></h3>
                    <p className="font-gotham text-base lg:text-lg text-white">Durante las 2 primeras semanas del desafío verano vas a definir tus metas, encontrarte con tu “por qué”, empezar a sentar las bases para la formación de hábitos saludables duraderos.</p>
                    <p className="mt-2 font-gotham text-base lg:text-lg text-white">En la app TraininGym vas a tener tu rutina de entrenamiento día por día, y en la comunidad de Whatsapp la motivación diaria que necesitas para no fallar.</p>
                </div>
                <div className="w-full pt-8 lg:pt-14 p-6 bg-neutral-800 rounded-lg relative">
                    <h3 className="w-fit bg-white py-1 lg:py-2 px-4 text-2xl lg:text-6xl rounded-xl absolute top-0 right-4 -translate-y-1/2"><span className="relative top-0.5 lg:top-1">SEMANAS 3 Y 4</span></h3>
                    <p className="font-gotham text-base lg:text-lg text-white">Ya tenés las bases, ahora es el momento de subir el nivel. Con nuestros desafíos quincenales, te retaremos a dar lo mejor de ti. Competirás con otros participantes por increíbles premios, pero lo más importante es que demostrarás a vos mismo hasta dónde podes llegar. ¡Este es tu momento para superarte y alcanzar nuevas metas!</p>
                </div>
                <div className="w-full pt-8 lg:pt-14 p-6 bg-neutral-800 rounded-lg relative">
                    <h3 className="w-fit bg-white py-1 lg:py-2 px-4 text-2xl lg:text-6xl rounded-xl absolute top-0 left-4 -translate-y-1/2"><span className="relative top-0.5 lg:top-1">SEMANAS 5 Y 6</span></h3>
                    <p className="font-gotham text-base lg:text-lg text-white">A medida que ganas fuerza, resistencia y comenzás a ver resultados, te acompañamos con <b className="font-gotham-black text-white">MASTERCLASSES EXCLUSIVAS</b> diseñadas para llevar tu bienestar al siguiente nivel.</p>
                    <p className="mt-2 font-gotham text-base lg:text-lg text-white">Aprende sobre temas clave como nutrición, cuidado del dolor lumbar, fortalecimiento del core, técnicas antiaging y cuidado de la piel. Todo lo que necesitas para potenciar tu cuerpo y mente con información de calidad y respaldo experto.</p>
                </div>
                <div className="w-full pt-8 lg:pt-14 p-6 bg-neutral-800 rounded-lg relative">
                    <h3 className="w-fit bg-white py-1 lg:py-2 px-4 text-2xl lg:text-6xl rounded-xl absolute top-0 right-4 -translate-y-1/2"><span className="relative top-0.5 lg:top-1">SEMANAS 7 Y 8</span></h3>
                    <p className="font-gotham text-base lg:text-lg text-white">Semana a semana, estás adoptando nuevos hábitos saludables, eligiendo mejor tus comidas y encontrando tiempo en tu día para entrenar. Durante estas semanas, nos enfocaremos en fortalecer tu mentalidad, incorporar técnicas de relajación y asegurar que la recuperación forme parte clave de tu rutina. Es el momento de ajustar detalles para lograr cambios sostenibles mientras te preparas para la recta final.</p>
                </div>
                <div className="w-full pt-12 lg:pt-[4.5rem] p-6 bg-neutral-800 rounded-lg relative">
                <h3 className="w-fit bg-white py-1 lg:py-2 px-4 text-2xl lg:text-6xl rounded-xl absolute top-0 left-4 -translate-y-1/2"><span className="relative top-0.5 lg:top-1">SEMANAS 9 Y 10</span><span className="text-2xl lg:text-4xl absolute top-7 lg:top-16 left-7 lg:left-56 whitespace-nowrap text-jockey">LO LOGRASTE!</span></h3>
                    <p className="font-gotham text-base lg:text-lg text-white">Estás en la recta final de este Desafío de Verano y es hora de disfrutar los resultados de todo tu esfuerzo.</p>
                    <p className="mt-2 font-gotham text-base lg:text-lg text-white">Estas semanas se centran en terminar con fuerza, mejorar tus evaluaciones físicas y completar los últimos estudios de bioimpedancia.</p>
                    <p className="mt-2 font-gotham text-base lg:text-lg text-white">Es también el momento de reflexionar sobre todos tus logros (¡grandes y pequeños!) y comenzar a crear el plan que te permitirá mantener hábitos saludables a largo plazo.</p>
                </div>
            </section>
            <section className="w-full max-w-7xl px-4 xl:px-0 flex flex-col justify-center items-center my-12 lg:my-24">
                <h2 className="w-full text-4xl lg:text-5xl text-center text-white">Conoce nuestros planes</h2>
                <div className="mt-4 lg:mt-12 w-full flex justify-center items-start flex-wrap lg:flex-nowrap gap-12 lg:gap-8">
                    <div className="w-full max-w-sm flex flex-col justify-center items-center py-8 px-6 bg-neutral-800 shadow-md rounded-3xl relative">
                        <h3 className="mt-2 w-full text-center text-5xl text-white border-b-2 border-neutral-700 pb-1 mb-2">PLAN BÁSICO</h3>
                        <ul className='mt-4 lg:mt-2 w-full text-center lg:text-start text-base lg:text-base font-gotham flex flex-col justify-center lg:justify-start items-center lg:items-start gap-4 lg:gap-3'>
                            <FaCircleCheck className='fill-jockey text-xl block lg:hidden'/>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Acceso multisede</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Más de 300 clases</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>App Trainingym con más de 12 rutinas</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Más de 20 instructores generales</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Masterclass de salud y bienestar</span></li>
                        </ul>
                        <div className="mt-4 w-full flex flex-col justify-center items-center">
                            <p className="text-white font-gotham-black text-5xl">$229.900</p>
                            <small className="text-sm font-gotham text-neutral-500">Por 6 meses</small>
                        </div>
                    </div>
                    <div className="w-full max-w-sm flex flex-col justify-center items-center py-8 px-6 bg-neutral-800 shadow-md rounded-3xl relative">
                        <h3 className="mt-2 w-full text-center text-5xl text-white border-b-2 border-neutral-700 pb-1 mb-2">PLAN PREMIUM</h3>
                        <ul className='mt-4 lg:mt-2 w-full text-center lg:text-start text-base lg:text-base font-gotham flex flex-col justify-center lg:justify-start items-center lg:items-start gap-4 lg:gap-3'>
                            <FaCircleCheck className='fill-jockey text-xl block lg:hidden'/>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Acceso multisede</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Más de 300 clases</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>App Trainingym con más de 12 rutinas</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Más de 20 instructores generales</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Masterclass de salud y bienestar</span></li>
                            <div className="w-full flex justify-center items-center text-center">
                                <FaPlus className='fill-jockey text-lg'/>
                            </div>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Entrenamiento personal con 1 de nuestros 12 <b className="font-gotham-black text-jockey">entrenadores cinturon negro</b></span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Planes y guías <b className="font-gotham-black text-jockey">nutricionales</b></span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Sesiones de <b className="font-gotham-black text-jockey">coaching</b> grupal para motivarte</span></li>
                        </ul>
                        <div className="mt-4 w-full flex flex-col justify-center items-center">
                            <p className="text-neutral-500 font-gotham font-light text-xl line-through decoration-neutral-600">$289.900</p>
                            <p className="text-white font-gotham-black text-5xl">$249.900</p>
                            <small className="text-sm font-gotham text-neutral-500">Por 3 meses</small>
                        </div>
                    </div>
                </div>
            </section>
            <DesafioVeranoModal iframeSrc="https://b24-gean63.bitrix24.site/crm_form_tc8ds/" isOpen={isOpen} setIsOpen={setIsOpen} />
        </Fragment>
    )
}
