"use client"

import React from 'react'
import Image from 'next/image'
import List from './list'

import useSWR from 'swr'
import axios from 'axios'
import Single from './single'

export default function SpecialFeatured() {

  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const api = `${process.env.NEXT_PUBLIC_API}/api/specials/setup`;

  const { data, error, isLoading } = useSWR(api, fetcher);

  const gradientBg = {
    background: `linear-gradient(to bottom, #${data?.color_a}, #${data?.color_b}, transparent)`
  };

  return (
    <>
      <section style={gradientBg}>
        {/* // {`bg-gradient-to-b from-[#${data?.color_a}] via-[#${data?.color_b}] to-transparent`} */}
        <div className='mb-12'>
          <div className="flex align-middle px-6 justify-center flex-col mb-3 mx-auto ">
            <h2 className="mb-4 mx-auto mt-20">{data?.name}</h2>
            <span className="block mx-auto border-b-4 border-[#EFA9A9]  w-[170px]"></span>
          </div>

          {/* SINGLE */}
          <Single />
        </div>

        {/* LIST  */}
        <List />
      </section>

    </>
  )
}
