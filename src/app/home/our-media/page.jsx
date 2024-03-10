"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { PlayCircleIcon } from "@heroicons/react/20/solid";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, EffectCards, Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';

import useSWR from 'swr'
import axios from 'axios'
import ModalVideo from '@/components/modal/modalVideo';
// import { useEffect } from 'react/cjs/react.production.min';  

export default function Page() {

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const ourMedia = `${process.env.NEXT_PUBLIC_API}/api/videos?wo-paginate=1`;

  const { data, error, isLoading, isValidating } = useSWR(ourMedia, fetcher);

  const filteredData = data?.filter(item => item.featured === 1 && item.publish !== 0).slice(0, 5).sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const [open, setOpen] = useState(false);

  const innerItem = 'innerItem';

  // let activeItem = data?.find(item => item.id === activeIndex);

  // useEffect(() => {
  //   console.log(activeIndex)
  //   // const newData = 
  // }, [activeIndex])

  // const getActiveIndex = data?.find(item => item.id === activeIndex);

  // console.log(getActiveIndex)

  return (
    <section className='bg-zinc-950 flex flex-col justify-center relative our-media' id='ourmedia'>
      <div className='relative'>
        {/* <Image src={`${data && data[activeIndex]?.thumbnailUrl}`} alt='title' fill={true} /> */}
        {/* <div className='h-[80%] w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-600'>
        </div> */}
      </div>

      {/* <div><Image className='grayscale contrast-200 brightness-50' src={`${data && data[activeIndex]?.thumbnailUrl}`} alt='title' fill={true} /></div> */}

      {/* <div className='background-image'><Image src={`${data && data[activeIndex]?.thumbnailUrl}`} alt='title' fill={true} /></div> */}

      {/* <div className='-z-1'><Image src={`${data && data[activeIndex]?.thumbnailUrl}`} alt='title' fill={true} /></div> */}

      {/* Image filter index change */}

      {/* Open modal using shadCn  */}
      {open ? '' :
        <div className={'-z-1'}>
          <Image src={`${process.env.NEXT_PUBLIC_API}/images/videos/${filteredData && filteredData[activeIndex]?.thumbnail}`} alt='title' width='1000' height='1000' className='absolute w-full h-full  top-0 left-0' />
        </div>
      }

      {/* Background black filter */}
      <div className='absolute h-full w-full bg-black/90 backdrop-blur-sm'></div>

      {/* Ellipese Background */}
      <div className='absolute h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 '> </div>

      <h2 className='text-center mb-3 px-6 text-white mt-20 z-10 relative'>Our Videos</h2>

      {/* <div><Image src={data && data[activeIndex]?.thumbnailUrl} alt='title' width={150} height={150} />
        {data && data[activeIndex]?.thumbnailUrl}</div> */}

      <div className='relative md:max-w-[1380px] mx-auto mb-20 mt-10 z-20'>

        {/* {isLoading ?
          <div className='w-[900px] h-full flex'>
            <div className="animate-pulse relative w-full h-[340px] flex align-center justify-center mx-10 mt-5 mb-8">
              <Image className='block mx-auto rounded-2xl' src="/images/kol.png" height="340" width="470" alt='Placeholder' />
            </div>
          </div>
          : */}
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 350,
            modifier: 1,
            slideShadows: false
          }}
          // spaceBetween={-100}
          breakpoints={
            {
              640: {
                spaceBetween: 0
              },
              1024: {
                spaceBetween: -50
              }
            }
          }
          // loop={false}
          modules={[EffectCoverflow, Navigation]}
          // style={{ padding: '3rem 0', maxWidth: '1300px' }}
          onSlideChange={handleSlideChange}
          navigation={{
            nextEl: '.swiper-btn-next',
            prevEl: '.swiper-btn-prev',
          }}
          className={`swiper-ourmedia ${open && 'active'}`}
          initialSlide={0}
        >

          {/* THIS SNIPPET IS FOR TESTING ONLY 
              JSON DATA FROM BE DISPLAY FOR THIS SECTION
               data?.slice().splice(0, 5)
               data.map()
          */}

          {filteredData && filteredData?.map((item, index) => (
            <SwiperSlide key={index} className='drop-shadow-[10px_10px_20px_rgba(0,0,0,.75)] max-w-[470px] mb-4 select-none' >
              <div className='mx-auto mb-[6rem] '>
                <div className='relative overflow-hidden rounded-2xl text-white'>
                  {/* <Image src='/images/our-media-2.png' width='470' height='340' alt='title' /> */}

                  <div className='img-wrapper'>
                    <Image src={`${process.env.NEXT_PUBLIC_API}/images/videos/${item.thumbnail}`} width='470' height='340' alt={item.name} className="w-full h-full" />
                  </div>

                  <div className="absolute h-full w-full top-0">
                    <ModalVideo
                      cn={innerItem}
                      activeId={filteredData && item?.id}
                      data={filteredData} />
                    {/* <ModalVideo cn={innerItem} open={open} setOpen={setOpen}
                      activeId={filteredData && filteredData[activeIndex]?.id}
                      data={filteredData} /> */}
                  </div>

                  {/* <h5 className='text-white '> {item.id} <br /> {index} <br /> ${item.thumbnail} <br />    {data && data[activeIndex]?.thumbnail}</h5> */}
                  {/* <Image src={`http://127.0.0.1:8000/images/videos/${item.preview}`} width='100' height='100' alt='title' /> */}
                  {/* <h2 className='text-white'> {item.id}</h2> */}
                  {/* {item.video_link} */}

                </div>
              </div>

              <div className='w-[210px] outer-btn transition ease-in-out delay-100 hover:scale-105 duration-300'>
                {/* <ModalVideo open={open} setOpen={setOpen}
                  activeId={filteredData && filteredData[activeIndex]?.id}
                  data={filteredData} /> */}
                <ModalVideo
                  // open={open}
                  // setOpen={setOpen}
                  // activeId={filteredData && filteredData[activeIndex]?.id}
                  activeId={filteredData && item?.id}
                  data={filteredData} />
              </div>
            </SwiperSlide>
          ))}

          <SwiperSlide className='drop-shadow-[10px_10px_20px_rgba(0,0,0,.75)] max-w-[470px] mb-4 select-none  ' >
            <div className='mx-auto  h-full w-full   '>
              <div className='relative overflow-hidden rounded-2xl text-white bg-[#000000ba] '>
                {/* <Image src='/images/our-media-2.png' width='470' height='340' alt='title' /> */}

                <div className='img-wrapper'>
                </div>
                <div className='h-[340px] w-[470px] flex items-center justify-center z-1'>
                  <div className='text-center '>
                    <Link href='/videos' title='Watch' className='block mb-5 text-white text-2xl '>more  videos </Link>

                    {/* <h3>6+ <br /> more  videos </h3> */}
                    <div className='transition ease-in-out delay-100 hover:scale-105 duration-300'>
                      <Link href='/videos' title='Watch' className='group hover:bg-white btn-watch rounded-3xl bg-[#FC2815] w-full p-3 text-white flex items-center justify-center capitalize text-xl z-1 '>
                        <PlayCircleIcon className="h-6 w-6 text-white group-hover:text-[#FC2815]" />
                        <span className='pl-1 group-hover:text-[#FC2815]'>Watch</span>
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            {/* <div className='w-[210px] outer-btn transition ease-in-out delay-100 hover:scale-105 duration-300'>
              <Link href='/videos' title='Watch' className='  btn-watch   rounded-3xl bg-[#FC2815] w-full p-3 text-white flex items-center justify-center capitalize text-xl z-1 '>
                <PlayCircleIcon className="h-6 w-6 text-white  " />
                <span className='pl-1'>Watch</span>
              </Link>
            </div> */}


          </SwiperSlide>
        </Swiper>
        {/* } */}

        <div className='z-10 '>
          <div className='transition ease-in-out delay-100 swiper-btn-next swiper-button-next bg-white hover:bg-[#E8412C]    top-40 rounded-full '> </div>
          <div className='transition ease-in-out delay-100 swiper-btn-prev swiper-button-prev bg-white hover:bg-[#E8412C]  top-40 rounded-full '> </div>
        </div>
      </div>

      {/* <div className='w-[210px] mx-auto z-10 mb-20'>

        <Link href={`/videos/${data && data[activeIndex]?.id}`} className='bg-[#FC2815] p-3 text-white flex items-center justify-center capitalize w-full text-xl z-1'>
            <PlayCircleIcon className="h-6 w-6 text-white" /> <span className='pl-1'>Watch </span>
          </Link>

        <ModalVideo open={open} setOpen={setOpen} activeId={filteredData && filteredData[activeIndex]?.id} data={filteredData} />

      </div> */}

    </section >
  )
}
