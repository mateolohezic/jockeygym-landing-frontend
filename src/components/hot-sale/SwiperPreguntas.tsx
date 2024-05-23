'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';

interface Pregunta{
    text: string,
}

export const SwiperPreguntas = () => {
    
    const breakpoints = {
        320: {
            slidesPerView: 1
        },
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 1
        },
        1280: {
            slidesPerView: 1
        },
        1536: {
            slidesPerView: 1
        },
    }
    
    const preguntas:Array<Pregunta> = [
        {
            text: '¿Tenés algún evento importante en los próximos meses al que quieras llegar en forma?'
        },
        {
            text: '¿Postergás el gym para el próximo lunes, próximo mes, y al final nunca empezás?'
        },
        {
            text: '¿Sufrís alguna enfermedad “crónica” e “incurable”?'
        },
        {
            text: '¿Tenés algún dolor inhabilitante que no te deja disfrutar de tu vida?'
        },
        {
            text: '¿Te cuesta mucho encontrar un espacio en el que te sientas cómodo y acompañado en tu proceso?'
        },
        {
            text: '¿Empezaste con muchas ganas pero te falta disciplina para sostenerlo en el tiempo?'
        },
    ];
    
    return (
        <Swiper
          breakpoints={breakpoints}
          loop={true}
          className="w-full"
          autoplay={{
              delay: 4000,
              disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
            {
                preguntas.map(({text}, index) => (
                    <SwiperSlide key={index}>
                        <div className='w-full flex flex-col justify-start items-start text-start'>
                            <h5 className='w-full text-white text-xl lg:text-5xl font-gotham-black'>{text}</h5>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
      )
}
