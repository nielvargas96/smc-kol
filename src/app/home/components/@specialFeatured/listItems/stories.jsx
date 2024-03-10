"use client"

import React from 'react'
import Link from 'next/link'

import Image from 'next/image'
import useSWR from 'swr'
import axios from 'axios'

export default function Stories({ dataProps }) {

  const api = `${process.env.NEXT_PUBLIC_API}/api/stories?id=${dataProps?.link_id}&wo-paginate=1`;

  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const { data, error, isLoading } = useSWR(api, fetcher);

  const item = data && data

  // const imageDir = item[0]?.images[0]?.image_directory

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  // Check if data is available before rendering
  if (!data) return <div>No data available</div>;

  return (
    <div className="flex   gap-x-4">
      <div className="w-[100px] relative">
        <Image src={`${process.env.NEXT_PUBLIC_API}/${item[0]?.images[0]?.image_directory}`} className="block h-100 m-w-100" height={100} width={100} alt={item[0]?.title} />
        <Link className="absolute top-0 w-full h-full z-2" title={item[0]?.title} href={`/stories/${item[0]?.slug}`}></Link>
      </div>

      <div className="flex-1 flex">
        <div className="flex flex-col">
          <p className="text-[12px] font-normal font-poppins capitalize text-[#797979] tracking-[1px]">
            {item[0]?.created_at &&
              <>
                <span className="font-[400]">
                  {new Date(item[0]?.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </>}
          </p>

          <p className="mt-1 mb-2 font-semibold  text-sm  font-poppins text-[#2C2C2C] leading-5">
            <Link className="tracking-[0] normal-case font-semibold text-[16px] font-poppins text-[#2C2C2C] leading-5 line-clamp-2" title={item[0]?.title} href={`/stories/${item[0]?.slug}`}>
              {item[0]?.name}
            </Link>
          </p>
          {/* 
          <p className="text-[12px] font-normal font-poppins uppercase text-[#797979] tracking-[1px]">
            {
              item[0]?.words_by &&
              <>
                By <span className="font-[600]">{item[0]?.words_by}</span>
              </>
            }

          </p> */}

          <div className='mt-auto'>
            <Link className='relative group' href={`/stories/${item[0]?.slug}`} title='Read More'>
              Read
              <span className="absolute -bottom-2 w-[100%] left-0 -right-2 h-[12%] origin-left scale-x-0 rounded-full bg-[#E8412C] transition-transform duration-300 ease-out group-hover:scale-x-100 "></span>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
