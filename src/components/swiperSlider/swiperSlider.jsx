"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'

import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function SwiperSlider({ data }) {
  return (
    <>
      <div className='relative my-6  '>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-btn-next-component',
            prevEl: '.swiper-btn-prev-component',
          }}
        >
          {data.map((item) =>
            <SwiperSlide key={item.id}>
              <Image className='select-none' src={`${process.env.NEXT_PUBLIC_API}${item.file_directory}`} alt={item.file} width='730' height='460' />
            </SwiperSlide>
          )}
        </Swiper>

        <div>
          <div className='swiper-btn-next-component swiper-button-next bg-white mr-4 rounded-full'> </div>
          <div className='swiper-btn-prev-component swiper-button-prev bg-white ml-4 rounded-full'> </div>
        </div>

        <p className='font-poppins text-xs text-[#797979] mt-4'>{data.title}</p>
      </div>
    </>
  );
};
