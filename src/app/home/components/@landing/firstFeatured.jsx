import React from 'react'

import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import Image from 'next/image'
import Link from 'next/link'

import useSWR from 'swr'
import axios from 'axios'


export default function FirstFeatured() {

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const firstFeatureAPI = `${process.env.NEXT_PUBLIC_API}/api/stories?featured=1&sort=1`;
  const { data, error } = useSWR(firstFeatureAPI, fetcher);

  const item = data ? data?.data[0] : null;

  return (
    <figure className='relative mb-7 group'>
      <div className='relative z-0 overflow-hidden w-[712px] h-[450px] '>
        {item && item.images && item.images[0] && (
          <Image
            className='block transition ease-in-out delay-100 group-hover:scale-105 duration-300'
            src={`${process.env.NEXT_PUBLIC_API}${item.images[0].image_directory}`}
            alt={item?.name}
            width={712}
            height={450}
          />
        )}
        <div className='absolute top-0 z-1 bg-gradient-to-b from-transparent to-black opacity-65 h-full w-full'></div>
        <Link className='absolute top-0 w-full h-full z-2' href={`/stories/${item?.slug}`} title={item?.name}></Link>
      </div>

      <figcaption className='absolute top-auto bottom-0 z-1 p-7'>
        <Link className='absolute top-0 left-0 w-full h-full' href={`/stories/${item?.slug}`} title={item?.name}></Link>
        <span className='block text-xs text-white font-light mb-2 font-poppins tracking-[1px]'>
          {item?.create_month} {item?.create_day}, {item?.create_year}
        </span>

        <h1 className='text-white mb-3 text-xl md:text-2xl lg:text-4xl'>
          {item?.name}
        </h1>

        <Link href={`/stories/${item?.slug}`} title='Read more' className='relative  items-center text-white font-normal z-1 hover:text-[#FC2815] duration-300 cursor-pointer'>
          Read
          <span className="absolute -bottom-2 w-[100%] left-0 -right-2 h-[12%] origin-left scale-x-0 rounded-full bg-[#f1debc] transition-transform duration-300 ease-out group-hover:scale-x-100 "></span>
        </Link>
      </figcaption>
    </figure>
  )
}
