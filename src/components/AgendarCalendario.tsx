export const AgendarCalendario = () => {
    
    const fechaEvento = '2024-05-03T21:00:00';
    const tituloEvento = 'Webinar gratuito - Jockey GYM';
    const descripcionEvento = 'Este es un webinar gratuito sobre el tema X. Haz clic en el enlace para unirte virtualmente.';
    const urlWebinar = 'https://zoom.com/webinar';

    const urlEventoCalendario = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${fechaEvento}
SUMMARY:${tituloEvento}
DESCRIPTION:${descripcionEvento}
URL:${urlWebinar}
END:VEVENT
END:VCALENDAR
    `.trim();

    return (
        <div className="mt-8 w-full text-center flex justify-center items-center">
            <a
                href={`data:text/calendar;charset=utf-8,${encodeURIComponent(urlEventoCalendario)}`}
                download={`${tituloEvento}.ics`}
                className="bg-jockey w-full py-4 px-8 rounded-lg text-2xl text-white font-gotham-black"
                target="_blank"
            >
                Agendar en mi calendario
            </a>
        </div>
    );
};
