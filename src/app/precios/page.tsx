import Image from "next/image";
import Link from "next/link";
import precios from '../../assets/precios.webp'
import '../../styles/precios.css'

export default function PreciosPage() {

  const sedesPrecios = [
    {
      title:'distrito',
      properties: [
        {
          name: 'Matricula',
          value: '18.900'
        },
        {
          name: 'Mensual',
          value: '36.900'
        },
        {
          name: 'Trimestre Multisede',
          value: '94.900'
        },
        {
          name: 'Semestre Premium',
          value: '174.900',
          important: true
        },
        {
          name: 'Anual VIP Renovados',
          value: '294.900'
        },
      ],
      href:'/'
    },
    {
      title:'el solar',
      properties: [
        {
          name: 'Matricula',
          value: '18.900'
        },
        {
          name: 'Mensual',
          value: '36.900'
        },
        {
          name: 'Trimestre Multisede',
          value: '94.900'
        },
        {
          name: 'Semestre Premium',
          value: '174.900',
          important: true
        },
        {
          name: 'Anual VIP Renovados',
          value: '294.900'
        },
      ],
      href:'/'
    },
    {
      title:'av. perón',
      properties: [
        {
          name: 'Matricula',
          value: '18.900'
        },
        {
          name: 'Mensual',
          value: '36.900'
        },
        {
          name: 'Trimestre Multisede',
          value: '94.900'
        },
        {
          name: 'Semestre Premium',
          value: '174.900',
          important: true
        },
        {
          name: 'Anual VIP Renovados',
          value: '294.900'
        },
      ],
      href:'/'
    },
    {
      title:'centro',
      properties: [
        {
          name: 'Matricula',
          value: '18.900'
        },
        {
          name: 'Mensual',
          value: '32.900'
        },
        {
          name: 'Matricula Trimestral',
          value: '9.900'
        },
        {
          name: 'Trimestre',
          value: '84.900'
        },
        {
          name: 'Semestre Premium',
          value: '174.900',
          important: true
        },
        {
          name: 'Anual VIP Renovados',
          value: '294.900'
        },
      ],
      href:'/'
    },
    {
      title:'catalinas',
      properties: [
        {
          name: 'Matricula',
          value: '18.900'
        },
        {
          name: 'Mensual',
          value: '32.900'
        },
        {
          name: 'Matricula Trimestral',
          value: '9.900'
        },
        {
          name: 'Trimestre',
          value: '84.900'
        },
        {
          name: 'Semestre Premium',
          value: '174.900',
          important: true
        },
        {
          name: 'Anual VIP Renovados',
          value: '294.900'
        },
      ],
      href:'/'
    },
  ]

  return (
    <main className="grow w-full">
      <section className="w-full min-h-svh flex flex-col justify-center items-center relative">
        <div className="absolute top-0 left-0 w-full h-full -z-10 gradient__portada"></div>
        <Image src={precios} className="absolute top-0 left-0 w-full h-full object-cover -z-20" alt='Precios Jockey GYM'/>
        <div className="w-full xl:max-w-7xl	 px-4 xl:px-0 flex flex-col items-start justify-start relative text-start" data-aos="fade-right" data-aos-duration="300" data-aos-easing="ease-in-out">
          <h1 className="text-3xl text-jockey font-extrabold">JOCKEY GYM</h1>
          <h2 className="text-7xl font-extrabold"><span className="block text-white">EL MEJOR GIMNASIO DE TUCUMÁN Y VOS,</span><span className="block text-white">JUNTOS POR TUS OBJETIVOS.</span></h2>
          <Link href="/" className="mt-8 flex justify-center items-center text-white text-2xl border-2 px-8 py-4 rounded-lg  hover:bg-[#FFFFFF50] transition-all duration-300 ease-in-out">Empeza a entrenar</Link>
        </div>
      </section>
      <section className="w-full min-h-svh flex flex-col justify-start items-center relative py-24">
        <h3 className="font-gotham-black text-4xl text-center">ELEGÍ TU PLAN IDEAL Y EMPEZÁ A ENTRENAR HOY.</h3>
        <p className="font-gotham-black text-xl text-center text-jockey">Consultá nuestros planes de financiación y descuento por pago en efectivo.</p>
        <div className="w-full xl:max-w-7xl mt-12 flex flex-wrap-reverse justify-center items-center gap-8" data-aos="fade-up" data-aos-duration="300" data-aos-easing="ease-in-out">
          {
            sedesPrecios.map( ({ title, properties, href }) => (
              <article className="font-gotham flex flex-col items-center justify-center w-96 bg-white drop-shadow-lg rounded-lg" key={title}>
                <div className="w-full rounded-t-lg bg-jockey py-6 px-4 flex flex-col justify-center items-center gap-1">
                  <span className="text-white font-gotham-black font-extrabold text-sm leading-none">JOCKEY GYM</span>
                  <h4 className="text-white font-gotham-black font-extrabold text-4xl leading-none uppercase">SEDE {title}</h4>
                </div>
                <div className="mt-6 px-4">
                  <table className="w-full max-w-full table table-fixed">
                    {
                      properties.map( ({ name, value, important }) => (
                        <tbody key={name}>
                          <tr className='border-b border-jockey h-12'>
                            <td className={` ${important && 'text-jockey font-gotham-black'}`}>{name}</td>
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