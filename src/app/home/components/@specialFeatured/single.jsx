import React from 'react'
import Image from 'next/image'

import useSWR from 'swr'
import axios from 'axios'
import Link from 'next/link'
import Stories from './singleItems/stories';
import Videos from './singleItems/videos';

export default function Single() {
  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const api = `${process.env.NEXT_PUBLIC_API}/api/specials`;

  const { data, error, isLoading } = useSWR(api, fetcher);

  const filteredData = data ? data?.filter(item => item.publish !== 0) : [];

  const item = filteredData[0]

  // console.log(item?.id)

  return (
    <div className='flex flex-col max-w-[1180px] w-full mx-auto mt-10 px-6 md:flex-row'>

      {
        item?.special_type === 0 &&
        <>
          <div className="relative">
            <Image src={`${process.env.NEXT_PUBLIC_API}/images/specials/${item?.thumbnail}`} width="760" height="430" alt={item?.name} />
            <Link className='absolute top-0 w-full h-full z-2' href={`/special/${item?.slug}`} title={item?.name}></Link>
          </div>

          <div className='flex-1 basis-1/4 mt-6 pl-0 md:pl-12 md:mt-0'>
            <div className='mb-4'>
              <h2 className='mb-4'>
                {item?.name}
              </h2>
              <span className='block text-[12px] mb-4 text-[#797979] uppercase'>

                {/* {item?.published_by &&
                  <span className='block text-[12px] mb-4 text-[#797979] uppercase tracking-[1px]'>
                    By <span className="font-[600]">{item?.published_by}</span>
                  </span>
                } */}
              </span>

              {/* <span className="block border-b-4 border-[#EFA9A9]  w-[170px]"></span> */}
            </div>

            <p className='mb-4'>
              {item?.teaser}
            </p>

            <Link className="relative group" href={`/special/${item?.slug}`} title='Read' >
              Read
              <span className="absolute -bottom-2 w-[100%] left-0 -right-2 h-[12%] origin-left scale-x-0 rounded-full bg-[#E8412C] transition-transform duration-300 ease-out group-hover:scale-x-100 "></span>
            </Link>
          </div>
        </>
      }

      {
        item?.special_type === 1 && <Stories dataProps={item} />
      }

      {
        item?.special_type === 2 && <Videos dataProps={item} />
      }


      {/* <div>
        <div><Image src={`${process.env.NEXT_PUBLIC_API}/images/specials/${data && data[0]?.thumbnail}`} width="760" height="430" alt='title' /></div>
      </div>

      <div className='flex-1 basis-1/4 mt-6 pl-0 md:pl-12 md:mt-0'>
        <div className='mb-4'>
          <h2 className='mb-4'>
            {data && data[0]?.name}
          </h2>
          <span className="block border-b-4 border-[#EFA9A9]  w-[170px]"></span>
        </div>


        {data && data[0].published_by &&
          <span className='block text-[12px] mb-4 text-[#797979] uppercase'>
            {data[0].published_by}
          </span>
        }

        <p className='mb-4'>
          {data && data[0]?.teaser}
        </p>

        <a href="/" title='Read More' >Read More</a>
      </div> */}

    </div>
  )
}
