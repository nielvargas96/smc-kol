'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import SideCardItem from '@/components/card/sideCardItem'
import SecondFeaturedItem from './secondFeatured'
import ThirdFeatured from './thirdFeatured';
import { crimson_text } from '@/app/font/fonts';

import useSWR from 'swr'
import axios from 'axios'
import FirstFeatured from './firstFeatured';


import SkeletonSideCardItem from '@/components/skeleton/skeletonSideCardItem'


export default function Page() {

  // More stories
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  // const moreStories = `${process.env.NEXT_PUBLIC_API}/api/stories`;

  const moreStories = `${process.env.NEXT_PUBLIC_API}/api/stories?wo-paginate=1`;
  const { data, error, isLoading } = useSWR(moreStories, fetcher);

  return (
    <section className='flex flex-col max-w-[1180px] mb-[100px] w-full mx-auto px-6 md:flex-row'>
      <div className='flex-1 basis-1/2 relative'>
        {/* Featured items is filtered based on sort order */}
        {/* Sort 1 */}
        <FirstFeatured />

        <div className='flex flex-col justify-between space-y-10 md:space-y-0 md:space-x-7 md:flex-row'>
          {/* Sort 2 */}
          <SecondFeaturedItem />
          {/* Sort 3 */}
          <ThirdFeatured />
        </div>
      </div>

      <div className='flex-1 basis-1/4 mt-6 pl-0 md:pl-12 md:mt-0'>
        <div className='mb-2'>
          <div className='flex flex-col mb-3'>
            {/* <h2 className='mb-3'>More Stories</h2> */}
            <Link className='text-3xl capitalize inline-block mb-3 text-black font-semibold font-poppins hover:text-[#E8412C] tracking-normal' href='/stories' title='More Stories'>More Stories
            </Link>
            {/* <h2 className='mb-3'><Link href="/stories">More Stories</Link></h2> */}
            <span className='block border-b-4 border-[#EFA9A9]  w-[40%]'></span>
          </div>
          {
            !isLoading ?
              <SideCardItem data={data} />
              :
              <>
                <SkeletonSideCardItem />
                <SkeletonSideCardItem />
                <SkeletonSideCardItem />
                <SkeletonSideCardItem />
                <SkeletonSideCardItem />
              </>
          }


          <Link href='/stories' className='group flex items-center' title='More Stories'>
            <ArrowRightCircleIcon className=" h-6 w-6 text-[#E8412C] mr-1" />
            <span className='relative group'>
              More Stories
              <span className="absolute -bottom-2 w-[100%] left-0 -right-2 h-[12%] origin-left scale-x-0 rounded-full bg-[#E8412C] transition-transform duration-300 ease-out group-hover:scale-x-100 "></span>
            </span>
          </Link>

        </div>
      </div>
    </section>
  )
}
