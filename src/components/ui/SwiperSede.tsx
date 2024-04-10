'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../styles/swiperSede.css'
import Image, { type StaticImageData } from 'next/image';
import foto from '../../assets/home/sucursal.webp'

interface Props{
  images: Array<StaticImageData>
  sede: string
}

export const SwiperSede = ({images, sede}:Props) => {

  const breakpoints = {
    320: {
      slidesPerView: 2
    },
    640: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 4
    },
    1280: {
      slidesPerView: 4
    },
    1536: {
      slidesPerView: 4
    },
  }

  return (
    <Swiper
      breakpoints={breakpoints}
      loop={true}
      className="w-full"
      height={480}
    >
      {
        images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.src} loading="lazy" alt={`JOCKEY GYM Sede ${sede}`} className='aspect-square object-cover'/>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}
