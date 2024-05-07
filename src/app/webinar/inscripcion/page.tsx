// import { InscripcionWebinar } from '@/components';
import { FaAngleDown, FaCalendarPlus, FaHeartCircleCheck, FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import portada from '../../../assets/webinar/portada_webinar_inscripcion.webp'
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Webinar',
    description: "3 claves para desbloquear tu potencial y cambiar tu vida para siempre.",
    keywords: ['webinar', 'curso', 'gimnasio', 'Jockey GYM', 'jockey', 'tucuman', 'mejor', 'gym', 'ejercicio', 'salud'],
    openGraph: {
        title: 'Webinar - Jockey GYM',
        description: '3 claves para desbloquear tu potencial y cambiar tu vida para siempre.',
        url: 'https://jockeygym.com.ar/webinar/inscripcion.html',
        siteName: 'Webinar - Jockey GYM',
        locale: 'es_AR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        site: 'https://jockeygym.com.ar/webinar/inscripcion.html',
        creator: 'Jockey GYM',
        title: 'Webinar - Jockey GYM',
        description: '3 claves para desbloquear tu potencial y cambiar tu vida para siempre.',
    },
};

export default function InscripcionWebinarPage() {

    // async function enviarFormulario() {
    //     const url = 'https://jockey-gym.bitrix24.es/rest/24857/i3e126kjvxzjarjj/crm.site.form.fill.json';
        
    //     const formData = {
    //         FIELDS: {
    //             CONTACT_NAME: ['Ejemplo'],
    //             CONTACT_LAST_NAME: ['Pruebita'],
    //             CONTACT_EMAIL: ['mail@example.com'],
    //             CONTACT_PHONE: ['555888']
    //         },
    //         id: 101,
    //         sec: 'e76y6z',
    //     };
        
    //     try {
    //         const response = await axios.post(url, formData);
        
    //         // Maneja la respuesta de la API aquí
    //         console.log(response);
    //     } catch (error) {
    //         // Maneja los errores aquí
    //         console.error(error);
    //     }
    // }

    // enviarFormulario()

    return (
        <main className="w-full min-h-lvh flex flex-col justify-center items-center">
            <h1 className="sr-only">Inscribite a nuestro Webinar gratuito</h1>
            <section className="flex flex-col lg:flex-row justify-start items-start w-full lg:min-h-lvh">
                <div className='w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto lg:min-h-lvh relative'>
                    <div className='bg-[#00000049] size-full absolute top-0 left-0 z-20'></div>
                    <img src={portada.src} alt='Webinar gratuito' className='size-full object-cover object-[50%_10%] absolute top-0 left-0 z-10'/>
                </div>
                <div className='w-full lg:w-1/2 lg:min-h-lvh px-4 lg:px-8 flex flex-col justify-center items-center py-12 lg:py-24 relative'>
                    <h2 className='w-full text-center text-jockey text-4xl'>WEBINAR GRATUITO</h2>
                    <h3 className='mt-2 w-full text-center text-3xl font-gotham-black'>3 claves para desbloquear tu potencial y cambiar tu vida para siempre.</h3>
                    <span className='mt-4 mb-8 w-full font-gotham-black text-jockey flex justify-center items-center gap-2'><FaCalendarPlus className='fill-jockey inline relative -top-[2px]'/> JUEVES 9 DE MAYO</span>
                    {/* <InscripcionWebinar/> */}
                    <div className="mt-8 w-full text-center">
                        <Link href='https://b24-z4vzm6.bitrix24.site/crm_form_hquvb/' className="block bg-jockey w-full py-2 px-8 rounded-lg text-white text-3xl hover:bg-jockey-light hover:scale-[1.025] transition-all duration-300 ease-in-out">
                            Reservar mi lugar
                        </Link>
                    </div>
                    <FaAngleDown className='fill-jockey text-2xl absolute bottom-4 left-0 right-0 mx-auto hidden lg:block'/>
                </div>
            </section>
            <section className='w-full max-w-7xl px-4 xl:px-0 pb-12 lg:py-24 flex flex-col lg:flex-row justify-center items-start gap-12'>
                <div className='w-full aspect-video rounded-3xl overflow-hidden relative'>
                    <iframe className='size-full absolute top-0 left-0' src="https://www.youtube.com/embed/TYPeUi0_R6I?si=Bc9E24l1Y_fEXSon" title="Webinar" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className='w-full flex flex-col justify-start items-start'>
                    <h4 className='text-5xl lg:text-6xl text-jockey'>En este webinar...</h4>
                    <p className='mt-2 lg:mt-0 text-base lg:text-lg font-gotham'>Aprenderás estrategias prácticas respaldadas por la ciencia del comportamiento para superar la procrastinación y cultivar hábitos efectivos, que te ayudaran a:</p>
                    <ul className='mt-4 text-base lg:text-lg font-gotham flex flex-col justify-start items-start gap-2'>
                        <li className='flex gap-2 justify-start items-center'><FaHeartCircleCheck className='fill-jockey text-2xl'/> Tomar acción de manera consistente.</li>
                        <li className='flex gap-2 justify-start items-center'><FaHeartCircleCheck className='fill-jockey text-2xl'/> Eliminar la postergación.</li>
                        <li className='flex gap-2 justify-start items-center'><FaHeartCircleCheck className='fill-jockey text-2xl'/> Alcanzar tus metas con confianza.</li>
                    </ul>
                </div>
            </section>
            <section className='w-full bg-[#0F0F0F] py-24 flex justify-center items-center'>
                <div className='w-full max-w-7xl px-4 xl:px-0 flex flex-col justify-center items-center'>
                    <h4 className='text-6xl lg:text-6xl text-white border-b-2 border-white border-opacity-25 w-full text-center'>Cambia tu vida a partir de <b className='text-jockey font-normal'>hoy</b></h4>
                    <div className='mt-8 w-full flex flex-col lg:flex-row justify-start items-start gap-8'>
                        <p className='w-full lg:w-2/5 text-4xl lg:text-6xl text-center lg:text-end text-white'>Este webinar puede <span className='block text-white'>cambiar tu día a día si</span></p>
                        <ul className='w-full lg:w-3/5 text-center lg:text-start text-base lg:text-lg font-gotham flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6 lg:gap-2'>
                            <li className='flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><MdError className='fill-white text-2xl mr-1'/><span className='w-full lg:w-5/6 text-white'>Sos de los que constantemente dicen: &ldquo;El proximo lunes arranco el gym&rdquo; o &ldquo;mañana empiezo la dieta&rdquo;.</span></li>
                            <li className='flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><MdError className='fill-white text-2xl mr-1'/><span className='w-full lg:w-5/6 text-white'>Escuchas a todo el mundo hablar de lo bueno que es entrenar pero no sabes como te puede ayudar a vos.</span></li>
                            <li className='flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><MdError className='fill-white text-2xl mr-1'/><span className='w-full lg:w-5/6 text-white'>Te cuesta mantener en el tiempo los objetivos que te propones.</span></li>
                            <li className='flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><MdError className='fill-white text-2xl mr-1'/><span className='w-full lg:w-5/6 text-white'>Tenes problemas de salud crónicos y pensas que la única solución es una pastilla de por vida.</span></li>
                        </ul>
                    </div>
                    <div className='mt-12 w-full flex flex-col lg:flex-row justify-start items-start gap-8'>
                        <div className='w-full lg:w-2/5 flex flex-col justify-center lg:justify-start items-center lg:items-start gap-1'>
                            <p className='w-full text-lg lg:text-2xl text-center lg:text-end text-jockey'>Se que tenes poco tiempo, yo tambien.</p>
                            <p className='w-full text-4xl lg:text-6xl text-center lg:text-end text-white'>¿Por qué dedicar tiempo <span className='block text-white'>a esta <b className='text-jockey font-normal'>Masterclass</b>?</span></p>
                        </div>
                        <ul className='w-full lg:w-3/5 text-center lg:text-start text-base lg:text-lg font-gotham flex flex-col justify-start items-start gap-6 lg:gap-2'>
                            <li className='flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-white text-xl mr-1.5'/><span className='w-full lg:w-5/6 text-white'>Sos de los que constantemente dicen: &ldquo;El proximo lunes arranco el gym&rdquo; o &ldquo;mañana empiezo la dieta&rdquo;.</span></li>
                            <li className='flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-white text-xl mr-1.5'/><span className='w-full lg:w-5/6 text-white'>Escuchas a todo el mundo hablar de lo bueno que es entrenar pero no sabes como te puede ayudar a vos.</span></li>
                            <li className='flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-white text-xl mr-1.5'/><span className='w-full lg:w-5/6 text-white'>Te cuesta mantener en el tiempo los objetivos que te propones.</span></li>
                            <li className='flex flex-col lg:flex-row gap-2 justify-center lg:justify-start items-center'><FaCircleCheck className='fill-white text-xl mr-1.5'/><span className='w-full lg:w-5/6 text-white'>Tenes problemas de salud crónicos y pensas que la única solución es una pastilla de por vida.</span></li>
                        </ul>
                    </div>
                    <div className="mt-12 lg:mt-24 w-full text-center">
                        <Link href='https://b24-z4vzm6.bitrix24.site/crm_form_hquvb/' className="block bg-jockey w-full py-2 px-8 rounded-lg text-white text-3xl hover:bg-jockey-light hover:scale-[1.025] transition-all duration-300 ease-in-out">
                            Reservar mi lugar
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}