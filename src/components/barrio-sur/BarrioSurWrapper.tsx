'use client'

import { Fragment, useState } from "react";
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
                    className="w-full py-4 px-4 bg-gradient-to-r from-cyan-500 via-teal-300 to-green-400 text-white rounded-full text-center font-gotham lg:text-4xl uppercase tracking-widest"
                >
                    Asegura tu lugar a un precio promocional
                </motion.button>
            </div>
            <div className="w-full max-w-7xl px-4 xl:px-0 flex flex-col justify-center items-center mb-12 lg:mb-24">
                <div className="w-full flex flex-col justify-center lg:justify-start items-center lg:items-start text-center lg:text-start">
                    <p className="text-2xl lg:text-7xl font-gotham-black text-white uppercase leading-none">Primeros 50 cupos</p>
                    <p className="text-3xl lg:text-8xl font-gotham-black text-white uppercase leading-none">sin cargo</p>
                    <p className="text-4xl lg:text-9xl text-white uppercase leading-none">hasta fecha apertura</p>
                </div>
                <div className="w-full h-1 rounded-full bg-gradient-to-r from-teal-300 via-lime-300 to-rose-400 my-8 lg:my-12"></div>
                <div className="w-full flex flex-col justify-center lg:justify-start items-center lg:items-start text-center lg:text-start">
                    <p className="text-2xl lg:text-7xl font-gotham-black text-white uppercase leading-none">Segundos 50 cupos</p>
                    <p className="text-3xl lg:text-8xl font-gotham-black text-white uppercase leading-none">50% de descuento</p>
                    <p className="text-4xl lg:text-9xl text-white uppercase leading-none">En todas nuestras instalaciones</p>
                    <p className="text-4xl lg:text-9xl text-white uppercase leading-none">Hasta fecha apertura</p>
                </div>
            </div>
            <div className="w-full max-w-7xl px-4 lg:px-0 flex justify-center lg:justify-end mb-12 lg:mb-24">
                <img src={iconBlack.src} alt="Black Friday Jockey Gym" className="w-44 object-contain"/>
            </div>
            <p className="w-full max-w-7xl px-4 mb-8 lg:mb-12 text-sm lg:text-2xl font-gotham-black uppercase text-center text-white">Promoción válida para nuevos socios.</p>
            <DesafioVeranoModal iframeSrc="https://jockeygymtuc.bitrix24.site/crm_form3/?utm_source=landingBF" isOpen={isOpen} setIsOpen={setIsOpen} />
        </Fragment>
    )
}
