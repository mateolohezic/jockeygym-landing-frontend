'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
import imagen1 from '../../assets/sedes/catalinas/sede_catalinas_1.webp'
import imagen2 from '../../assets/sedes/catalinas/sede_catalinas_2.webp'
import imagen3 from '../../assets/sedes/catalinas/sede_catalinas_3.webp'
import imagen4 from '../../assets/sedes/catalinas/sede_catalinas_4.webp'
import imagen5 from '../../assets/sedes/catalinas/sede_catalinas_5.webp'

export const SwiperFotos = () => {
    
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
          className="w-full h-full bg-green-500"
          autoplay={{
              delay: 2000,
              disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
            <SwiperSlide>
                <div className='w-full h-full relative'>
                    <img src={imagen1.src} alt='Hot Sale' className='size-full object-cover absolute top-0 left-0'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full h-full relative'>
                    <img src={imagen2.src} alt='Hot Sale' className='size-full object-cover absolute top-0 left-0'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full h-full relative'>
                    <img src={imagen3.src} alt='Hot Sale' className='size-full object-cover absolute top-0 left-0'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full h-full relative'>
                    <img src={imagen4.src} alt='Hot Sale' className='size-full object-cover absolute top-0 left-0'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full h-full relative'>
                    <img src={imagen5.src} alt='Hot Sale' className='size-full object-cover absolute top-0 left-0'/>
                </div>
            </SwiperSlide>
        </Swiper>
      )
}
