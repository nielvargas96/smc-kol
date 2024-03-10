"use client"

import React from 'react'
import Image from 'next/image'

import useSWR from 'swr'
import axios from 'axios'
import Link from 'next/link'
import Stories from './listItems/stories'
import Videos from './listItems/videos'


export default function List() {

  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const api = `${process.env.NEXT_PUBLIC_API}/api/specials`;

  const { data, error, isLoading } = useSWR(api, fetcher);

  const filteredData = data ? data.filter(item => item.publish !== 0) : [];

  const items = filteredData.slice(1, 4);

  return (
    <div className='flex flex-col max-w-[1180px] pb-6 md:pb-0 w-full mx-auto px-6 md:flex-row'>
      <ul role='list' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:divide-x space-y-6 md:space-y-0 sm:space-y-0 '>
        {items.map((item, index) => (
          <li key={index} className='mb-5 md:mb-0 first:pl-0 pl-6'>
            {
              item.special_type === 0 &&
              <div className="flex  gap-x-4">

                <div className="w-[100px] relative">
                  <Image src={`${process.env.NEXT_PUBLIC_API}/images/specials/${item.thumbnail}`} className="block h-100 m-w-100" height={100} width={100} alt={item.title} />
                  <Link className="absolute top-0 w-full h-full z-2" title={item.title} href={`/special/${item.slug}`}></Link>
                </div>

                <div className="flex-1 flex ">
                  <div className="flex flex-col">

                    <p className="text-[12px] font-normal font-poppins capitalize text-[#797979] tracking-[1px]">
                      {item.created_at &&
                        <>
                          <span className="font-[400]">
                            {new Date(item.created_at).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                        </>}
                    </p>

                    <p className="mt-1 mb-2 font-semibold  text-sm  font-poppins text-[#2C2C2C] leading-5">
                      <Link className="tracking-[0] normal-case  font-semibold text-[16px]  font-poppins text-[#2C2C2C] leading-5 line-clamp-2" title={item.title} href={`/special/${item.slug}`}>
                        {item.name}
                      </Link>
                    </p>
                    {/* <p className="text-[12px] font-normal font-poppins uppercase text-[#797979] ">
                      {item.published_by &&
                        <>
                          By <span className="font-[600]">{item.published_by}</span>
                        </>
                      }

                    </p> */}

                    <div className='mt-auto'>
                      <Link className='relative group' href={`/special/${item.slug}`} title='Read '>
                        Read
                        <span className="absolute -bottom-2 w-[100%] left-0 -right-2 h-[12%] origin-left scale-x-0 rounded-full bg-[#E8412C] transition-transform duration-300 ease-out group-hover:scale-x-100 "></span>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            }

            {
              item.special_type === 1 && <Stories dataProps={item} />
            }

            {
              item.special_type === 2 && <Videos dataProps={item} />
            }

          </li>
        ))}
        {/* <li className='mb-5 pl-0'>
          <div className="flex flex-row-reverse gap-x-4">

            <div className="w-[100px] relative">
              <Image src='https://via.placeholder.com/150/24f355' className="block h-100 m-w-100" height={100} width={100} alt='title' />
              <a className="absolute top-0 w-full h-full z-2" title="Link" href="#"></a>
            </div>

            <div className="flex-1 flex items-center">
              <div>
                <p className="text-[10px] text-[#797979] font-poppins uppercase">3 Jan 7, 2024  </p>
                <p className="mt-1 mb-2 font-semibold  text-sm  font-poppins text-[#2C2C2C] leading-5">
                  <a className="tracking-[0] normal-case font-semibold text-sm font-poppins text-[#2C2C2C] leading-4" title="Link" href="#">
                    officia porro iure quia iusto qui ipsa ut modi
                  </a>
                </p>
                <p className="text-[12px] font-normal font-poppins uppercase text-[#797979]">By <span className="font-[700]">John Doe</span></p>

                <a href="/" title='Read More' >Read More</a>
              </div>
            </div>

          </div>
        </li> */}
      </ul>
    </div>
  )
}
