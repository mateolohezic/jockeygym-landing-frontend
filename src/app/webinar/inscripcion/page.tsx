import { InscripcionWebinar } from '@/components';
import { FaAngleDown, FaCalendarPlus, FaHeartCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import portada from '../../../assets/webinar/portada.jpeg'

export default function InscripcionWebinarPage() {
    return (
        <main className="w-full min-h-lvh flex flex-col justify-center items-center">
            <h1 className="sr-only">Inscribite a nuestro Webinar gratuito</h1>
            <section className="flex justify-start items-start w-full min-h-lvh">
                <div className='w-1/2 min-h-lvh relative'>
                    <div className='bg-[#00000049] size-full absolute top-0 left-0 z-20'></div>
                    <img src={portada.src} alt='Webinar gratuito' className='size-full object-cover absolute top-0 left-0 z-10'/>
                </div>
                <div className='w-1/2 min-h-lvh px-8 flex flex-col justify-center items-center py-24 relative'>
                    <h2 className='w-full text-center text-jockey text-4xl'>WEBINAR GRATUITO</h2>
                    <h3 className='mt-2 w-full text-center text-3xl font-gotham-black'>3 claves para desbloquear tu potencial y cambiar tu vida para siempre.</h3>
                    <span className='mt-4 mb-8 w-full font-gotham-black text-jockey flex justify-center items-center gap-2'><FaCalendarPlus className='fill-jockey inline relative -top-[2px]'/> JUEVES 9 DE MAYO</span>
                    <InscripcionWebinar/>
                    <FaAngleDown className='fill-jockey text-2xl absolute bottom-4 left-0 right-0 mx-auto'/>
                </div>
            </section>
            <section className='w-full max-w-7xl px-4 xl:px-0 py-24 flex justify-center items-start gap-12'>
                <div className='w-full aspect-video rounded-3xl overflow-hidden relative'>
                    <iframe className='size-full absolute top-0 left-0' src="https://www.youtube.com/embed/vg_h_YgHD6E?si=ufQtGUCd4OevxvvN" title="Webinar" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className='w-full flex flex-col justify-start items-start'>
                    <h4 className='text-6xl text-jockey'>En este webinar...</h4>
                    <p className='text-lg font-gotham'>Aprenderás estrategias prácticas respaldadas por la ciencia del comportamiento para superar la procrastinación y cultivar hábitos efectivos, que te ayudaran a:</p>
                    <ul className='mt-4 text-lg font-gotham flex flex-col justify-start items-start gap-2'>
                        <li className='flex gap-2 justify-start items-center'><FaHeartCircleCheck className='fill-jockey text-2xl'/> Tomar acción de manera consistente.</li>
                        <li className='flex gap-2 justify-start items-center'><FaHeartCircleCheck className='fill-jockey text-2xl'/> Eliminar la postergación.</li>
                        <li className='flex gap-2 justify-start items-center'><FaHeartCircleCheck className='fill-jockey text-2xl'/> Alcanzar tus metas con confianza.</li>
                    </ul>
                </div>
            </section>
            <section className='w-full bg-jockey py-24 flex justify-center items-center'>
                <div className='w-full max-w-7xl px-4 xl:px-0 flex flex-col justify-center items-center'>
                    <h4 className='text-6xl text-white border-b-2 border-white border-opacity-25 w-full text-center'>Cambia tu vida a partir de hoy</h4>
                    <div className='mt-8 w-full flex justify-start items-start gap-8'>
                        <p className='w-2/5 text-6xl text-end text-white'>Este webinar puede <span className='block text-white'>cambiar tu día a día si</span></p>
                        <ul className='w-3/5 text-start text-lg font-gotham flex flex-col justify-start items-start gap-2'>
                            {/* Agregar check icon */}
                            <li className='flex gap-2 justify-start items-center'><MdError className='fill-white text-2xl'/><span className='w-5/6 text-white'>Sos de los que constantemente dicen: "El proximo lunes arranco el gym" o "mañana empiezo la dieta".</span></li>
                            <li className='flex gap-2 justify-start items-center'><MdError className='fill-white text-2xl'/><span className='w-5/6 text-white'>Escuchas a todo el mundo hablar de lo bueno que es entrenar pero no sabes como te puede ayudar a vos.</span></li>
                            <li className='flex gap-2 justify-start items-center'><MdError className='fill-white text-2xl'/><span className='w-5/6 text-white'>Te cuesta mantener en el tiempo los objetivos que te propones.</span></li>
                            <li className='flex gap-2 justify-start items-center'><MdError className='fill-white text-2xl'/><span className='w-5/6 text-white'>Tenes problemas de salud crónicos y pensas que la única solución es una pastilla de por vida.</span></li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}