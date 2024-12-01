'use client'

import { Fragment, useState } from "react";
import { motion } from 'framer-motion';
import { FaCircleCheck, FaPlus } from "react-icons/fa6";
import { ContadorBlackFriday, DesafioVeranoModal, SwiperSedes } from "@/components";
import portada from '../../assets/black-friday/portada_black_friday.webp';
import planes from '../../assets/black-friday/planes.webp';
import circulo from '../../assets/black-friday/circulo.webp';
import icon from '../../assets/black-friday/icon.webp';
import info_1 from '../../assets/black-friday/info_1.webp';
import info_2 from '../../assets/black-friday/info_2.webp';
import sede_1 from '../../assets/black-friday/sede_1.webp';
import sede_2 from '../../assets/black-friday/sede_2.webp';
import sede_3 from '../../assets/black-friday/sede_3.webp';
import sede_4 from '../../assets/black-friday/sede_4.webp';
import sede_5 from '../../assets/black-friday/sede_5.webp';
import sede_6 from '../../assets/black-friday/sede_6.webp';
import barrio_sur from '../../assets/black-friday/barrio_sur.webp';
import Link from "next/link";

export const BlackFridayWrapper = () => {

    const [isOpenA, setIsOpenA] = useState<boolean>(false)
    const [isOpenB, setIsOpenB] = useState<boolean>(false)

    return (
        <Fragment>
            <section className="w-full pt-28 max-w-7xl px-4 xl:px-0 flex flex-col items-center justify-center relative overflow-x-hidden">
                <motion.img
                    initial={{ x:'50%', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    src={portada.src}
                    alt="Black Friday Jockey Gym"
                    className="size-full object-contain"
                />
            </section>
            <section className="w-full max-w-7xl px-4 xl:px-0 flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-4 my-12 lg:my-24">
                <div className="w-full max-w-3xl flex flex-col justify-center items-center gap-12 lg:gap-24">
                    <div className="w-full flex flex-col justify-center items-center text-center text-2xl font-gotham-black">
                        <p className="text-white font-gotham">Si estas buscando una oportunidad que te garantice una</p>
                        <p className="text-white"><b className="bg-white px-2 block lg:inline">mejor calidad de vida</b> <b className="text-white font-black uppercase block lg:inline">esta es tu oportunidad</b></p>
                    </div>
                    <motion.img
                        initial={{ x: '-75%', opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        src={planes.src}
                        alt="Black Friday Jockey Gym"
                        className="w-full max-w-lg object-contain"
                    />
                </div>
                <div className="w-full lg:w-auto lg:grow aspect-square relative">
                    <div className="size-full flex justify-center items-center absolute top-0 left-0 z-0">
                        <motion.img
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, type: 'spring', bounce: 0, delay: 0.5 }}
                            src={icon.src}
                            alt="Black Friday Jockey Gym"
                            className="size-full object-contain blur-md opacity-50"
                        />
                    </div>
                    <motion.img
                        initial={{ scale: 0.1, rotate: -720, opacity: 0 }}
                        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, type: 'spring', bounce: 0.5 }}
                        src={circulo.src}
                        alt="Black Friday Jockey Gym"
                        className="size-full object-contain absolute top-0 left-0 z-10"
                    />
                </div>
            </section>
            <div className="w-full max-w-7xl px-4 xl:px-0 flex flex-col justify-center items-center my-8 lg:my-0">
                <motion.button
                    whileHover={{scale:1.05, rotate: 1}}
                    type="button"
                    onClick={ () => setIsOpenA(true) }
                    className="w-full py-4 px-4 bg-gradient-to-r from-green-300 via-indigo-400 to-rose-400 text-white rounded-full text-center font-gotham text-2xl lg:text-4xl uppercase tracking-widest"
                >
                    Quiero ser parte
                </motion.button>
            </div>
            <section className="w-full max-w-7xl px-4 xl:px-0 flex justify-center items-center my-12 lg:my-24">
                <img src={info_1.src} alt="Black Friday Jockey Gym" className="w-full max-w-2xl object-contain"/>
            </section>
            <div className="w-full max-w-7xl px-4 xl:px-0 flex flex-col justify-center items-center my-8 lg:my-0">
                <Link href={'/black-friday/precios'} className="w-full py-4 px-4 bg-white rounded-full text-center font-gotham text-2xl lg:text-4xl uppercase tracking-widest">Ver precios</Link>
            </div>
            <section className="w-full max-w-7xl px-4 xl:px-0 flex justify-center items-center my-12 lg:my-24">
                <img src={info_2.src} alt="Black Friday Jockey Gym" className="w-full max-w-2xl object-contain"/>
            </section>
            <div className="w-full max-w-7xl px-4 xl:px-0 flex flex-col justify-center items-center my-8 lg:my-0">                
                <motion.button
                    whileHover={{scale:1.05, rotate: 1}}
                    type="button"
                    onClick={ () => setIsOpenB(true) }
                    className="w-full py-4 px-4 bg-gradient-to-r from-teal-500 via-amber-200 to-rose-400 text-white rounded-full text-center font-gotham text-2xl lg:text-4xl uppercase tracking-widest"
                >
                    ¡Quiero más info!
                </motion.button>
            </div>
            <section className="w-full max-w-7xl px-4 xl:px-0 flex flex-col justify-center items-center my-12 lg:my-24">
                <h2 className="w-full text-4xl lg:text-5xl text-center text-white">Conoce nuestros planes</h2>
                <div className="mt-8 lg:mt-12 w-full flex justify-center items-start flex-wrap lg:flex-nowrap gap-12 lg:gap-8">
                    <div className="w-full max-w-sm flex flex-col justify-center items-center py-8 px-6 bg-neutral-800 shadow-md rounded-3xl relative">
                        <p className="w-fit px-4 py-0.5 rounded-full bg-gradient-to-r from-teal-500 to-green-300 text-white font-gotham-black absolute top-0 left-0 right-0 mx-auto -translate-y-1/2">Más barato</p>
                        <h3 className="mt-2 w-full text-center text-5xl text-white border-b-2 border-neutral-700 pb-1 mb-2">ANUAL VIP</h3>
                        <ul className='mt-4 lg:mt-2 w-full text-center lg:text-start text-base lg:text-base font-gotham flex flex-col justify-center lg:justify-start items-center lg:items-start gap-4 lg:gap-3'>
                            <FaCircleCheck className='fill-jockey text-xl block lg:hidden'/>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Masterclass</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>12 sesiones de sauna</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Reto 6 semanas y planes de entrenamiento por objetivos</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Mails</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Grupo de Telegram</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Plataforma Trainingym</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Extension de hasta 45 dias</span></li>
                        </ul>
                        <div className="mt-4 w-full flex flex-col justify-center items-center">
                            <p className="text-neutral-500 font-gotham font-light text-xl line-through decoration-neutral-600">$699.000</p>
                            <p className="text-white font-gotham-black text-5xl">$415.900</p>
                        </div>
                    </div>
                    <div className="w-full max-w-sm flex flex-col justify-center items-center py-8 px-6 bg-neutral-800 shadow-md rounded-3xl relative">
                        <p className="w-fit px-4 py-0.5 rounded-full bg-gradient-to-r from-green-300 to-rose-400 text-white font-gotham-black absolute top-0 left-0 right-0 mx-auto -translate-y-1/2">Mejor opción</p>
                        <h3 className="mt-2 w-full text-center text-5xl text-white border-b-2 border-neutral-700 pb-1 mb-2">ANUAL PLUS</h3>
                        <ul className='mt-4 lg:mt-2 w-full text-center lg:text-start text-base lg:text-base font-gotham flex flex-col justify-center lg:justify-start items-center lg:items-start gap-4 lg:gap-3'>
                            <FaCircleCheck className='fill-jockey text-xl block lg:hidden'/>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Masterclass</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>12 sesiones de sauna</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Reto 6 semanas y planes de entrenamiento por objetivos</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Mails</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Grupo de Telegram</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Plataforma Trainingym</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Extension de hasta 45 dias</span></li>
                            <div className="w-full flex justify-center items-center text-center">
                                <FaPlus className='fill-jockey text-lg'/>
                            </div>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Entrenamiento <b className="font-gotham-black text-jockey">personalizado</b> en equipo (cupos de hasta 3 personas)</span></li>
                        </ul>
                        <div className="mt-4 w-full flex flex-col justify-center items-center">
                            <p className="text-neutral-500 font-gotham font-light text-xl line-through decoration-neutral-600">$1.599.000</p>
                            <p className="text-white font-gotham-black text-5xl">$949.000</p>
                        </div>
                    </div>
                    <div className="w-full max-w-sm flex flex-col justify-center items-center py-8 px-6 bg-neutral-800 shadow-md rounded-3xl relative">
                        <p className="w-fit px-4 py-0.5 rounded-full bg-gradient-to-r from-rose-400 to-indigo-400 text-white font-gotham-black absolute top-0 left-0 right-0 mx-auto -translate-y-1/2">V.I.P.</p>
                        <h3 className="mt-2 w-full text-center text-5xl text-white border-b-2 border-neutral-700 pb-1 mb-2">ANUAL ELITE</h3>
                        <ul className='mt-4 lg:mt-2 w-full text-center lg:text-start text-base lg:text-base font-gotham flex flex-col justify-center lg:justify-start items-center lg:items-start gap-4 lg:gap-3'>
                            <FaCircleCheck className='fill-jockey text-xl block lg:hidden'/>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Masterclass</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>12 sesiones de sauna</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Reto 6 semanas y planes de entrenamiento por objetivos</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Mails</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Grupo de Telegram</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Plataforma Trainingym</span></li>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Extension de hasta 45 dias</span></li>
                            <div className="w-full flex justify-center items-center text-center">
                                <FaPlus className='fill-jockey text-lg'/>
                            </div>
                            <li className='w-full flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-jockey hidden lg:block text-xl mr-1 shrink-0'/><span className='w-full text-white'>Entrenamiento <b className="font-gotham-black text-jockey">personalizado 1 a 1</b></span></li>
                        </ul>
                        <div className="mt-4 w-full flex flex-col justify-center items-center">
                            <p className="text-neutral-500 font-gotham font-light text-xl line-through decoration-neutral-600">USD 2.500</p>
                            <p className="text-white font-gotham-black text-5xl">USD 1.500</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full max-w-7xl px-4 xl:px-0 flex flex-col justify-center items-center my-12 lg:mt-0 lg:mb-24">
                <motion.button
                    whileHover={{scale:1.05, rotate: 1}}
                    type="button"
                    onClick={ () => setIsOpenA(true) }
                    className="w-full py-4 px-4 bg-gradient-to-r from-rose-400 to-indigo-400 text-white rounded-full text-center font-gotham lg:text-4xl uppercase tracking-widest"
                >
                    Estoy listo/a para sumarme!
                </motion.button>
            </div>
            <section className="w-full lg:min-h-lvh flex flex-col justify-center items-center relative">
                <div className={`absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-t from-[rgba(26,26,26,0.5)] via-[rgba(26,26,26,0.75)] to-[rgba(26,26,26,1)]`}></div>
                <div className="absolute top-0 left-0 size-full z-0">
                    <SwiperSedes/>
                </div>
                <div className="w-full max-w-7xl lg:min-h-lvh py-24 px-4 xl:px-0 flex flex-col justify-center items-center relative z-20">
                    <div className="w-full grow flex flex-col justify-center items-center">
                        <h2 className="flex flex-col justify-center items-center">
                            <span className="text-5xl lg:text-7xl text-white"> OFERTA EXCLUSIVA </span>
                            <span className="font-gotham-black text-xl lg:text-3xl text-white">POR TIEMPO LIMITADO</span>
                        </h2>
                        <div className="mt-8 lg:mt-12 w-full">
                            <ContadorBlackFriday />
                        </div>
                    </div>
                    <div className="w-full mt-16 lg:mt-0 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-end gap-8 font-gotham">
                        <div className="w-full lg:w-auto flex flex-col justify-center lg:justify-start items-center lg:items-start">
                            <span className="text-4xl text-white font-gotham-black">+30</span>
                            <span className="text-2xl text-white opacity-90">años de experiencia</span>
                        </div>
                        <div className="w-full lg:w-auto flex flex-col justify-center lg:justify-start items-center lg:items-start">
                            <span className="text-4xl text-white font-gotham-black">6</span>
                            <span className="text-2xl text-white opacity-90">sedes en la provincia</span>
                        </div>
                        <div className="w-full lg:w-auto flex flex-col justify-center lg:justify-start items-center lg:items-start">
                            <span className="text-4xl text-white font-gotham-black">+12000</span>
                            <span className="text-2xl text-white opacity-90">socios confian en nosotros</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full max-w-7xl px-4 xl:px-0 grid grid-cols-1 lg:grid-cols-3 justify-center gap-4 my-12 lg:my-24">
                <div className="w-full aspect-[4/3] rounded-xl relative overflow-hidden">
                    <img src={sede_1.src} alt="Black Friday Jockey Gym" className="size-full object-cover absolute top-0 left-0 z-10"/>
                </div>
                <div className="w-full aspect-[4/3] rounded-xl relative overflow-hidden">
                    <img src={sede_2.src} alt="Black Friday Jockey Gym" className="size-full object-cover absolute top-0 left-0 z-10"/>
                </div>
                <div className="w-full aspect-[4/3] rounded-xl relative overflow-hidden">
                    <img src={sede_3.src} alt="Black Friday Jockey Gym" className="size-full object-cover absolute top-0 left-0 z-10"/>
                </div>
                <div className="w-full aspect-[4/3] rounded-xl relative overflow-hidden">
                    <img src={sede_4.src} alt="Black Friday Jockey Gym" className="size-full object-cover absolute top-0 left-0 z-10"/>
                </div>
                <div className="w-full aspect-[4/3] rounded-xl relative overflow-hidden">
                    <img src={sede_5.src} alt="Black Friday Jockey Gym" className="size-full object-cover absolute top-0 left-0 z-10"/>
                </div>
                <div className="w-full aspect-[4/3] rounded-xl relative overflow-hidden">
                    <img src={sede_6.src} alt="Black Friday Jockey Gym" className="size-full object-cover absolute top-0 left-0 z-10"/>
                </div>
                <div className="mt-8 w-full rounded-xl flex flex-col justify-start items-center">
                    <p className="hidden lg:block font-gotham tracking-widest text-xl uppercase text-white relative left-6">Nueva sucursal</p>
                    <img src={barrio_sur.src} alt="Black Friday Jockey Gym" className="mt-2 w-full object-contain"/>
                    <p className="mt-8 lg:mt-4 bg-white px-4 font-gotham-black tracking-widest text-3xl lg:text-xl uppercase relative">Preventa</p>
                    <p className="mt-1 font-gotham tracking-widest text-3xl lg:text-xl uppercase text-white relative">Exclusiva</p>
                </div>
                <div className="mt-4 lg:mt-8 w-full lg:pl-8 lg:col-span-2 text-center lg:text-start">
                    <p className="text-white text-2xl lg:text-4xl font-gotham">Con más sucursales cerca tuyo, te ofrecemos <b className="text-white font-gotham-black">calidad, comodidad, y la mejor experiencia en cada entrenamiento.</b></p>
                </div>
            </section>
            <DesafioVeranoModal iframeSrc="https://jockeygymtuc.bitrix24.site/crm_form3/?utm_source=landingBF" isOpen={isOpenA} setIsOpen={setIsOpenA} />
            <DesafioVeranoModal iframeSrc="https://jockeygymtuc.bitrix24.site/crm_form_dcuvx/?utm_source=landingBF" isOpen={isOpenB} setIsOpen={setIsOpenB} />
        </Fragment>
    )
}
