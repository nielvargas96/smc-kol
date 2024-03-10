
import React from 'react'
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import Image from 'next/image'
import Link from 'next/link'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Page() {

  const searchPage = 'search';

  return (
    <section className='mb-20'>
      <div className='min-h-[40vh] w-full px-6 bg-[#F9F0DF] pt-[4rem] flex justify-center items-end'>
        <div className='flex w-full items-end justify-between max-w-[1180px] mx-auto my-10'>
          <div>
            <h1 className='font-opensans font-bold'>Search</h1>
          </div>

          <div className='flex space-x-5 items-center justify-end item w-full'>
            <input type="text" placeholder='Search a keyword...' className='h-[50px] w-full max-w-[400px] rounded-full px-6 text-sm outline-0 drop-shadow-sm' />

            <button className='flex w-[120px] h-12 text-[#E8412C] rounded-full border-[#E8412C] border-2 font-tabletgothic justify-center items-center'>
              <ArrowRightCircleIcon className="h-5 w-5 text-[#E8412C] mr-1" /> Search
            </button>
          </div>
        </div>
      </div>

      <div className='max-w-[1180px] mx-auto my-14 px-6'>
        <div className='mx-auto block text-center'>
          <p className='text-xl text-[#6B6969] font-poppins'>We found <span className='text-black'>10 Stories, 3 Videos, 3 Magazine, 0 Author</span></p>
        </div>

        <div className='mb-20'>
          {/* STORIES SEARCH */}
          <div>
            <div className="flex align-middle px-6 justify-center flex-col mb-14 mx-auto ">
              <h2 className="mb-4 mx-auto mt-14">Stories</h2>
              <span className="block mx-auto border-b-4 border-[#EFA9A9]  w-[170px]"></span>
            </div>

            <div className='grid grid-cols-1 sm:grid-flow-cols-2 md:grid-cols-3 gap-x-10 gap-y-16'>
              <div className='w-full space-y-4'>
                <div className='relative group z-0 overflow-hidden'>
                  <Image className='block transition ease-in-out delay-100 group-hover:scale-105 duration-300'
                    src='/images/stories.png' alt='Featured Image' width={340} height={210} />
                  <Link className='absolute top-0 w-full h-full z-2' href='/images/stories.png' title='Title'></Link>
                </div>

                <div className='space-y-3'>
                  <div className='flex justify-between items-center'>
                    <span className='text-[12px] text-[#797979] uppercase'>Jan 7, 2024</span>
                    <span className='text-[12px] text-[#797979] uppercase'>
                      By <b className='font-[700]'>Joe Lardo</b>
                    </span>
                  </div>
                  <h4 className='leading-6'>Et egestas eu purus iaculis adipiscing pretium mattis semper in sapien.</h4>
                  <Link className='block' href='/images/stories.png' title='Title'>Read more</Link>
                </div>
              </div>

              <div className='w-full space-y-4'>
                <div className='relative group z-0 overflow-hidden'>
                  <Image className='block transition ease-in-out delay-100 group-hover:scale-105 duration-300'
                    src='/images/stories.png' alt='Featured Image' width={340} height={210} />
                  <Link className='absolute top-0 w-full h-full z-2' href='/images/stories.png' title='Title'></Link>
                </div>

                <div className='space-y-3'>
                  <div className='flex justify-between items-center'>
                    <span className='text-[12px] text-[#797979] uppercase'>Jan 7, 2024</span>
                    <span className='text-[12px] text-[#797979] uppercase'>
                      By <b className='font-[700]'>Joe Lardo</b>
                    </span>
                  </div>
                  <h4 className='leading-6'>Et egestas eu purus iaculis adipiscing pretium mattis semper in sapien.</h4>
                  <Link className='block' href='/images/stories.png' title='Title'>Read more</Link>
                </div>
              </div>

              <div className='w-full space-y-4'>
                <div className='relative group z-0 overflow-hidden'>
                  <Image className='block transition ease-in-out delay-100 group-hover:scale-105 duration-300'
                    src='/images/stories.png' alt='Featured Image' width={340} height={210} />
                  <Link className='absolute top-0 w-full h-full z-2' href='/images/stories.png' title='Title'></Link>
                </div>

                <div className='space-y-3'>
                  <div className='flex justify-between items-center'>
                    <span className='text-[12px] text-[#797979] uppercase'>Jan 7, 2024</span>
                    <span className='text-[12px] text-[#797979] uppercase'>
                      By <b className='font-[700]'>Joe Lardo</b>
                    </span>
                  </div>
                  <h4 className='leading-6'>Et egestas eu purus iaculis adipiscing pretium mattis semper in sapien.</h4>
                  <Link className='block' href='/images/stories' title='Title'>Read more</Link>
                </div>
              </div>

            </div>

          </div>

          {/* VIDEOS SEARCH */}
          <div>
            <div className="flex align-middle px-6 justify-center flex-col mb-14 mx-auto ">
              <h2 className="mb-4 mx-auto mt-20">Videos</h2>
              <span className="block mx-auto border-b-4 border-[#EFA9A9]  w-[170px]"></span>
            </div>

            <div className='grid grid-cols-1 sm:grid-flow-cols-2 md:grid-cols-3 gap-x-10 gap-y-16'>
              <div className='w-full space-y-4'>
                <div className='relative group z-0 overflow-hidden'>
                  <Image className='block transition ease-in-out delay-100 group-hover:scale-105 duration-300'
                    src='/images/stories.png' alt='Featured Image' width={340} height={210} />
                  <Link className='absolute top-0 w-full h-full z-2' href='/images/stories.png' title='Title'></Link>
                </div>

                <div className='space-y-3'>
                  <div className='flex justify-between items-center'>
                    <span className='text-[12px] text-[#797979] uppercase'>Jan 7, 2024</span>
                    <span className='text-[12px] text-[#797979] uppercase'>
                      By <b className='font-[700]'>Joe Lardo</b>
                    </span>
                  </div>
                  <h4 className='leading-6'>Et egestas eu purus iaculis adipiscing pretium mattis semper in sapien.</h4>
                  <Link className='block' href='/images/stories.png' title='Title'>Read more</Link>
                </div>
              </div>

              <div className='w-full space-y-4'>
                <div className='relative group z-0 overflow-hidden'>
                  <Image className='block transition ease-in-out delay-100 group-hover:scale-105 duration-300'
                    src='/images/stories.png' alt='Featured Image' width={340} height={210} />
                  <Link className='absolute top-0 w-full h-full z-2' href='/images/stories.png' title='Title'></Link>
                </div>

                <div className='space-y-3'>
                  <div className='flex justify-between items-center'>
                    <span className='text-[12px] text-[#797979] uppercase'>Jan 7, 2024</span>
                    <span className='text-[12px] text-[#797979] uppercase'>
                      By <b className='font-[700]'>Joe Lardo</b>
                    </span>
                  </div>
                  <h4 className='leading-6'>Et egestas eu purus iaculis adipiscing pretium mattis semper in sapien.</h4>
                  <Link className='block' href='/images/stories.png' title='Title'>Read more</Link>
                </div>
              </div>

              <div className='w-full space-y-4'>
                <div className='relative group z-0 overflow-hidden'>
                  <Image className='block transition ease-in-out delay-100 group-hover:scale-105 duration-300'
                    src='/images/stories.png' alt='Featured Image' width={340} height={210} />
                  <Link className='absolute top-0 w-full h-full z-2' href='/images/stories.png' title='Title'></Link>
                </div>

                <div className='space-y-3'>
                  <div className='flex justify-between items-center'>
                    <span className='text-[12px] text-[#797979] uppercase'>Jan 7, 2024</span>
                    <span className='text-[12px] text-[#797979] uppercase'>
                      By <b className='font-[700]'>Joe Lardo</b>
                    </span>
                  </div>
                  <h4 className='leading-6'>Et egestas eu purus iaculis adipiscing pretium mattis semper in sapien.</h4>
                  <Link className='block' href='/images/stories' title='Title'>Read more</Link>
                </div>
              </div>

            </div>

          </div>

          {/* MAGAZINE */}
          <div>
            <div className="flex align-middle px-6 justify-center flex-col mb-14 mx-auto ">
              <h2 className="mb-4 mx-auto mt-20">Magazine</h2>
              <span className="block mx-auto border-b-4 border-[#EFA9A9]  w-[170px]"></span>
            </div>

            <div className='grid grid-cols-1 sm:grid-flow-cols-2 md:grid-cols-3 gap-x-10 gap-y-16'>
              <div className='w-full space-y-4'>
                <div className='relative group z-0 overflow-hidden'>
                  <Image className='block transition ease-in-out delay-100 group-hover:scale-105 duration-300'
                    src='/images/magazine.png' alt='Featured Image' width={250} height={340} />
                  <Link className='absolute top-0 w-full h-full z-2' href='/images/magazine.png' title='Title'></Link>
                </div>

                <div className='space-y-3'>
                  <div className='flex justify-between items-center'>
                    <span className='text-[12px] text-[#797979] uppercase'>Jan 7, 2024</span>
                    <span className='text-[12px] text-[#797979] uppercase'>
                      By <b className='font-[700]'>Joe Lardo</b>
                    </span>
                  </div>
                  <h4 className='leading-6'>Et egestas eu purus iaculis adipiscing pretium mattis semper in sapien.</h4>
                  <Link className='block' href='/images/magazine.png' title='Title'>Read more</Link>
                </div>
              </div>

              <div className='w-full space-y-4'>
                <div className='relative group z-0 overflow-hidden'>
                  <Image className='block transition ease-in-out delay-100 group-hover:scale-105 duration-300'
                    src='/images/magazine.png' alt='Featured Image' width={250} height={340} />
                  <Link className='absolute top-0 w-full h-full z-2' href='/images/magazine.png' title='Title'></Link>
                </div>

                <div className='space-y-3'>
                  <div className='flex justify-between items-center'>
                    <span className='text-[12px] text-[#797979] uppercase'>Jan 7, 2024</span>
                    <span className='text-[12px] text-[#797979] uppercase'>
                      By <b className='font-[700]'>Joe Lardo</b>
                    </span>
                  </div>
                  <h4 className='leading-6'>Et egestas eu purus iaculis adipiscing pretium mattis semper in sapien.</h4>
                  <Link className='block' href='/images/magazine.png' title='Title'>Read more</Link>
                </div>
              </div>

              <div className='w-full space-y-4'>
                <div className='relative group z-0 overflow-hidden'>
                  <Image className='block transition ease-in-out delay-100 group-hover:scale-105 duration-300'
                    src='/images/magazine.png' alt='Featured Image' width={250} height={340} />
                  <Link className='absolute top-0 w-full h-full z-2' href='/images/magazine.png' title='Title'></Link>
                </div>

                <div className='space-y-3'>
                  <div className='flex justify-between items-center'>
                    <span className='text-[12px] text-[#797979] uppercase'>Jan 7, 2024</span>
                    <span className='text-[12px] text-[#797979] uppercase'>
                      By <b className='font-[700]'>Joe Lardo</b>
                    </span>
                  </div>
                  <h4 className='leading-6'>Et egestas eu purus iaculis adipiscing pretium mattis semper in sapien.</h4>
                  <Link className='block' href='/images/stories' title='Title'>Read more</Link>
                </div>
              </div>
              <div className='w-full space-y-4'>
                <div className='relative group z-0 overflow-hidden'>
                  <Image className='block transition ease-in-out delay-100 group-hover:scale-105 duration-300'
                    src='/images/magazine.png' alt='Featured Image' width={250} height={340} />
                  <Link className='absolute top-0 w-full h-full z-2' href='/images/magazine.png' title='Title'></Link>
                </div>

                <div className='space-y-3'>
                  <div className='flex justify-between items-center'>
                    <span className='text-[12px] text-[#797979] uppercase'>Jan 7, 2024</span>
                    <span className='text-[12px] text-[#797979] uppercase'>
                      By <b className='font-[700]'>Joe Lardo</b>
                    </span>
                  </div>
                  <h4 className='leading-6'>Et egestas eu purus iaculis adipiscing pretium mattis semper in sapien.</h4>
                  <Link className='block' href='/images/stories' title='Title'>Read more</Link>
                </div>
              </div>

            </div>


          </div>
        </div>
      </div>
      {/* <ProgressBar
        height="1px"
        color="#f1debc"
        options={{ showSpinner: true }}
        shallowRouting
      /> */}
    </section>
  )
}