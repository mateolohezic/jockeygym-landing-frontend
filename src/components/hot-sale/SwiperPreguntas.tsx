'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';

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

    return (
        <Swiper
          breakpoints={breakpoints}
          loop={true}
          className="w-full"
          autoplay={{
              delay: 2000,
              disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
            <SwiperSlide>
                <div className='w-full flex flex-col justify-start items-start text-start'>
                    <h5 className='w-full text-white text-xl lg:text-4xl font-gotham-black'>¿Pregunta pregunta pregunta?</h5>
                    <h6 className='mt-1 w-full text-white text-base lg:text-xl font-gotham'>Respuesta respuesta respuesta respuesta respuesta respuesta respuesta respuesta.</h6>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full flex flex-col justify-start items-start text-start'>
                    <h5 className='w-full text-white text-xl lg:text-4xl font-gotham-black'>¿Pregunta pregunta pregunta?</h5>
                    <h6 className='mt-1 w-full text-white text-base lg:text-xl font-gotham'>Respuesta respuesta respuesta respuesta respuesta respuesta respuesta respuesta.</h6>
                </div>
            </SwiperSlide>
        </Swiper>
      )
}
