'use client'

import { Fragment, useState } from "react";
import Link from "next/link";
import { motion } from 'framer-motion';
import { DesafioVeranoModal, SwiperBarrioSur } from "@/components";
import barrio_sur from '../../assets/black-friday/barrio_sur.webp';
import iconBlack from '../../assets/black-friday/iconBlack.webp';

export const BarrioSurWrapper = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <Fragment>
            <section className="w-full min-h-lvh flex flex-col justify-center items-center relative">
                <div className={`absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-[rgba(26,26,26,0.5)] via-[rgba(26,26,26,0.75)] to-[rgba(26,26,26,1)]`}></div>
                <div className="absolute top-0 left-0 size-full z-0">
                    <SwiperBarrioSur/>
                </div>
                <div className="w-full max-w-5xl px-4 lg:px-0 rounded-xl flex flex-col justify-start items-center z-20">
                    <p className="font-gotham-black tracking-widest text-xl lg:text-3xl uppercase text-white relative lg:right-[44px]">Nueva sucursal</p>
                    <img src={barrio_sur.src} alt="Black Friday Jockey Gym" className="mt-4 w-full object-contain"/>
                </div>
                <div className="flex flex-col justify-center items-center text-center left-0 right-0 mx-auto absolute bottom-8 z-20">
                    <p className="bg-white px-4 font-gotham-black tracking-widest text-3xl lg:text-4xl uppercase relative">Preventa</p>
                    <p className="mt-1 font-gotham tracking-widest text-3xl lg:text-4xl uppercase text-white relative">Exclusiva</p>
                </div>
            </section>
            <div className="w-full max-w-7xl px-4 xl:px-0 flex flex-col justify-center items-center my-12 lg:my-24">
                <motion.button
                    whileHover={{scale:1.05, rotate: 1}}
                    type="button"
                    onClick={ () => setIsOpen(true) }
                    className="w-full py-4 px-4 bg-gradient-to-r from-cyan-500 via-indigo-500 lg:via-teal-300 to-rose-400 lg:to-green-400 text-white rounded-full text-center font-gotham-black lg:font-gotham lg:text-4xl uppercase tracking-widest"
                >
                    Asegura tu lugar a un precio promocional
                </motion.button>
            </div>
            <div className="w-full max-w-7xl px-4 xl:px-0 mb-12 lg:mb-24">
                <div className="w-full aspect-video rounded-xl overflow-hidden relative">
                    <iframe
                        src="https://www.youtube.com/embed/Zpx8WS_-bmM?si=GUk2NvWKhPt2sG-_"
                        title="Nuevos Jockey Gym Barrio Sur"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        frameBorder="0"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="size-full absolute top-0 left-0"
                    />
                </div>
            </div>
            <div className="w-full max-w-7xl px-4 xl:px-0 flex flex-col justify-center items-center mb-12">
                <div className="w-full flex flex-col justify-center lg:justify-start items-center lg:items-start text-center lg:text-start">
                    <p className="text-2xl lg:text-7xl font-gotham-black text-white uppercase leading-none">50 cupos disponibles</p>
                    <p className="text-3xl lg:text-8xl font-gotham-black text-white uppercase leading-none">un mes de entrenamiento</p>
                    <p className="text-4xl lg:text-9xl text-white uppercase leading-none">gratis</p>
                </div>
                <div className="w-full h-1 rounded-full bg-gradient-to-r from-teal-300 via-lime-300 to-rose-400 my-8 lg:my-12"></div>
                <div className="w-full flex flex-col justify-center lg:justify-start items-center lg:items-start text-center lg:text-start">
                    <p className="text-2xl lg:text-7xl font-gotham-black text-white uppercase leading-none">Súmate a la preventa</p>
                    <p className="mt-4 text-2xl lg:text-5xl font-gotham-black text-white uppercase leading-none">Reservá tu lugar en el mejor gimnasio de Barrio Sur a un precio promocional exclusivo que no volverá a estar disponible.</p>
                    <p className="mt-4 text-2xl lg:text-5xl font-gotham-black text-white uppercase leading-none">Disfrutás de un mes de entrenamiento gratis en cualquiera de nuestras otras sedes mientras esperas la apertura.</p>
                </div>
            </div>
            <div className="w-full max-w-7xl px-4 xl:px-0 flex flex-col justify-center items-center my-12 lg:my-24">
                <motion.button
                    whileHover={{scale:1.05, rotate: 1}}
                    type="button"
                    onClick={ () => setIsOpen(true) }
                    className="w-full py-4 px-4 bg-gradient-to-r from-cyan-500 lg:via-indigo-500 via-teal-300 lg:to-rose-400 to-green-400 text-white rounded-full text-center font-gotham-black lg:font-gotham lg:text-4xl uppercase tracking-widest"
                >
                    Quiero reservar mi cupo
                </motion.button>
            </div>
            <section className="w-full max-w-7xl px-4 xl:px-0 flex flex-col justify-center items-center gap-8 mb-12 lg:mb-24">
                <div className="grow">
                    <p className="text-2xl lg:text-6xl font-gotham-black text-white uppercase leading-none">Anual VIP fundador</p>
                </div>
                <div className="w-fit flex flex-col justify-center items-center">
                    <p className="font-gotham text-xl text-white tracking-widest uppercase">Efectivo</p>
                    <div className="mt-2 w-full lg:max-w-sm flex flex-col gap-1">
                        <div className="w-full flex gap-2">
                            <p className="font-gotham lg:text-lg text-white tracking-widest uppercase"><b className="font-gotham-black text-white">1</b> Pago</p>
                            <div className="grow border-b-4 border-dotted border-white relative -top-1.5"></div>
                            <p className="font-gotham lg:text-lg text-white tracking-widest uppercase">$<b className="font-gotham-black text-white">389.900</b></p>
                        </div>
                        <div className="w-full flex gap-2">
                            <p className="font-gotham lg:text-lg text-white tracking-widest uppercase"><b className="font-gotham-black text-white">2</b> Pagos</p>
                            <div className="grow border-b-4 border-dotted border-white relative -top-1.5"></div>
                            <p className="font-gotham lg:text-lg text-white tracking-widest uppercase">$<b className="font-gotham-black text-white">200.000</b></p>
                        </div>
                    </div>
                    <div className="mt-8 bg-white w-full lg:max-w-sm h-0.5 rounded-full"></div>
                    <p className="mt-4 font-gotham text-xl text-white tracking-widest uppercase">Débito o transferencia</p>
                    <div className="mt-2 w-full lg:max-w-sm flex flex-col gap-1">
                        <div className="w-full flex gap-2">
                            <p className="font-gotham lg:text-lg text-white tracking-widest uppercase"><b className="font-gotham-black text-white">1</b> Pago</p>
                            <div className="grow border-b-4 border-dotted border-white relative -top-1.5"></div>
                            <p className="font-gotham lg:text-lg text-white tracking-widest uppercase">$<b className="font-gotham-black text-white">439.900</b></p>
                        </div>
                        <div className="w-full flex gap-2">
                            <p className="font-gotham lg:text-lg text-white tracking-widest uppercase"><b className="font-gotham-black text-white">2</b> Pagos</p>
                            <div className="grow border-b-4 border-dotted border-white relative -top-1.5"></div>
                            <p className="font-gotham lg:text-lg text-white tracking-widest uppercase">$<b className="font-gotham-black text-white">225.000</b></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full max-w-7xl px-4 xl:px-0 flex flex-col justify-center items-center gap-4 lg:gap-8 mb-12 lg:mb-24">
                <p className="text-xl lg:text-6xl font-gotham-black text-white uppercase leading-none">¡No te quedes sin tu cupo!</p>
                <div className="w-full flex items-center gap-4">
                    <div className="grow p-0.5 lg:p-2 h-6 lg:h-20 bg-white rounded-full flex justify-start items-center">
                        <div className="w-[57%] h-full bg-jockey rounded-full"></div>
                    </div>
                    <p className="text-2xl lg:text-6xl font-gotham-black text-white">57%</p>
                </div>
            </section>
            <section className="w-full max-w-7xl px-4 xl:px-0 flex flex-col lg:flex-row justify-center gap-12 lg:gap-8 mb-12 lg:mb-24">
                <div className="w-full lg:max-w-md xl:max-w-xl">
                    <p className="text-5xl lg:text-7xl xl:text-8xl font-gotham text-white text-center lg:text-start">Descubri<span className="block"></span> nuestra <b className="block font-gotham-black text-white">nueva<span className="block"></span> ubicación</b></p>
                </div>
                <div className="w-full lg:w-auto lg:grow aspect-square lg:aspect-auto rounded-xl overflow-hidden relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.020656601732!2d-65.21079752381252!3d-26.83929529014171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0956ef0721%3A0x20c752d61734a910!2sBuenos%20Aires%20632%2C%20T4000IJN%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1734790149097!5m2!1ses-419!2sar"
                        className="size-full absolute top-0 left-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>
            <div className="w-full max-w-7xl px-4 lg:px-0 flex justify-center lg:justify-end mb-12 lg:mb-24">
                <img src={iconBlack.src} alt="Black Friday Jockey Gym" className="w-44 object-contain"/>
            </div>
            <p className="w-full max-w-7xl px-4 mb-8 lg:mb-12 text-sm lg:text-2xl font-gotham-black uppercase text-center text-white">Promoción válida para nuevos socios.</p>
            <DesafioVeranoModal iframeSrc="https://b24-bbzf5p.bitrix24.site/?utm_source=landingBS" isOpen={isOpen} setIsOpen={setIsOpen} />
        </Fragment>
    )
}
