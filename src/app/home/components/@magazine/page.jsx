"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import useSWR from 'swr'
import axios from 'axios'

import ModalMagazine from '@/components/modal/modalMagazine'
import SkeletonCardItem2 from '@/components/skeleton/skeletonCardItem2'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function Page() {

  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const api = `${process.env.NEXT_PUBLIC_API}/api/magazines?wo-pagination=1`;

  const { data, error, isLoading } = useSWR(api, fetcher);

  const homepageMagazine = 'homepageMagazine'


  return (
    <section className='max-w-[1180px] mb-[100px] mt-10 w-full mx-auto px-6 ' id="magazine">
      <div className='mb-6'>
        <div className="flex align-middle px-6 justify-center flex-col mb-10 mx-auto ">
          <h2 className="mb-4 mx-auto mt-20">Magazine</h2>
          <span className="block mx-auto border-b-4 border-[#EFA9A9]  w-[170px]"></span>
        </div>

        {/* <div className='flex space-x-5 items-center justify-center'>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Month</SelectLabel>
                <SelectItem value="January">January</SelectItem>
                <SelectItem value="February">February</SelectItem>
                <SelectItem value="March">March</SelectItem>
                <SelectItem value="April">April</SelectItem>
                <SelectItem value="May">May</SelectItem>
                <SelectItem value="June">June</SelectItem>
                <SelectItem value="July">July</SelectItem>
                <SelectItem value="August">August</SelectItem>
                <SelectItem value="September">September</SelectItem>
                <SelectItem value="October">October</SelectItem>
                <SelectItem value="November">November</SelectItem>
                <SelectItem value="December">December</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Year</SelectLabel>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <button className='flex w-[120px] h-12 text-[#E8412C] rounded-full  border-[#E8412C] border-2 font-tabletgothic justify-center items-center'>
            <ArrowRightCircleIcon className="h-5 w-5 text-[#E8412C] mr-1" /> Search
          </button>
        </div> */}
      </div>

      <div className='relative max-w-[1180px]'>
        <div className='relative'>
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            className='swiper-2'
            navigation={{
              nextEl: '.swiper-btn-next2',
              prevEl: '.swiper-btn-prev2',
            }}
            speed={800}
            breakpoints={{
              580: {
                slidesPerView: 2,
                slidesPerGroup: 1
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 1
              },
            }}
            style={{ padding: '1rem' }}
          >

            {isLoading ?
              <div className='flex gap-4'>
                <SkeletonCardItem2 />
                <SkeletonCardItem2 />
                <SkeletonCardItem2 />
                <SkeletonCardItem2 />
              </div>
              :
              <>
                {data?.data && data.data?.map((item) => (
                  <SwiperSlide
                    key={item.id}
                  >
                    <div className='relative overflow-hidden p-[1rem] bg-white flex align-middle  justify-center drop-shadow-sm hover:scale-105   hover:drop-shadow-lg  duration-300'>
                      <Image className='select-none' src={`${process.env.NEXT_PUBLIC_API}/images/magazine/${item?.thumbnail}`} alt={item?.name} width={230} height={340} />
                      <ModalMagazine item={item} page={homepageMagazine} />
                    </div>
                    <p className='mt-5 mb-1 text-center text-lg font-opensans font-semibold'>
                      {item.name}
                    </p>
                    <p className='text-center text-lg font-opensans font-light'>
                      {/* January &ndash; June  {item.create_year} */}
                      {item.issue}
                    </p>
                  </SwiperSlide>
                ))}
              </>
            }

          </Swiper>

          <div className='z-10'>
            <div className='swiper-btn-next2 swiper-button-next bg-[#E8412C] text-white rounded-full'></div>
            <div className='swiper-btn-prev2 swiper-button-prev bg-[#E8412C] text-white rounded-full'> </div>
          </div>
        </div>
      </div>
    </section>
  )
}
