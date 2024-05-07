export const AgendarCalendario = () => {

    const fechaEvento = '2024-05-14T21:30:00';
    const fechaFin = '2024-05-14T23:00:00';
    const tituloEvento = 'Webinar gratuito - Jockey GYM';
    const descripcionEvento = 'Webinar gratuito - Jockey GYM.';
    // const urlWebinar = 'https://zoom.com/webinar';
    // URL:${urlWebinar}

    const urlEventoCalendario = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${fechaEvento}
DTEND:${fechaFin}
SUMMARY:${tituloEvento}
DESCRIPTION:${descripcionEvento}
END:VEVENT
END:VCALENDAR
    `.trim();

    return (
        <div className="mt-8 w-full text-center flex justify-center items-center">
            <a
                href={`data:text/calendar;charset=utf-8,${encodeURIComponent(urlEventoCalendario)}`}
                download={`${tituloEvento}.ics`}
                className="bg-jockey w-full py-3 lg:py-4 px-4 lg:px-8 rounded-lg text-xl lg:text-2xl text-white font-gotham-black"
                target="_blank"
            >
                Agendar en mi calendario
            </a>
        </div>
    );
};
