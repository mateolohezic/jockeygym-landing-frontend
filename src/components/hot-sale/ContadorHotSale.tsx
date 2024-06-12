'use client'

import { useEffect, useState } from "react";

export const ContadorHotSale = () => {

    const [days, setDays] = useState<number>();
    const [hours, setHours] = useState<number>();
    const [minutes, setMinutes] = useState<number>();
    const [seconds, setSeconds] = useState<number>();

    const calculateTimeLeft = () => {
        const fechaWebinar:string = '2024-06-06T23:59:59';
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

    useEffect(() => {
        const isClosed = localStorage.getItem('WHC') === 'true';
        if(!isClosed){
            localStorage.setItem('WHC', 'true');
        }
    }, [])
    

    return (
        days &&
        <section className="w-full flex justify-center items-end gap-6 sm:gap-8 lg:gap-20">
            <div className="flex flex-col justify-start items-center">
                <span className="text-6xl lg:text-8xl text-hotsale">{days}</span>
                <span className="text-xs lg:text-base font-gotham text-white">Días</span>
            </div>
            <div className="flex flex-col justify-start items-center">
                <span className="text-6xl lg:text-8xl text-hotsale">{hours}</span>
                <span className="text-xs lg:text-base font-gotham text-white">Horas</span>
            </div>
            <div className="flex flex-col justify-start items-center">
                <span className="text-6xl lg:text-8xl text-hotsale">{minutes}</span>
                <span className="text-xs lg:text-base font-gotham text-white">Minutos</span>
            </div>
            <div className="flex flex-col justify-start items-center">
                <span className="text-6xl lg:text-8xl text-hotsale">{seconds}</span>
                <span className="text-xs lg:text-base font-gotham text-white">Segundos</span>
            </div>
        </section>
    );
};