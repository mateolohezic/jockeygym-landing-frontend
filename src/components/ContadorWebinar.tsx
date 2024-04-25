'use client'

import { useEffect, useState } from "react";

export const ContadorWebinar = () => {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const calculateTimeLeft = () => {
        const fechaWebinar:string = '2024-05-03T21:00:00'
        const difference = new Date(fechaWebinar) - new Date();
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
        <section className="mt-12 w-full flex justify-center items-end gap-20">
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