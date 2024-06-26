import { SwiperSede } from "@/components";
import styles from '../../../styles/sedes.module.css';
import sede_catalinas_portada from '../../../assets/sedes/catalinas/sede_catalinas_portada.webp';
import sede_catalinas_1 from '../../../assets/sedes/catalinas/sede_catalinas_1.webp';
import sede_catalinas_2 from '../../../assets/sedes/catalinas/sede_catalinas_2.webp';
import sede_catalinas_3 from '../../../assets/sedes/catalinas/sede_catalinas_3.webp';
import sede_catalinas_4 from '../../../assets/sedes/catalinas/sede_catalinas_4.webp';
import sede_catalinas_5 from '../../../assets/sedes/catalinas/sede_catalinas_5.webp';
import sede_catalinas_6 from '../../../assets/sedes/catalinas/sede_catalinas_6.webp';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sede Catalinas',
  description: "Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.",
  keywords: ['precios', 'gimnasio', 'Jockey GYM', 'jockey', 'tucuman', 'mejor', 'gym', 'ejercicio', 'salud'],
  openGraph: {
    title: 'Sede Catalinas - Jockey GYM',
    description: 'Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.',
    url: 'https://jockeygym.com.ar/sedes/catalinas',
    siteName: 'Sede Catalinas - Jockey GYM',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://jockeygym.com.ar/sedes/catalinas',
    creator: 'Jockey GYM',
    title: 'Sede Catalinas - Jockey GYM',
    description: 'Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.',
  },
};

export default function CatalinasPage() {

  const images = [ sede_catalinas_1, sede_catalinas_2, sede_catalinas_3, sede_catalinas_4, sede_catalinas_5, sede_catalinas_6 ]

  return (
    <main className="grow w-full">
      <section className="w-full min-h-svh flex flex-col justify-center items-center relative">
        <div className={`absolute top-0 left-0 w-full h-full -z-10 ${styles.portada}`}></div>
        <img src={sede_catalinas_portada.src} className="absolute top-0 left-0 w-full h-full object-cover -z-20" alt='Precios Jockey GYM'/>
        <div className="w-full xl:max-w-7xl	 px-4 xl:px-0 flex flex-col items-center justify-center relative text-center" data-aos="fade-down" data-aos-duration="300" data-aos-easing="ease-in-out">
          <h1 className="text-xl lg:text-3xl text-jockey font-extrabold">JOCKEY GYM</h1>
          <h2 className="text-6xl lg:text-8xl font-extrabold text-white">SEDE CATALINAS</h2>
          <div className="bg-jockey py-2 lg:py-4 px-4 lg:px-8 rounded-lg flex justify-center items-center leading-none">
            <h3 className="text-3xl lg:text-5xl font-extrabold text-white relative top-0.5">AV. SOLDATI 380</h3>
          </div>
          {/* <Link href="/" className="mt-12 flex justify-center items-center text-white text-3xl border-2 px-8 py-4 rounded-lg hover:bg-[#FFFFFF50] transition-all duration-300 ease-in-out">INSCRIBIRME</Link> */}
        </div>
      </section>
      <section className="w-full lg:min-h-screen flex flex-col-reverse lg:flex-row-reverse justify-between items-stretch">
        <div className="lg:grow relative">
          <iframe className="lg:absolute size-full aspect-square lg:aspect-auto lg:top-0 lg:left-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.394658700663!2d-65.19613442374683!3d-26.82739698964597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c1dac996277%3A0x283294a8b3c54a81!2sAv.%20Soldati%20380%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1712665801413!5m2!1ses!2sar" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="w-full max-w-3xl bg-white flex flex-col justify-start items-start py-12 lg:py-24 px-4 lg:px-6 relative" data-aos="fade-right" data-aos-delay='150' data-aos-duration="300" data-aos-easing="ease-in-out">
          <h3 className="text-4xl lg:text-7xl leading-none text-start flex flex-col">
            <span className="text-jockey">UN GIMNASIO CERCA,</span>
            <span className="text-jockey">NO IMPORTA DONDE ESTES.</span>
          </h3>
          <p className="text-lg lg:text-3xl text-start lg:text-center text-jockey-dark">INSTALACIONES CON ALTOS ESTÁNDARES DE CALIDAD.</p>
          <p className="mt-2 lg:mt-8 font-gotham w-full lg:w-5/6 text-sm lg:text-lg indent-4 lg:indent-8">Actualmente con 7 clubes en la provincia y mas de 30 años en el sector, cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición.</p>
          <p className="mt-1 lg:mt-2 font-gotham w-full lg:w-5/6 text-sm lg:text-lg indent-4 lg:indent-8">Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.</p>
        </div>
      </section>
      <section className="w-full lg:min-h-screen pt-12 lg:pt-0 bg-jockey flex flex-col justify-between items-center">
        <div className="grow w-full flex flex-col justify-end items-center" data-aos="fade-up" data-aos-duration="300" data-aos-easing="ease-in-out">
          <span className="flex flex-col justify-center items-center text-center">
            <span className="font-gotham text-white text-2xl lg:text-4xl w-full">SEDE</span>
            <b className="font-gotham-black text-white text-5xl lg:text-6xl w-full">CATALINAS</b>
          </span>
          <span className="mt-2 font-gotham text-white text-3xl ">AV. SOLDATI 380</span>
          <div className="mt-8 lg:mt-6 flex justify-between items-start text-lg lg:text-2xl lg:divide-x-2 lg:divide-white lg:divide-opacity-25 flex-wrap lg:flex-nowrap gap-4 lg:gap-0">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center lg:items-start px-2 lg:px-6">
              <div className="flex flex-col items-center lg:items-end justify-center text-center lg:text-end">
                <span className="text-white font-gotham lg:text-nowrap">LUNES A VIERNES</span>
                <span className="text-white font-gotham">06:00 a 22:00</span>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center lg:items-start px-2 lg:px-6">
              <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-start">
                <span className="text-white font-gotham">SÁBADO</span>
                <span className="text-white font-gotham">09:00 a 20:00</span>
                <span className="text-white font-gotham mt-2">DOMINGO</span>
                <span className="text-white font-gotham">09:00 a 20:00</span>
              </div>
            </div>
          </div>
          <h3 className="mt-12 lg:mt-16 font-gotham-black text-white text-xl lg:text-4xl mb-4 lg:mb-8">¡Conocé tu proximo hogar!</h3>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <SwiperSede images={images} sede='Catalinas'/>
        </div>
      </section>
      <section className="w-full lg:min-h-svh flex flex-col justify-center lg:justify-start items-center relative py-12 lg:py-16">
        <h3 className="font-gotham-black text-jockey text-xl lg:text-4xl text-center">¡Un horario hecho para vos!</h3>
        <div className="w-full overflow-x-auto px-8 lg:px-4 lg:flex lg:justify-center lg:items-center">
          <table className="w-full max-w-7xl table table-auto mt-6 lg:mt-16">
            <thead>
              <tr className="font-gotham border-b border-jockey">
                <th></th>
                <th className="text-center text-jockey text-sm pb-2 px-4">Lunes</th>
                <th className="text-center text-jockey text-sm pb-2 px-4">Martes</th>
                <th className="text-center text-jockey text-sm pb-2 px-4">Miercoles</th>
                <th className="text-center text-jockey text-sm pb-2 px-4">Jueves</th>
                <th className="text-center text-jockey text-sm pb-2 px-4">Viernes</th>
                <th className="text-center text-jockey text-sm pb-2 px-4">Sábado</th>
              </tr>
            </thead>
            <tbody className="divide-y-[1px] divide-jockey">
              <tr className='h-12 font-gotham-black bg-white hover:bg-zinc-100 transition-all duration-300 ease-in-out'>
                <td className='text-center text-jockey'>07:00</td>
                <td className='text-center py-4 px-4'>Cycle</td>
                <td className='text-center py-4 px-4'></td>
                <td className='text-center py-4 px-4'>Cycle</td>
                <td className='text-center py-4 px-4'></td>
                <td className='text-center py-4 px-4'>Cycle</td>
                <td className='text-center py-4 px-4'></td>
              </tr>
              <tr className='h-12 font-gotham-black bg-white hover:bg-zinc-100 transition-all duration-300 ease-in-out'>
                <td className='text-center text-jockey'>07:15</td>
                <td className='text-center py-4 px-4'></td>
                <td className='text-center py-4 px-4'>Funcional</td>
                <td className='text-center py-4 px-4'></td>
                <td className='text-center py-4 px-4'>Funcional</td>
                <td className='text-center py-4 px-4'></td>
                <td className='text-center py-4 px-4'></td>
              </tr>
              <tr className='h-12 font-gotham-black bg-white hover:bg-zinc-100 transition-all duration-300 ease-in-out'>
                <td className='text-center text-jockey'>8:15</td>
                <td className='text-center py-4 px-4'>Force M.</td>
                <td className='text-center py-4 px-4'>Cycle</td>
                <td className='text-center py-4 px-4'>Force M.</td>
                <td className='text-center py-4 px-4'>Cycle</td>
                <td className='text-center py-4 px-4'>Force M.</td>
                <td className='text-center py-4 px-4'></td>
              </tr>
              <tr className='h-12 font-gotham-black bg-white hover:bg-zinc-100 transition-all duration-300 ease-in-out'>
                <td className='text-center text-jockey'>14:30</td>
                <td className='text-center py-4 px-4'>
                  <span className="block">Cycle</span>
                  <span className="block">Step</span>
                </td>
                <td className='text-center py-4 px-4'>
                  <span className="block">Cycle</span>
                  <span className="block">Ritmos</span>
                </td>
                <td className='text-center py-4 px-4'>
                  <span className="block">Cycle</span>
                  <span className="block">GAP</span>
                </td>
                <td className='text-center py-4 px-4'>
                  <span className="block">Cycle</span>
                  <span className="block">Ritmos</span>
                </td>
                <td className='text-center py-4 px-4'>
                  <span className="block">Cycle</span>
                  <span className="block">Body</span>
                </td>
                <td className='text-center py-4 px-4'></td>
              </tr>
              <tr className='h-12 font-gotham-black bg-white hover:bg-zinc-100 transition-all duration-300 ease-in-out'>
                <td className='text-center text-jockey'>15:30</td>
                <td className='text-center py-4 px-4'>Funcional</td>
                <td className='text-center py-4 px-4'>Funcional</td>
                <td className='text-center py-4 px-4'>Funcional</td>
                <td className='text-center py-4 px-4'>Funcional</td>
                <td className='text-center py-4 px-4'>Funcional</td>
                <td className='text-center py-4 px-4'></td>
              </tr>
              <tr className='h-12 font-gotham-black bg-white hover:bg-zinc-100 transition-all duration-300 ease-in-out'>
                <td className='text-center text-jockey'>18:00</td>
                <td className='text-center py-4 px-4'>Strong</td>
                <td className='text-center py-4 px-4'></td>
                <td className='text-center py-4 px-4'>Strong</td>
                <td className='text-center py-4 px-4'></td>
                <td className='text-center py-4 px-4'>Strong</td>
                <td className='text-center py-4 px-4'></td>
              </tr>
              <tr className='h-12 font-gotham-black bg-white hover:bg-zinc-100 transition-all duration-300 ease-in-out'>
                <td className='text-center text-jockey'>18:30</td>
                <td className='text-center py-4 px-4'></td>
                <td className='text-center py-4 px-4'>Zumba</td>
                <td className='text-center py-4 px-4'></td>
                <td className='text-center py-4 px-4'>Zumba</td>
                <td className='text-center py-4 px-4'></td>
                <td className='text-center py-4 px-4'></td>
              </tr>
              <tr className='h-12 font-gotham-black bg-white hover:bg-zinc-100 transition-all duration-300 ease-in-out'>
                <td className='text-center text-jockey'>19:00</td>
                <td className='text-center py-4 px-4'>
                  <span className="block">Zumba</span>
                  <span className="block">Cycle</span>
                  <span className="block">Force M.</span>
                </td>
                <td className='text-center py-4 px-4'>
                  <span className="block">Cycle</span>
                  <span className="block">Fisico y Forma</span>
                </td>
                <td className='text-center py-4 px-4'>
                  <span className="block">Zumba</span>
                  <span className="block">Cycle</span>
                  <span className="block">Force M.</span>
                </td>
                <td className='text-center py-4 px-4'>
                  <span className="block">Cycle</span>
                  <span className="block">Fisico y Forma</span>
                </td>
                <td className='text-center py-4 px-4'>
                  <span className="block">Zumba</span>
                  <span className="block">Cycle</span>
                  <span className="block">Force M.</span>
                </td>
                <td className='text-center py-4 px-4'></td>
              </tr>
              <tr className='h-12 font-gotham-black bg-white hover:bg-zinc-100 transition-all duration-300 ease-in-out'>
                <td className='text-center text-jockey'>20:00</td>
                <td className='text-center py-4 px-4'>
                  <span className="block">Cycle</span>
                  <span className="block">Funcional</span>
                </td>
                <td className='text-center py-4 px-4'>
                  <span className="block">Cycle</span>
                  <span className="block">Funcional</span>
                  <span className="block">Fitboxing</span>
                </td>
                <td className='text-center py-4 px-4'>
                  <span className="block">Cycle</span>
                  <span className="block">Funcional</span>
                </td>
                <td className='text-center py-4 px-4'>
                  <span className="block">Cycle</span>
                  <span className="block">Funcional</span>
                  <span className="block">Fitboxing</span>
                </td>
                <td className='text-center py-4 px-4'>
                  <span className="block">Cycle</span>
                  <span className="block">Funcional</span>
                </td>
                <td className='text-center py-4 px-4'></td>
              </tr>
              <tr className='h-12 font-gotham-black bg-white hover:bg-zinc-100 transition-all duration-300 ease-in-out'>
                <td className='text-center text-jockey'>21:00</td>
                <td className='text-center py-4 px-4'>
                  <span className="block">Funcional</span>
                  <span className="block">Body</span>
                </td>
                <td className='text-center'></td>
                <td className='text-center py-4 px-4'>
                  <span className="block">Funcional</span>
                  <span className="block">Body</span>
                </td>
                <td className='text-center py-4 px-4'></td>
                <td className='text-center py-4 px-4'>Funcional</td>
                <td className='text-center py-4 px-4'></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}