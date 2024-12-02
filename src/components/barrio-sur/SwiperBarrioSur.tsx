'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
import { StaticImageData } from 'next/image';
import barrio_sur_1 from '../../assets/barrio-sur/barrio_sur_1.webp';
import barrio_sur_2 from '../../assets/barrio-sur/barrio_sur_2.webp';
import barrio_sur_3 from '../../assets/barrio-sur/barrio_sur_3.webp';
import barrio_sur_4 from '../../assets/barrio-sur/barrio_sur_4.webp';
import barrio_sur_5 from '../../assets/barrio-sur/barrio_sur_5.webp';
import barrio_sur_6 from '../../assets/barrio-sur/barrio_sur_6.webp';
import barrio_sur_7 from '../../assets/barrio-sur/barrio_sur_7.webp';

export const SwiperBarrioSur = () => {
    
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

    const imagenes: Array<{img:StaticImageData}> = [
        {
            img: barrio_sur_1
        },
        {
            img: barrio_sur_2
        },
        {
            img: barrio_sur_3
        },
        {
            img: barrio_sur_4
        },
        {
            img: barrio_sur_5
        },
        {
            img: barrio_sur_6
        },
        {
            img: barrio_sur_7
        }
    ]

    return (
        <Swiper
          breakpoints={breakpoints}
          loop={true}
          className="w-full h-full"
          autoplay={{
              delay: 2000,
              disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
            {
                imagenes.map(({img}, index) => (
                    <SwiperSlide className='bg-white' key={index}>
                        <div className='w-full h-full relative'>
                            <img src={img.src} loading="lazy" alt='Nueva sucursal Barrio Sur' className='size-full object-cover absolute top-0 left-0'/>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
      )
}
