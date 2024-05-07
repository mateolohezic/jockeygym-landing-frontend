'use client'

import { useEffect, useState } from "react";

export const ContadorWebinar = () => {

    const [days, setDays] = useState<number>();
    const [hours, setHours] = useState<number>();
    const [minutes, setMinutes] = useState<number>();
    const [seconds, setSeconds] = useState<number>();

    const calculateTimeLeft = () => {
        const fechaWebinar:string = '2024-05-14T21:00:00';
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
        days &&
        <section className="mt-12 w-full flex justify-between sm:justify-center items-end sm:gap-12 lg:gap-20 px-4 lg:px-0">
            <div className="flex flex-col justify-start items-center">
                <span className="text-6xl text-jockey">{days}</span>
                <span className="text-base font-gotham">Días</span>
            </div>
            <div className="flex flex-col justify-start items-center">
                <span className="text-6xl text-jockey">{hours}</span>
                <span className="text-base font-gotham">Horas</span>
            </div>
            <div className="flex flex-col justify-start items-center">
                <span className="text-6xl text-jockey">{minutes}</span>
                <span className="text-base font-gotham">Minutos</span>
            </div>
            <div className="flex flex-col justify-start items-center">
                <span className="text-6xl text-jockey">{seconds}</span>
                <span className="text-base font-gotham">Segundos</span>
            </div>
        </section>
    );
};