import React from 'react'
import Image from 'next/image'
import SkeletonSideCardItem from '@/components/skeleton/skeletonSideCardItem'
import Link from 'next/link'

export default function SideCardItem({ data }) {

  let normalizedData = [];
  if (data) {
    if (Array.isArray(data)) {
      normalizedData = data;
    } else if (data.data && Array.isArray(data.data)) {
      normalizedData = data.data;
    }
  }

  const filteredData = normalizedData
    // Filter out items with publish === 0
    .filter(item => item.publish !== 0)
    // Filter out items with sort values 1, 2, or 3
    .filter(item => ![1, 2, 3].includes(item.sort))
    // Sort by create_at date in descending order
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    // Take the latest 5 items
    .slice(0, 5);


  return (
    <ul role="list" className='mt-8 mb-[-0.5rem]'>
      {
        filteredData?.map((item, index) => {
          const imageUrl = item?.images?.[0]?.image_directory ? `${process.env.NEXT_PUBLIC_API}${item.images[0].image_directory}` : '/images/kol_xs.png';

          return (

            <li key={index} className="mb-8">
              <div className="flex gap-x-4">
                <div className='w-[100px] relative'>
                  <Image className="block h-100 m-w-100" width="100" height="100"
                    src={imageUrl}
                    alt={item.name}
                    style={{ height: '100px', width: '100px' }}
                  />
                  <Link className='absolute top-0 w-full h-full z-2' href={`/stories/${item.slug}`} title={item.name}></Link>
                </div>

                <div className="flex-1 flex items-start">
                  <div>
                    <p className="text-[10px] text-[#797979] font-poppins capitalize tracking-[1px]"> {item?.create_month} {item?.create_day}, {item?.create_year} </p>
                    <p className="mt-1 mb-2 font-semibold  text-sm  font-poppins text-[#2C2C2C] leading-5">
                      <Link className='tracking-[0] normal-case font-semibold  text-[16px] font-poppins text-[#2C2C2C] leading-5 line-clamp-3	' href={`/stories/${item.slug}`} title={item.name}>
                        {item.name}
                      </Link>
                    </p>

                    {/* {item.words_by && (
                      <p className='text-[10px] font-normal font-poppins uppercase text-[#797979] tracking-[1px]'>Written By <span className='font-[600]'>
                        {item.words_by}</span>
                      </p>
                    )} */}

                  </div>
                </div>
              </div>
            </li>
          )
        }
        )
      }


      {/* <li className="mb-6">
        <div className="flex gap-x-4">
          <div className='w-130'>
            <img className="block h-130 m-w-130" width="130" height="130" src="/images/placeholder.png" alt="Image" />
          </div>

          <div className="block">
            <p className="text-[10px] text-[#797979] font-poppins uppercase">{data.thumbnailUrl} Jan 7, 2024</p>
            <p className="mt-1 mb-2 font-semibold  text-sm  font-poppins text-[#2C2C2C] leading-5">
              {data.title}
              Id lobortis ac ultrices at tortor libero. At pretium montes.</p>
            <p>{data.body}</p>
            <p className='text-[10px] font-normal font-poppins uppercase text-[#797979]'>Written By <span className='font-[900]'>Joe Lardo</span></p>
          </div>
        </div>
      </li> */}
    </ul>
  )
}
