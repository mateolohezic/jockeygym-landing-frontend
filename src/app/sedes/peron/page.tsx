import Image from "next/image";
import Link from "next/link";
import precios from '../../../assets/precios.webp'
import '../../../styles/sedes.css'
import { SwiperSede } from "@/components";

export default function CentroPage() {

  return (
    <main className="grow w-full">
      <section className="w-full min-h-svh flex flex-col justify-center items-center relative">
        <div className="absolute top-0 left-0 w-full h-full -z-10 portada"></div>
        <Image src={precios} className="absolute top-0 left-0 w-full h-full object-cover -z-20" alt='Precios Jockey GYM'/>
        <div className="w-full xl:max-w-7xl	 px-4 xl:px-0 flex flex-col items-center justify-center relative text-center">
          <h1 className="text-3xl text-jockey font-extrabold">JOCKEY GYM</h1>
          <h2 className="text-8xl font-extrabold text-white">SEDE PERÓN</h2>
          <div className="bg-jockey  py-4 px-8 rounded-lg flex justify-center items-center leading-none">
            <h3 className="text-5xl font-extrabold text-white relative top-1">AV. PERÓN 451</h3>
          </div>
          {/* <Link href="/" className="mt-12 flex justify-center items-center text-white text-3xl border-2 px-8 py-4 rounded-lg hover:bg-[#FFFFFF50] transition-all duration-300 ease-in-out">INSCRIBIRME</Link> */}
        </div>
      </section>
      <section className="w-full min-h-screen flex flex-row-reverse justify-between items-stretch">
        <div className="grow relative">
          <iframe className="absolute size-full top-0 left-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.080230737736!2d-65.20367552372697!3d-26.829743165520135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c106265bd19%3A0xa15f4e59efe0ce83!2sGral.%20Jos%C3%A9%20de%20San%20Mart%C3%ADn%20451%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1711376523609!5m2!1ses!2sar" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="w-full max-w-3xl bg-white flex flex-col justify-start items-start py-24 px-6 relative">
          <h3 className="text-7xl text-start flex flex-col">
            <span className="text-jockey">UN GIMNASIO CERCA,</span>
            <span className="text-jockey">NO IMPORTA DONDE ESTES.</span>
          </h3>
          <p className="text-3xl text-center text-jockey-dark">INSTALACIONES CON ALTOS ESTÁNDARES DE CALIDAD.</p>
          <p className="mt-8 font-gotham w-5/6 text-lg">Actualmente con 7 clubes en la provincia y mas de 30 años en el sector, cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición.</p>
          <p className="mt-2 font-gotham w-5/6 text-lg">Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.</p>
        </div>
      </section>
      <section className="w-full min-h-screen bg-jockey flex flex-col justify-between items-center">
        <div className="grow w-full flex flex-col justify-end items-center">
          <span className="flex flex-col justify-center items-center text-center">
            <span className="font-gotham text-white text-4xl">SEDE</span>
            <b className="font-gotham-black text-white text-6xl">PERÓN</b>
          </span>
          <span className="mt-2 font-gotham text-white text-3xl ">AV. PERÓN 451</span>
          <div className="mt-6 flex justify-between items-start text-2xl divide-x-2 divide-white divide-opacity-25">
            <div className="w-1/2 flex justify-end items-start px-6">
              <div className="flex flex-col items-end justify-center text-end">
                <span className="text-white font-gotham text-nowrap">LUNES A VIERNES</span>
                <span className="text-white font-gotham">05:30 a 23:00</span>
              </div>
            </div>
            <div className="w-1/2 flex justify-start items-start px-6">
              <div className="flex flex-col items-start justify-center text-start">
                <span className="text-white font-gotham">SABADO</span>
                <span className="text-white font-gotham">09:00 a 13:30</span>
                <span className="text-white font-gotham">16:00 a 21:00</span>
              </div>
            </div>
          </div>
          <h3 className="mt-16 font-gotham-black text-white text-4xl mb-8">¡Conocé tu proximo hogar!</h3>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <SwiperSede/>
        </div>
      </section>






      <section className="w-full min-h-svh flex flex-col justify-start items-center relative py-16">
        <h3 className="font-gotham-black text-jockey text-4xl">¡Un horario hecho para vos!</h3>
        <table className="w-full max-w-7xl table table-fixed mt-16">
          <thead>
            <tr className="font-gotham border-b border-jockey">
              <th></th>
              <th className="text-center text-jockey text-sm pb-2">Lunes</th>
              <th className="text-center text-jockey text-sm pb-2">Martes</th>
              <th className="text-center text-jockey text-sm pb-2">Miercoles</th>
              <th className="text-center text-jockey text-sm pb-2">Jueves</th>
              <th className="text-center text-jockey text-sm pb-2">Viernes</th>
              <th className="text-center text-jockey text-sm pb-2">Sabado</th>
            </tr>
          </thead>
          <tbody className="divide-y-[1px] divide-jockey">
            <tr className='h-12 font-gotham-black bg-white hover:bg-zinc-100 transition-all duration-300 ease-in-out'>
              <td className='text-center text-jockey'>07:00</td>
              <td className='text-center py-4'>Cycle</td>
              <td className='text-center py-4'></td>
              <td className='text-center py-4'>Cycle</td>
              <td className='text-center py-4'></td>
              <td className='text-center py-4'>Cycle</td>
              <td className='text-center py-4'></td>
            </tr>
            <tr className='h-12 font-gotham-black bg-white hover:bg-zinc-100 transition-all duration-300 ease-in-out'>
              <td className='text-center text-jockey'>07:15</td>
              <td className='text-center py-4'></td>
              <td className='text-center py-4'>Funcional</td>
              <td className='text-center py-4'></td>
              <td className='text-center py-4'>Funcional</td>
              <td className='text-center py-4'></td>
              <td className='text-center py-4'></td>
            </tr>
            <tr className='h-12 font-gotham-black bg-white hover:bg-zinc-100 transition-all duration-300 ease-in-out'>
              <td className='text-center text-jockey'>8:15</td>
              <td className='text-center py-4'>Force M.</td>
              <td className='text-center py-4'>Cycle</td>
              <td className='text-center py-4'>Force M.</td>
              <td className='text-center py-4'>Cycle</td>
              <td className='text-center py-4'>Force M.</td>
              <td className='text-center py-4'></td>
            </tr>
            <tr className='h-12 font-gotham-black bg-white hover:bg-zinc-100 transition-all duration-300 ease-in-out'>
              <td className='text-center text-jockey'>14:30</td>
              <td className='text-center py-4'>
                <span className="block">Cycle</span>
                <span className="block">Step</span>
              </td>
              <td className='text-center py-4'>
                <span className="block">Cycle</span>
                <span className="block">Ritmos</span>
              </td>
              <td className='text-center py-4'>
                <span className="block">Cycle</span>
                <span className="block">GAP</span>
              </td>
              <td className='text-center py-4'>
                <span className="block">Cycle</span>
                <span className="block">Ritmos</span>
              </td>
              <td className='text-center py-4'>
                <span className="block">Cycle</span>
                <span className="block">Body</span>
              </td>
              <td className='text-center py-4'></td>
            </tr>
            <tr className='h-12 font-gotham-black bg-white hover:bg-zinc-100 transition-all duration-300 ease-in-out'>
              <td className='text-center text-jockey'>15:30</td>
              <td className='text-center py-4'>Funcional</td>
              <td className='text-center py-4'>Funcional</td>
              <td className='text-center py-4'>Funcional</td>
              <td className='text-center py-4'>Funcional</td>
              <td className='text-center py-4'>Funcional</td>
              <td className='text-center py-4'></td>
            </tr>
            <tr className='h-12 font-gotham-black bg-white hover:bg-zinc-100 transition-all duration-300 ease-in-out'>
              <td className='text-center text-jockey'>18:00</td>
              <td className='text-center py-4'>Strong</td>
              <td className='text-center py-4'></td>
              <td className='text-center py-4'>Strong</td>
              <td className='text-center py-4'></td>
              <td className='text-center py-4'>Strong</td>
              <td className='text-center py-4'></td>
            </tr>
            <tr className='h-12 font-gotham-black bg-white hover:bg-zinc-100 transition-all duration-300 ease-in-out'>
              <td className='text-center text-jockey'>18:30</td>
              <td className='text-center py-4'></td>
              <td className='text-center py-4'>Zumba</td>
              <td className='text-center py-4'></td>
              <td className='text-center py-4'>Zumba</td>
              <td className='text-center py-4'></td>
              <td className='text-center py-4'></td>
            </tr>
            <tr className='h-12 font-gotham-black bg-white hover:bg-zinc-100 transition-all duration-300 ease-in-out'>
              <td className='text-center text-jockey'>19:00</td>
              <td className='text-center py-4'>
                <span className="block">Zumba</span>
                <span className="block">Cycle</span>
                <span className="block">Force M.</span>
              </td>
              <td className='text-center py-4'>
                <span className="block">Cycle</span>
                <span className="block">Fisico y Forma</span>
              </td>
              <td className='text-center py-4'>
                <span className="block">Zumba</span>
                <span className="block">Cycle</span>
                <span className="block">Force M.</span>
              </td>
              <td className='text-center py-4'>
                <span className="block">Cycle</span>
                <span className="block">Fisico y Forma</span>
              </td>
              <td className='text-center py-4'>
                <span className="block">Zumba</span>
                <span className="block">Cycle</span>
                <span className="block">Force M.</span>
              </td>
              <td className='text-center py-4'></td>
            </tr>
            <tr className='h-12 font-gotham-black bg-white hover:bg-zinc-100 transition-all duration-300 ease-in-out'>
              <td className='text-center text-jockey'>20:00</td>
              <td className='text-center py-4'>
                <span className="block">Cycle</span>
                <span className="block">Funcional</span>
              </td>
              <td className='text-center py-4'>
                <span className="block">Cycle</span>
                <span className="block">Funcional</span>
                <span className="block">Fitboxing</span>
              </td>
              <td className='text-center py-4'>
                <span className="block">Cycle</span>
                <span className="block">Funcional</span>
              </td>
              <td className='text-center py-4'>
                <span className="block">Cycle</span>
                <span className="block">Funcional</span>
                <span className="block">Fitboxing</span>
              </td>
              <td className='text-center py-4'>
                <span className="block">Cycle</span>
                <span className="block">Funcional</span>
              </td>
              <td className='text-center py-4'></td>
            </tr>
            <tr className='h-12 font-gotham-black bg-white hover:bg-zinc-100 transition-all duration-300 ease-in-out'>
              <td className='text-center text-jockey'>21:00</td>
              <td className='text-center py-4'>
                <span className="block">Funcional</span>
                <span className="block">Body</span>
              </td>
              <td className='text-center'></td>
              <td className='text-center py-4'>
                <span className="block">Funcional</span>
                <span className="block">Body</span>
              </td>
              <td className='text-center py-4'></td>
              <td className='text-center py-4'>Funcional</td>
              <td className='text-center py-4'></td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}