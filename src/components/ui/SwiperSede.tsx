'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../styles/swiperSede.css'
import Image from 'next/image';
import foto from '../../assets/sucursal.webp'

export const SwiperSede = () => {

  const breakpoints = {
    // when window width is >= 320px
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
      <SwiperSlide><Image src={foto} alt='Foto' className='aspect-square object-cover'/></SwiperSlide>
      <SwiperSlide><Image src={foto} alt='Foto' className='aspect-square object-cover'/></SwiperSlide>
      <SwiperSlide><Image src={foto} alt='Foto' className='aspect-square object-cover'/></SwiperSlide>
      <SwiperSlide><Image src={foto} alt='Foto' className='aspect-square object-cover'/></SwiperSlide>
      <SwiperSlide><Image src={foto} alt='Foto' className='aspect-square object-cover'/></SwiperSlide>
    </Swiper>
  )
}
