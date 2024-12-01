'use client'

import { Fragment, useState } from "react";
import { motion } from 'framer-motion';
import iconBlack from '../../assets/black-friday/iconBlack.webp';
import mundo from '../../assets/black-friday/mundo.webp';
import viumi from '../../assets/black-friday/viumi.webp';
import macro from '../../assets/black-friday/macro.webp';
import getnet from '../../assets/black-friday/getnet.webp';
import { DesafioVeranoModal } from "@/components";

export const BlackFridayPreciosWrapper = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <Fragment>
            <section className="w-full lg:min-h-lvh flex flex-col lg:flex-row justify-center overflow-x-hidden">
                <motion.div
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', bounce: 0 }}
                    className="w-full lg:min-h-lvh lg:max-w-md pt-28 pb-8 lg:py-28 px-8 flex flex-col justify-center lg:justify-between items-center lg:items-stretch text-center lg:text-start"
                >
                    <div className="font-gotham text-4xl">
                        <p className="text-white">Tu oportunidad</p>
                        <p className="font-gotham-black text-white">de cambio</p>
                    </div>
                    <div className="mt-8 lg:mt-0 w-full flex justify-center">
                        <img src={iconBlack.src} alt="Black Friday Jockey Gym" className="w-48 object-contain"/>
                    </div>
                    <div className="mt-8 lg:mt-0 text-center">
                        <p className="font-gotham text-3xl text-white tracking-widest uppercase">Financiación</p>
                        <p className="mt-4 w-full bg-gradient-to-r from-indigo-400 to-rose-400 rounded-full px-4 py-2 text-white text-xl font-gotham uppercase tracking-widest">Plan anual vip</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'spring', bounce: 0 }}
                    className="grow lg:bg-[rgb(21,21,21)] relative flex flex-col px-8 lg:pl-24 pt-8 lg:pt-28"
                >
                    <img src={mundo.src} alt="Black Friday Jockey Gym" className="hidden lg:block w-48 object-contain absolute top-8 right-8"/>
                    <div className="bg-white w-full lg:max-w-sm h-0.5 rounded-full"></div>
                    <p className="mt-4 font-gotham text-xl text-white tracking-widest uppercase">Efectivo</p>
                    <div className="mt-2 w-full lg:max-w-sm flex flex-col gap-1">
                        <div className="w-full flex gap-2">
                            <p className="font-gotham lg:text-lg text-white tracking-widest uppercase"><b className="font-gotham-black text-white">1</b> Pago</p>
                            <div className="grow border-b-4 border-dotted border-white relative -top-1.5"></div>
                            <p className="font-gotham lg:text-lg text-white tracking-widest uppercase">$<b className="font-gotham-black text-white">369.900</b></p>
                        </div>
                        <div className="w-full flex gap-2">
                            <p className="font-gotham lg:text-lg text-white tracking-widest uppercase"><b className="font-gotham-black text-white">2</b> Pagos</p>
                            <div className="grow border-b-4 border-dotted border-white relative -top-1.5"></div>
                            <p className="font-gotham lg:text-lg text-white tracking-widest uppercase">$<b className="font-gotham-black text-white">190.000</b></p>
                        </div>
                        <div className="w-full flex gap-2">
                            <p className="font-gotham lg:text-lg text-white tracking-widest uppercase"><b className="font-gotham-black text-white">3</b> Pagos</p>
                            <div className="grow border-b-4 border-dotted border-white relative -top-1.5"></div>
                            <p className="font-gotham lg:text-lg text-white tracking-widest uppercase">$<b className="font-gotham-black text-white">130.000</b></p>
                        </div>
                    </div>
                    <div className="mt-8 bg-white w-full lg:max-w-sm h-0.5 rounded-full"></div>
                    <p className="mt-4 font-gotham text-xl text-white tracking-widest uppercase">Débito o transferencia</p>
                    <div className="mt-2 w-full lg:max-w-sm flex flex-col gap-1">
                        <div className="w-full flex gap-2">
                            <p className="font-gotham lg:text-lg text-white tracking-widest uppercase"><b className="font-gotham-black text-white">1</b> Pago</p>
                            <div className="grow border-b-4 border-dotted border-white relative -top-1.5"></div>
                            <p className="font-gotham lg:text-lg text-white tracking-widest uppercase">$<b className="font-gotham-black text-white">415.900</b></p>
                        </div>
                        <div className="w-full flex gap-2">
                            <p className="font-gotham lg:text-lg text-white tracking-widest uppercase"><b className="font-gotham-black text-white">2</b> Pagos</p>
                            <div className="grow border-b-4 border-dotted border-white relative -top-1.5"></div>
                            <p className="font-gotham lg:text-lg text-white tracking-widest uppercase">$<b className="font-gotham-black text-white">210.000</b></p>
                        </div>
                        <div className="w-full flex gap-2">
                            <p className="font-gotham lg:text-lg text-white tracking-widest uppercase"><b className="font-gotham-black text-white">3</b> Pagos</p>
                            <div className="grow border-b-4 border-dotted border-white relative -top-1.5"></div>
                            <p className="font-gotham lg:text-lg text-white tracking-widest uppercase">$<b className="font-gotham-black text-white">145.000</b></p>
                        </div>
                    </div>
                    <div className="mt-8 bg-white w-full lg:max-w-sm h-0.5 rounded-full"></div>
                    <p className="mt-4 font-gotham text-xl text-white tracking-widest uppercase text-center lg:text-start">Promociones</p>
                    <div className="mt-4 lg:mt-2 w-full flex flex-col lg:flex-row items-center gap-4">
                        <div className="bg-white rounded-2xl px-8 py-4 flex flex-col justify-center items-center gap-2">
                            <img src={viumi.src} alt="Black Friday Jockey Gym" className="w-20 object-contain"/>
                            <img src={macro.src} alt="Black Friday Jockey Gym" className="w-20 object-contain"/>
                        </div>
                        <div className="w-full lg:max-w-md flex flex-col gap-1">
                            <div className="w-full flex gap-2">
                                <p className="font-gotham lg:text-lg text-white tracking-widest uppercase"><b className="font-gotham-black text-white">3</b> cuotas <b className="font-gotham-black text-white">sin interés</b></p>
                                <div className="grow border-b-4 border-dotted border-white relative -top-1.5"></div>
                                <p className="font-gotham lg:text-lg text-white tracking-widest uppercase">$<b className="font-gotham-black text-white">138.333</b></p>
                            </div>
                            <div className="w-full flex gap-2">
                                <p className="font-gotham lg:text-lg text-white tracking-widest uppercase"><b className="font-gotham-black text-white">6</b> cuotas <b className="font-gotham-black text-white">sin interés</b></p>
                                <div className="grow border-b-4 border-dotted border-white relative -top-1.5"></div>
                                <p className="font-gotham lg:text-lg text-white tracking-widest uppercase">$<b className="font-gotham-black text-white">69.167</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 bg-white w-full lg:max-w-xl h-0.5 rounded-full"></div>
                    <div className="mt-6 lg:mt-4 w-full flex flex-col lg:flex-row items-center gap-4">
                        <div className="bg-white rounded-2xl px-8 py-4 flex flex-col justify-center items-center gap-2">
                            <img src={getnet.src} alt="Black Friday Jockey Gym" className="w-20 object-contain"/>
                        </div>
                        <div className="w-full lg:max-w-md flex gap-2">
                            <p className="font-gotham lg:text-lg text-white tracking-widest uppercase"><b className="font-gotham-black text-white">6</b> cuotas <b className="font-gotham-black text-white">sin interés</b></p>
                            <div className="grow border-b-4 border-dotted border-white relative -top-1.5"></div>
                            <p className="font-gotham lg:text-lg text-white tracking-widest uppercase">$<b className="font-gotham-black text-white">69.167</b></p>
                        </div>
                    </div>
                    <div className="w-full max-w-7xl flex justify-center items-center my-12 lg:mb-24">
                        <motion.button
                            whileHover={{scale:1.05, rotate: 1}}
                            type="button"
                            onClick={ () => setIsOpen(true) }
                            className="w-full py-4 px-2 lg:px-4 bg-gradient-to-r from-green-400 to-rose-400 text-white rounded-full text-center font-gotham lg:text-4xl uppercase tracking-widest"
                        >
                            Estoy listo/a para sumarme!
                        </motion.button>
                    </div>
                    <div className="lg:hidden w-full flex justify-center mb-12">
                        <img src={mundo.src} alt="Black Friday Jockey Gym" className="w-48 object-contain"/>
                    </div>
                </motion.div>
            </section>
            <DesafioVeranoModal iframeSrc="https://jockeygymtuc.bitrix24.site/crm_form3/?utm_source=landingBF" isOpen={isOpen} setIsOpen={setIsOpen} />
        </Fragment>
    )
}
