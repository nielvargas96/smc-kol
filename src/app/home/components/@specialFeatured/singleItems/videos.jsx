import React from 'react'

import useSWR from 'swr'
import axios from 'axios'
import Link from 'next/link'

import Image from 'next/image'

export default function Videos({ dataProps }) {

  const api = `${process.env.NEXT_PUBLIC_API}/api/videos?id=${dataProps?.link_id}&wo-paginate=1`;

  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const { data, error, isLoading } = useSWR(api, fetcher);

  const item = data && data[0];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  // Check if data is available before rendering
  if (!data) return <div>No data available</div>;

  return (
    <>
      <div>
        <Image src={`${process.env.NEXT_PUBLIC_API}/images/videos/${item?.thumbnail}`} width="760" height="430" alt={item?.name} />
        <Link className='absolute top-0 w-full h-full z-2' href={`/special/${item?.slug}`} title={item?.name}></Link>
      </div>

      <div className='flex-1 basis-1/4 mt-6 pl-0 md:pl-12 md:mt-0'>
        <div className='mb-4'>
          <h2 className='mb-4'>
            {item?.name}
          </h2>

          {/* <span className='block text-[12px] mb-4 text-[#797979] uppercase tracking-[1px]'>
          {
            item?.published_by &&
            <>
              By <span className="font-[600]">{item?.published_by}</span>
            </>s
          }
        </span>

        <span className="block border-b-4 border-[#EFA9A9]  w-[170px]"></span> */}
        </div>
        {/* 
        {item?.words_by &&
          <span className='block text-[12px] mb-4 text-[#797979] uppercase'>
            {item?.words_by}
          </span>
        } */}

        <p className='mb-4'>
          {item?.teaser}
        </p>

        <Link className='relative group' href={`/videos/${item?.slug}`} title='Watch' >Watch
          <span className="absolute -bottom-2 w-[100%] left-0 -right-2 h-[12%] origin-left scale-x-0 rounded-full bg-[#E8412C] transition-transform duration-300 ease-out group-hover:scale-x-100 "></span>
        </Link>
      </div>
    </>
  )
}
