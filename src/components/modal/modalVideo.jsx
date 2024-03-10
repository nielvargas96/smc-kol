import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import ReactPlayer from 'react-player'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { PlayCircleIcon, PlayIcon } from "@heroicons/react/20/solid";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"


export default function ModalVideo({ cn, open, setOpen, activeId, data, isLoading }) {

  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  }

  const handleVideoStop = () => {
    setIsVideoPlaying(false);
  }

  // const activeItem = data?.find(item => item.id === activeId);

  const activeItem = data?.find(item => item.id === activeId);

  return (
    <Dialog open={open} onOpenChange={setOpen}>

      <DialogTrigger asChild className='cursor-pointer'  >
        {cn === 'innerItem' ?
          <Link href={`#ourmedia`} title='Watch' className='btn-watch rounded-2xl w-full h-full p-3 cursor-pointer  flex items-center justify-center capitalize text-xl z-1'>
            {/* <PlayCircleIcon className="h-10 w-10 text-white" /> */}
            {/* <PlayIcon className="h-10 w-10 text-white" />s */}
          </Link>
          :
          <Link href={`#ourmedia`} title='Watch' className='group hover:bg-white btn-watch bg-[#FC2815] rounded-3xl  w-full p-3 text-white flex items-center justify-center capitalize text-xl z-1 '>
            <PlayCircleIcon className=" group-hover:text-[#FC2815] h-6 w-6 text-white  " />
            <span className='pl-1 group-hover:text-[#FC2815]'>Watch</span>
          </Link>
        }
      </DialogTrigger>

      <DialogContent className='w-[1180px] max-w-[80%] h-[90%] bg-white px-6 pt-6 pb-2 ' >
        <div style={{
          overflowY: 'scroll', padding: '.5rem 1.5rem 0'
        }}>
          <div className='relative'>
            {
              hasWindow &&
              <ReactPlayer
                width='100%'
                height='550px' //height="100%"
                style={{ width: '100%', height: '100%', borderRadius: '15px' }}
                url={activeItem?.video_link || `${process.env.NEXT_PUBLIC_API}/images/videos/${activeItem?.video}`}
                // url={activeItem.video_link}
                // url={`https://sxrtmwec.forapprovalonly.net/sustainability/images/video/SMCAVP.mp4`}
                // url={`https://www.youtube.com/watch?v=iieiOwsHG9U`}
                // url={`https://fb.watch/q9pOiySR61/`}
                controls
                playing={isVideoPlaying}
                onPlay={handleVideoPlay}
                onPause={handleVideoStop}
                light={
                  !activeItem ?
                    <Image src='/images/kol.png' width='1000' height='564' style={{ width: '100%', height: '100%' }}
                      alt='Thumbnail' />
                    :
                    <Image src={`${process.env.NEXT_PUBLIC_API}/images/videos/${activeItem?.thumbnail}`} width='1000' height='564' style={{ width: '100%', height: '100%' }}
                      alt='Thumbnail' />

                }
              />
            }


            {/* 
            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fofficialsanmiguelcorp%2Fvideos%2F3639844722938767%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe> */}

            {/* {!data && isLoading ?
              <>
                <p>Loading...</p>
              </> :
              <>
                {
                  hasWindow &&
                  <ReactPlayer
                    width='100%'
                    height='100%'
                    style={{ width: '100%', borderRadius: '15px' }}
                    url={`https://sxrtmwec.forapprovalonly.net/sustainability/images/video/SMCAVP.mp4`}
                    controls
                    alt='Title'
                    playing={isVideoPlaying}
                    onPlay={handleVideoPlay}
                    onPause={handleVideoStop}
                    light={<Image src='/images/video.png' width='1000' height='564' style={{ width: '100%', height: '100%' }}
                      alt='Thumbnail' />}
                  />
                }
              </>
            } */}

          </div>

          <div className='bg-white flex mt-10 space-y-20 flex-col'>
            <div className='col-span-2'>

              {activeItem && (
                <div>
                  <h2 className='mb-4'>{activeItem?.name}</h2>
                </div>
              )}

              <div className="flex space-x-8 items-center">
                {/* <span className="text-[12px] text-[#797979] uppercase tracking-[1px]">By <b className="font-[600]">Joe Lardo</b></span> */}
                <span className="text-[12px] text-[#797979] capitalize tracking-[1px]">
                  Published {new Date(activeItem.create_date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}</span>
              </div>

              <div className=" border-b border-[#CDCBCB] mt-6 mb-8 w-full "></div>

              <div>
                <p className='mb-7 text-lg'>
                  Viverra nascetur cras aliquam morbi cursus blandit et a. Sed nibh adipiscing vulputate sit consectetur fringilla in rhoncus aenean. Rhoncus massa est vitae semper pretium egestas vestibulum suscipit eget. Mauris sit erat ut enim vitae viverra. Nunc a in scelerisque urna scelerisque adipiscing eget facilisis cras. Nulla tempor risus blandit sit felis lobortis a nisi lacus. Ante in pellentesque et urna vestibulum placerat odio purus eros. Eget sit felis.
                </p>


                <div className='flex flex-col md:flex-row mt-10 space-y-4 md:space-y-0 md:space-x-4'>
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
            <aside>
              <div className="flex flex-col mb-2">
                <h3 className="mb-3">Watch next</h3>
                <span className="block border-b-4 border-[#EFA9A9]  w-[50%]"></span>
              </div>
              <ul role="list" className='flex flex-col md:flex-row md:space-x-10 mt-10 mb-10'>
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
                        <p className="text-[10px] text-[#797979] font-poppins uppercase tracking-[1px]"> January 7, 2024  </p>
                        <p className="mt-1 mb-2 font-semibold  text-sm  font-poppins text-[#2C2C2C] leading-5">
                          <Link className='tracking-[0] normal-case font-semibold text-[16px] font-poppins text-[#2C2C2C] leading-5 line-clamp-2' href='/' title='Link'>
                            Id lobortis ac ultrices at tortor libero. At pretium montes.
                          </Link>
                        </p>
                        <Link className='relative group tracking-[0] uppercase font-semibold text-[14px]  leading-4' href='/' title='Link'>
                          Watch
                          <span className="absolute -bottom-2 w-[100%] left-0 -right-2 h-[12%] origin-left scale-x-0 rounded-full bg-[#E8412C] transition-transform duration-300 ease-out group-hover:scale-x-100 "></span>
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
                        <p className="text-[10px] text-[#797979] font-poppins uppercase"> January 7, 2024  </p>
                        <p className="mt-1 mb-2 font-semibold  text-sm  font-poppins text-[#2C2C2C] leading-5">
                          <Link className='tracking-[0] normal-case font-semibold text-[16px] font-poppins text-[#2C2C2C] leading-4' href='/' title='Link'>
                            Id lobortis ac ultrices at tortor libero. At pretium montes.
                          </Link>
                        </p>
                        <Link className='relative group tracking-[0] uppercase font-semibold text-[14px]  leading-4' href='/' title='Link'>
                          Watch
                          <span className="absolute -bottom-2 w-[100%] left-0 -right-2 h-[12%] origin-left scale-x-0 rounded-full bg-[#E8412C] transition-transform duration-300 ease-out group-hover:scale-x-100 "></span>
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
                        <p className="text-[10px] text-[#797979] font-poppins uppercase"> January 7, 2024  </p>
                        <p className="mt-1 mb-2 font-semibold  text-sm  font-poppins text-[#2C2C2C] leading-5">
                          <Link className='tracking-[0] normal-case font-semibold text-[16px] font-poppins text-[#2C2C2C] leading-4' href='/' title='Link'>
                            Id lobortis ac ultrices at tortor libero. At pretium montes.
                          </Link>
                        </p>
                        <Link className='relative group tracking-[0] uppercase font-semibold text-[14px]  leading-4' href='/' title='Link'>
                          Watch
                          <span className="absolute -bottom-2 w-[100%] left-0 -right-2 h-[12%] origin-left scale-x-0 rounded-full bg-[#E8412C] transition-transform duration-300 ease-out group-hover:scale-x-100 "></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </aside>
          </div>

        </div>

      </DialogContent>
    </Dialog >
  )
}
