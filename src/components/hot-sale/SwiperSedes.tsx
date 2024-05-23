'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
import { StaticImageData } from 'next/image';
import hot_sale_sedes_1 from '../../assets/hot-sale/hot_sale_sedes_1.webp'
import hot_sale_sedes_2 from '../../assets/hot-sale/hot_sale_sedes_2.webp'
import hot_sale_sedes_3 from '../../assets/hot-sale/hot_sale_sedes_3.webp'
import hot_sale_sedes_4 from '../../assets/hot-sale/hot_sale_sedes_4.webp'
import hot_sale_sedes_5 from '../../assets/hot-sale/hot_sale_sedes_5.webp'
import hot_sale_sedes_6 from '../../assets/hot-sale/hot_sale_sedes_6.webp'
import hot_sale_sedes_7 from '../../assets/hot-sale/hot_sale_sedes_7.webp'
import hot_sale_sedes_8 from '../../assets/hot-sale/hot_sale_sedes_8.webp'

export const SwiperSedes = () => {
    
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
            img: hot_sale_sedes_1
        },
        {
            img: hot_sale_sedes_2
        },
        {
            img: hot_sale_sedes_3
        },
        {
            img: hot_sale_sedes_4
        },
        {
            img: hot_sale_sedes_5
        },
        {
            img: hot_sale_sedes_6
        },
        {
            img: hot_sale_sedes_7
        },
        {
            img: hot_sale_sedes_8
        },
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
                            <img src={img.src} loading="lazy" alt='Hot Sale' className='size-full object-cover absolute top-0 left-0'/>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
      )
}
