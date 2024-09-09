import Link from "next/link";
import precios from '../../assets/precios.webp'
import styles from '../../styles/precios.module.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Precios',
  description: "Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.",
  keywords: ['precios', 'gimnasio', 'Jockey GYM', 'jockey', 'tucuman', 'mejor', 'gym', 'ejercicio', 'salud'],
  openGraph: {
    title: 'Precios - Jockey GYM',
    description: 'Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.',
    url: 'https://jockeygym.com.ar/precios',
    siteName: 'Precios - Jockey GYM',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://jockeygym.com.ar/precios',
    creator: 'Jockey GYM',
    title: 'Precios - Jockey GYM',
    description: 'Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.',
  },
};

export default function PreciosPage() {

  const sedesPrecios = [
    {
      title:'distrito',
      properties: [
        {
          name: 'Mensual',
          value: '47.900'
        },
        {
          name: 'Trimestral Multisede',
          value: '123.900'
        },
        {
          name: 'Semestre Premium',
          value: '229.900',
          important: true
        },
        {
          name: 'Anual VIP',
          value: '389.900'
        },
      ],
      href:'https://jockeygymtuc.bitrix24.site/crm_form3/'
    },
    {
      title:'el solar',
      properties: [
        {
          name: 'Mensual',
          value: '47.900'
        },
        {
          name: 'Trimestral Multisede',
          value: '123.900'
        },
        {
          name: 'Semestre Premium',
          value: '229.900',
          important: true
        },
        {
          name: 'Anual VIP',
          value: '389.900'
        },
      ],
      href:'https://jockeygymtuc.bitrix24.site/crm_form3/'
    },
    {
      title:'av. perón',
      properties: [
        {
          name: 'Mensual',
          value: '47.900'
        },
        {
          name: 'Trimestral Multisede',
          value: '123.900'
        },
        {
          name: 'Semestre Premium',
          value: '229.900',
          important: true
        },
        {
          name: 'Anual VIP',
          value: '389.900'
        },
      ],
      href:'https://jockeygymtuc.bitrix24.site/crm_form3/'
    },
    {
      title:'centro',
      properties: [
        {
          name: 'Mensual',
          value: '47.900'
        },
        {
          name: 'Trimestral Multisede',
          value: '123.900'
        },
        {
          name: 'Semestre Premium',
          value: '229.900',
          important: true
        },
        {
          name: 'Anual VIP',
          value: '389.900'
        },
      ],
      href:'https://jockeygymtuc.bitrix24.site/crm_form3/'
    },
    {
      title:'catalinas',
      properties: [
        {
          name: 'Mensual',
          value: '41.900'
        },
        {
          name: 'Trimestre',
          value: '123.900'
        },
        {
          name: 'Semestre Premium',
          value: '229.900',
          important: true
        },
        {
          name: 'Anual VIP',
          value: '389.900'
        },
      ],
      href:'https://jockeygymtuc.bitrix24.site/crm_form3/'
    },
  ]

  return (
    <main className="grow w-full">
      <section className="w-full min-h-svh flex flex-col justify-end lg:justify-center items-center relative pb-8 lg:pb-0">
        <div className={`absolute top-0 left-0 w-full h-full -z-10 ${styles.gradient__portada}`}></div>
        <img src={precios.src} className="absolute top-0 left-0 w-full h-full object-cover -z-20" alt='Precios Jockey GYM'/>
        <div className="w-full xl:max-w-7xl px-4 xl:px-0 flex flex-col items-start justify-start relative text-start" data-aos="fade-right" data-aos-duration="300" data-aos-easing="ease-in-out">
          <h1 className="text-4xl lg:text-3xl text-jockey lg:font-extrabold">JOCKEY GYM</h1>
          <h2 className="text-5xl lg:text-7xl lg:font-extrabold"><span className="block text-white">EL MEJOR GIMNASIO DE TUCUMÁN Y VOS,</span><span className="block text-white">JUNTOS POR TUS OBJETIVOS.</span></h2>
          <Link href="https://jockeygymtuc.bitrix24.site/crm_form3/" className="mt-5 lg:mt-8 flex justify-center items-center text-white text-2xl border-2 px-8 py-4 rounded-lg  hover:bg-[#FFFFFF50] transition-all duration-300 ease-in-out">Empeza a entrenar</Link>
        </div>
      </section>
      <section className="w-full min-h-svh flex flex-col justify-start items-center relative py-24 px-6">
        <h3 className="font-gotham-black text-2xl lg:text-4xl text-center">ELEGÍ TU PLAN IDEAL Y EMPEZÁ A ENTRENAR HOY.</h3>
        <p className="font-gotham-black text-base lg:text-xl text-center text-jockey mt-2 lg:mt-0">Consultá nuestros planes de financiación y descuento por pago en efectivo.</p>
        <div className="w-full max-w-7xl mt-4 lg:mt-12 flex flex-wrap-reverse justify-center items-center gap-8" data-aos="fade-up" data-aos-duration="300" data-aos-easing="ease-in-out">
          {
            sedesPrecios.map( ({ title, properties, href }) => (
              <article className="font-gotham flex flex-col items-center justify-center w-full max-w-96 bg-white drop-shadow-lg rounded-lg" key={title}>
                <div className="w-full rounded-t-lg bg-jockey py-6 px-4 flex flex-col justify-center items-center gap-1">
                  <span className="text-center text-white font-gotham-black lg:font-extrabold text-xs lg:text-sm leading-none">JOCKEY GYM</span>
                  <h4 className="text-center text-white font-gotham-black lg:font-extrabold text-3xl lg:text-4xl leading-none uppercase">SEDE {title}</h4>
                </div>
                <div className="mt-6 px-4">
                  <table className="w-full max-w-full table table-fixed">
                    {
                      properties.map( ({ name, value, important }) => (
                        <tbody key={name}>
                          <tr className='border-b border-jockey h-12'>
                            {
                              name === 'Anual VIP' ?
                              <td>
                                <div className="flex flex-col">
                                  <span className="leading-tight">{name}</span>
                                  <span className="text-xs text-jockey font-gotham-black leading-none">(Solo clientes)</span>
                                </div>
                              </td>
                              :
                              <td className={` ${important && 'text-jockey font-gotham-black'}`}>{name}</td>
                            }
                            <td className={`text-end w-24 ${important && 'text-jockey font-gotham-black'}`}>
                              <div className="w-full flex justify-between items-center">
                                <span className={`${important && 'text-jockey font-gotham-black'}`}>$</span>
                                <span className={`${important && 'text-jockey font-gotham-black'}`}>{value}</span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      ))
                    }
                  </table>
                </div>
                <div className="py-6 px-4">
                    <Link href={href} className="flex justify-center items-center font-gotham-black text-white text-sm bg-jockey px-4 py-2 rounded-lg hover:bg-jockey-light transition-all duration-300 ease-in-out">QUIERO ASOCIARME</Link>
                </div>
              </article>
            ))
          }
        </div>
      </section>
    </main>
  );
}