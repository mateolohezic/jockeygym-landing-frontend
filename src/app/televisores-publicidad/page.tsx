import type { Metadata } from "next";
import { SwiperPublicidad } from "@/components";

export const metadata: Metadata = {
  title: 'Televisores',
  description: "Instalaciones con altos standares de calidad. Un Jockey Gym cerca, no importa donde estes. Actualmente con 7 clubes en la provincia y más de 30 años en el sector. Cambiamos la vida de miles y miles de tucumanos que entrenan todos los días en nuestras instalaciones junto con los mejores profesionales de la actividad física y nutrición. Contamos con una amplia grilla de horarios para que puedas entrenar diariamiente y a tu ritmo. Buscamos constantemente adaptarnos a las necesidades de nuestros socios en cuanto a variedad y tipos de clases.",
};

export default function TelevisoresPublicidadPage() {
  return (
    <main className="grow w-full fixed top-0 left-0 z-[999999]">
      <section className="w-full h-svh flex justify-center items-center relative">
        <SwiperPublicidad/>
      </section>
    </main>
  );
}