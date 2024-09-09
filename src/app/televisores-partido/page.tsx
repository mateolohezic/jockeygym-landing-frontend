import type { Metadata } from "next";
import { SwiperPartido } from "@/components";
import Marquee from "react-fast-marquee";

export const metadata: Metadata = {
  title: 'Televisores',
  description: "Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.",
};

export default function TelevisoresPartidoPage() {
  return (
    <main className="grow w-full fixed top-0 left-0 z-[999999]">
      <section className="w-full flex justify-center items-stretch relative flex-wrap">
        <div className="w-9/12 h-svh flex flex-col justify-center items-center bg-green-500">
          <div className="w-full aspect-video bg-black h-fit"></div>
          <div className="w-full grow bg-white border-t-2 border-jockey flex flex-col justify-center items-center">
            <Marquee autoFill speed={150} gradient className="w-full">
              <h2 className="text-7xl text-jockey mx-2">HASTA 12 CUOTAS SIN INTERES JOCKEY GYM ANUAL VIP RENOVADOS -</h2>
            </Marquee>
            {/* <Marquee autoFill speed={100} gradient>
              <h2 className="text-sm text-jockey mx-4">No pares de entrenar</h2>
            </Marquee> */}
          </div>
        </div>
        <div className="bg-black w-3/12 border-l-2 border-jockey">
          <SwiperPartido/>
        </div>
      </section>
    </main>
  );
}