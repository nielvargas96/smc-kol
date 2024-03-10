import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { PlayCircleIcon } from "@heroicons/react/20/solid";
import Player from '@/components/video/player'

export async function generateStaticParams() {
  const videos = await fetch(`${process.env.NEXT_PUBLIC_API}/api/videos?wo-paginate=1`, { revalidate: 0 }).then((res) => res.json());
  return videos.map((item) => ({
    slug: item.slug
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = await fetch(`${process.env.NEXT_PUBLIC_API}/api/videos?slug=${slug}`, { revalidate: 0 }).then((res) => res.json());
  const item = data.data[0];

  return {
    name: item.name,
  }
}

export default async function Page({ params }) {

  const { slug } = params;
  const data = await fetch(`${process.env.NEXT_PUBLIC_API}/api/videos?slug=${slug}`, { revalidate: 0 }).then((res) => res.json());

  const item = data.data[0];

  return (
    <section className='mb-40 relative'>
      <div className='min-h-[40vh] w-full px-6 bg-[#F9F0DF] pt-[4rem]  absolute top-0'>
        {/* <div className='flex w-full items-end justify-between max-w-[1180px] mx-auto my-10'>
        </div> */}
      </div>
      <div className='pt-[4rem] w-full relative z-1   px-7'>
        <div className='max-w-[900px] mx-auto my-10'>
          <div className='pt-8 relative'>
            {/* <video fill controls preload="none" width='1160' height='565'>
              <source src="https://sxrtmwec.forapprovalonly.net/sustainability/images/video/SMCAVP.mp4" type="video/mp4" />
            </video> */}
            <Player data={item.video_link} />
          </div>

          <div className='flex flex-col md:flex-row mt-10 md:space-x-14'>
            <div className='w-full'>
              <h1 className='mb-10'>{item.name}</h1>
              <div className="flex justify-between items-center">
                {/* <span className="text-[12px] text-[#797979] capitalize">{item.published_by && <>By <b className="font-[700]">{item.published_by}</b></>} </span> */}
                <span className="text-[12px] text-[#797979] capitalize">
                  {item.created_at &&
                    <>
                      Published {new Date(item.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </>}
                </span>
              </div>

              <div className=" border-b border-[#CDCBCB] mt-6 mb-8 w-full "></div>

              <div>
                <p className='mb-7 text-lg'>
                  {item.teaser}
                </p>

                {/* <p className='mb-7 text-lg'>
                  Viverra nascetur cras aliquam morbi cursus blandit et a. Sed nibh adipiscing vulputate sit consectetur fringilla in rhoncus aenean. Rhoncus massa est vitae semper pretium egestas vestibulum suscipit eget. Mauris sit erat ut enim vitae viverra. Nunc a in scelerisque urna scelerisque adipiscing eget facilisis cras. Nulla tempor risus blandit sit felis lobortis a nisi lacus. Ante in pellentesque et urna vestibulum placerat odio purus eros. Eget sit felis.
                </p> */}

                <div className='flex mt-10 flex-col space-y-5 sm:space-y-0 sm:space-x-4 sm:flex-row mb-10'>
                  <Link className='flex-1 flex justify-between items-center normal-case	tracking-normal font-poppins text-[#585858] border border-[#CDCDCD] rounded-lg p-4 hover:border-[#585858] duration-150' href='/' target='_blank' title='Link'>
                    <span>External link or for credits: Lorem Ipsum dolor</span>
                    <ArrowRightIcon className="h-4 w-4 min-w-8 ml-4 text-gray-500" />
                  </Link>

                  <Link className='flex-1 flex justify-between items-center normal-case	tracking-normal font-poppins text-[#585858] border border-[#CDCDCD] rounded-lg p-4 hover:border-[#585858] duration-150' href='/' target='_blank' title='Link'>
                    <span>External link or for credits: Lorem Ipsum dolor</span>
                    <ArrowRightIcon className="h-4 w-4 min-w-8 ml-4 text-gray-500" />
                  </Link>
                </div>
              </div>
            </div>

            {/* NEXT VIDEOS */}
            <aside className='w-full max-w-[35%]'>
              <div className="flex flex-col mb-2">
                <h3 className="mb-3">Watch next</h3>
                <span className="block border-b-4 border-[#EFA9A9]  w-[50%]"></span>
              </div>
              <ul role="list" className='mt-10'>
                <li className="mb-10">
                  <div className="flex gap-x-4">
                    <div className='w-[100px] relative'>
                      <Image className="block h-100 m-w-100" width="100" height="100" src='/images/video-thumbnail.png' alt='video' />
                      <Link className='absolute top-0 w-[100px] h-[100px] z-2 flex justify-center items-center bg-black/20' href='/' title='Link'>
                        <PlayCircleIcon className="h-10 w-10 text-white" />
                      </Link>
                    </div>

                    <div className="flex-1 flex items-center">
                      <div>
                        <p className="text-[10px] text-[#797979] font-poppins uppercase tracking-[1px]"> Jan 7, 2024  </p>
                        <p className="mt-1 mb-2 font-semibold  text-sm  font-poppins text-[#2C2C2C] leading-5">
                          <Link className='tracking-[0] normal-case font-semibold text-[16px] font-poppins text-[#2C2C2C] leading-5 line-clamp-2' href='/' title='Link'>
                            Id lobortis ac ultrices at tortor libero. At pretium montes.
                          </Link>
                        </p>
                        <Link className='tracking-[0] uppercase font-semibold text-[14px]  leading-4' href='/' title='Link'>
                          Watch
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mb-10">
                  <div className="flex gap-x-4">
                    <div className='w-[100px] relative'>
                      <Image className="block h-100 m-w-100" width="100" height="100" src='/images/video-thumbnail.png' alt='video' />
                      <Link className='absolute top-0 w-[100px] h-[100px] z-2 flex justify-center items-center bg-black/20' href='/' title='Link'>
                        <PlayCircleIcon className="h-10 w-10 text-white" />
                      </Link>
                    </div>

                    <div className="flex-1 flex items-center">
                      <div>
                        <p className="text-[10px] text-[#797979] font-poppins uppercase tracking-[1px]"> Jan 7, 2024  </p>
                        <p className="mt-1 mb-2 font-semibold  text-sm  font-poppins text-[#2C2C2C] leading-5">
                          <Link className='tracking-[0] normal-case font-semibold text-[16px] font-poppins text-[#2C2C2C] leading-5 line-clamp-2' href='/' title='Link'>
                            Id lobortis ac ultrices at tortor libero. At pretium montes.
                          </Link>
                        </p>
                        <Link className='tracking-[0] uppercase font-semibold text-[14px]  leading-4' href='/' title='Link'>
                          Watch
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mb-10">
                  <div className="flex gap-x-4">
                    <div className='w-[100px] relative'>
                      <Image className="block h-100 m-w-100" width="100" height="100" src='/images/video-thumbnail.png' alt='video' />
                      <Link className='absolute top-0 w-[100px] h-[100px] z-2 flex justify-center items-center bg-black/20' href='/' title='Link'>
                        <PlayCircleIcon className="h-10 w-10 text-white" />
                      </Link>
                    </div>

                    <div className="flex-1 flex items-center">
                      <div>
                        <p className="text-[10px] text-[#797979] font-poppins uppercase tracking-[1px]"> Jan 7, 2024  </p>
                        <p className="mt-1 mb-2 font-semibold  text-sm  font-poppins text-[#2C2C2C] leading-5">
                          <Link className='tracking-[0] normal-case font-semibold text-[16px] font-poppins text-[#2C2C2C] leading-5 line-clamp-2' href='/' title='Link'>
                            Id lobortis ac ultrices at tortor libero. At pretium montes.
                          </Link>
                        </p>
                        <Link className='tracking-[0] uppercase font-semibold text-[14px]  leading-4' href='/' title='Link'>
                          Watch
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </aside>

          </div>

        </div>
      </div>

    </section >
  )
}
