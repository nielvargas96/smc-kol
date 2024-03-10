import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SkeletonCardItem from '@/components/skeleton/skeletonCardItem'

export default function CardItem({ data }) {
  return (
    <>
      {!data ?
        <>
          <SkeletonCardItem />
        </>
        :
        <div className='w-full space-y-4'>
          <div className='relative group z-0 overflow-hidden'>
            <Image className='block w-full transition ease-in-out delay-100 group-hover:scale-105 duration-300'
              src={`${process.env.NEXT_PUBLIC_API}${data?.images?.[0]?.image_directory}`}
              alt={data?.name} width={340} height={210} />
            <Link className='absolute top-0 w-full h-full z-2' href={`/stories/${data?.slug}`} title={data?.name}></Link>
          </div>

          <div className='space-y-3'>
            <div className='flex justify-between items-center'>
              <span className='text-[12px] text-[#797979]  tracking-[1px]'>{data?.create_month} {data?.create_day}, {data?.create_year}</span>
              {/* <span className='text-[12px] text-[#797979] uppercase tracking-[1px]'>
                {data.words_by && <> By <b className='font-[600]'>{data?.words_by}</b></>}
              </span> */}
            </div>
            <h4 className='leading-6 line-clamp-2'>{data?.name}</h4>
            <div>
              <Link className='group relative' href={`/stories/${data?.slug}`} title={data.name}>
                Read
                <span className="absolute -bottom-2 w-[100%] left-0 -right-2 h-[12%] origin-left scale-x-0 rounded-full bg-[#E8412C] transition-transform duration-300 ease-out group-hover:scale-x-100 "></span>
              </Link>
            </div>
          </div>
        </div>
      }
    </>
  )
}
