'use client'

import { Fragment, useEffect, useState } from "react";

export const ContadorEvento = () => {

    const [days, setDays] = useState<number>();
    const [hours, setHours] = useState<number>();
    const [minutes, setMinutes] = useState<number>();
    const [seconds, setSeconds] = useState<number>();

    const calculateTimeLeft = () => {
        const fechaWebinar:string = '2024-10-25T23:59:59';
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

    return (
        <section className="mt-4 lg:mt-6 w-full font-gotham flex justify-center items-end gap-6 sm:gap-8 lg:gap-16 min-h-14 lg:min-h-24">
            {
                days &&
                <Fragment>
                    <div className="flex flex-col justify-start items-center">
                        <span className="text-4xl lg:text-7xl font-gotham-black">{days}</span>
                        <span className="text-xs lg:text-base font-black uppercase">Días</span>
                    </div>
                    <div className="flex flex-col justify-start items-center">
                        <span className="text-4xl lg:text-7xl font-gotham-black">{hours}</span>
                        <span className="text-xs lg:text-base font-black uppercase">Horas</span>
                    </div>
                    <div className="flex flex-col justify-start items-center">
                        <span className="text-4xl lg:text-7xl font-gotham-black">{minutes}</span>
                        <span className="text-xs lg:text-base font-black uppercase">Minutos</span>
                    </div>
                    <div className="flex flex-col justify-start items-center">
                        <span className="text-4xl lg:text-7xl font-gotham-black">{seconds}</span>
                        <span className="text-xs lg:text-base font-black uppercase">Segundos</span>
                    </div>
                </Fragment>
            }
        </section>
    );
};