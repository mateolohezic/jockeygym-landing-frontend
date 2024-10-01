'use client'

import { FaCalendarPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";

export const HeaderDesafio = () => {
    
    const pathname = usePathname()

    const [days, setDays] = useState<number>();
    const [hours, setHours] = useState<number>();
    const [minutes, setMinutes] = useState<number>();
    const [seconds, setSeconds] = useState<number>();

    const calculateTimeLeft = () => {
        const fechaWebinar:string = '2024-10-14T23:59:59';
        const fecha:any = new Date(fechaWebinar);
        const hoy:any = new Date();
        const difference = fecha - hoy;
        if (difference > 0) {
            const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hoursLeft = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesLeft = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const secondsLeft = Math.floor((difference % (1000 * 60)) / 1000);
            setDays(daysLeft);
            setHours(hoursLeft);
            setMinutes(minutesLeft);
            setSeconds(secondsLeft);
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            calculateTimeLeft();
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const [closed, setClosed] = useState(false)
    
    useEffect(() => {
        const isClosed = localStorage.getItem('DVHC') === 'true';
        setClosed(isClosed);
    }, []);

    useEffect(() => {
        if(pathname === '/desafio-de-verano/' || pathname === '/desafio-de-verano/inscripto/'){
            setClosed(true);
        }
    }, [pathname])
    

    const headerProperties = {
        expanded: 'opacity-100 z-50',
        hidden: 'opacity-0 -translate-y-[100%] z-10'
    }

    if(!days) return null

    return (
        <div className={`fixed top-0 w-full ${ closed ? 'z-10' : 'z-50'}`} data-aos="fade-down" data-aos-duration="300" data-aos-easing="ease-in-out">
            <header className={`w-full bg-jockey absolute top-0 left-0 px-4 xl:px-0 py-4 flex flex-col justify-center items-center shadow-md ${ closed ? headerProperties.hidden : headerProperties.expanded } transition-all duration-300 ease-in-out`}>
                <div className="w-full xl:px-4 flex justify-end items-center">
                    <button type="button" onClick={ () => {setClosed(true)}}>
                        <IoClose className="fill-white text-2xl"/>
                    </button>
                </div>
                <div className="w-full max-w-7xl py-0 flex flex-col lg:flex-row justify-center lg:justify-between items-center">
                    <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start text-center lg:text-start">
                        <h2 className="text-white text-base lg:text-base font-gotham">DESAFIO DE VERANO</h2>
                        <p className="text-white text-2xl lg:text-5xl">Podes perder hasta 10 Kg</p>
                        <p className="text-white text-2xl lg:text-5xl">antes de que termine el año</p>
                        <p className="text-white text-sm lg:text-base font-gotham flex justify-center lg:justify-start items-center gap-2"><FaCalendarPlus className="fill-white relative -top-[2px]"/>LUNES 14 DE OCTUBRE</p>
                    </div>
                    <div className="mt-8 lg:mt-0 w-fit flex justify-center items-end gap-4">
                        <div className="flex flex-col justify-start items-center">
                            <span className="text-5xl lg:text-6xl text-white">{days}</span>
                            <span className="text-xs font-gotham text-white">Días</span>
                        </div>
                        <div className="flex flex-col justify-start items-center">
                            <span className="text-5xl lg:text-6xl text-white">{hours}</span>
                            <span className="text-xs font-gotham text-white">Horas</span>
                        </div>
                        <div className="flex flex-col justify-start items-center">
                            <span className="text-5xl lg:text-6xl text-white">{minutes}</span>
                            <span className="text-xs font-gotham text-white">Minutos</span>
                        </div>
                        <div className="flex flex-col justify-start items-center">
                            <span className="text-5xl lg:text-6xl text-white">{seconds}</span>
                            <span className="text-xs font-gotham text-white">Segundos</span>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0 w-fit flex justify-center items-center">
                        <Link href={'/desafio-de-verano'} onClick={()=>{setClosed(!closed)}} className="bg-black text-white text-xl px-8 py-2 rounded-3xl hover:bg-neutral-800 hover:scale-105 transition-all duration-300 ease-in-out">INSCRIBIRME AHORA</Link>
                    </div>
                </div>
            </header>
        </div>
    )
}
