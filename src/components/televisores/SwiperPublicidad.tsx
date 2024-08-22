'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
import { StaticImageData } from 'next/image';
import hot_sale_1 from '../../assets/hot-sale/hot_sale_1.webp'
import hot_sale_2 from '../../assets/hot-sale/hot_sale_2.webp'
import hot_sale_3 from '../../assets/hot-sale/hot_sale_3.webp'

export const SwiperPublicidad = () => {
    
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
            img: hot_sale_1
        },
        {
            img: hot_sale_2
        },
        {
            img: hot_sale_3
        },
    ]

    return (
        <Swiper
          breakpoints={breakpoints}
          loop={true}
          className="w-full h-full"
          autoplay={{
              delay: 5000,
              disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
            {
                imagenes.map(({img}, index) => (
                    <SwiperSlide className='bg-black' key={index}>
                        <div className='w-full h-full relative'>
                            <img src={img.src} alt='Publicidad Jockey GYM' className='size-full object-cover absolute top-0 left-0'/>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
      )
}
