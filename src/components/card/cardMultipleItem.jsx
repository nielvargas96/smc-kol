import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PlayCircleIcon } from "@heroicons/react/20/solid"
import SkeletonCardItem from '@/components/skeleton/skeletonCardItem'
import SkeletonCardItem2 from '@/components/skeleton/skeletonCardItem2'
import ModalMagazine from '@/components/modal/modalMagazine'

export default function CardMultipleItem({ data, page, loading, isFromSearch }) {


  return (
    <>
      {Array.isArray(data) && !loading ? (

        // Filtered by publish and by latest date
        data.filter(item => item.publish !== 0).sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map((item, index) => {

          // Stories  
          const imageUrl = item?.images?.[0]?.image_directory ? `${process.env.NEXT_PUBLIC_API}${item.images[0].image_directory}` : '/images/kol.png';

          return (
            <div key={index} className='w-full space-y-4' id={item.id}>
              <div className={`${page === 'magazine' ? 'relative overflow-hidden p-[1rem] bg-white flex align-middle  justify-center drop-shadow-sm hover:scale-105   hover:drop-shadow-lg  duration-300' : 'relative group z-0 overflow-hidden'}`}>
                {
                  page === 'magazine' ?
                    <>
                      {!item ?
                        <Image src={`/images/kol.png`} alt={item.name} height='645' width='780' className="cursor-pointer" />
                        :
                        <Image className='block w-full transition select-none ease-in-out delay-100 group-hover:scale-105 duration-300 cursor-pointer'
                          src={`${process.env.NEXT_PUBLIC_API}/images/magazine/${item?.thumbnail}`} alt={item.name} width={250} height={340} />
                      }
                      <ModalMagazine item={item} className="cursor-pointer" />
                    </>
                    :
                    <>
                      {page === 'magazine' && <Link className='absolute top-0 w-full h-full z-2' href={`${item.slug}`} title={item.name}></Link>}

                      {
                        page === 'stories' &&
                        <>
                          <div className="overflow-hidden w-[350px] h-[250px]">
                            <Image
                              className='block w-full h-full transition select-none ease-in-out delay-100 group-hover:scale-105 duration-300'
                              src={imageUrl}
                              alt={item.name}
                              width={350}
                              height={250}
                            />
                          </div>
                          <Link className='absolute top-0 w-full h-full z-2 line-clamp-2' href={`/stories/${item.slug}`} title={item.name}></Link>
                        </>
                      }

                      {
                        page === 'videos' &&
                        <>
                          <div className="overflow-hidden w-[350px] h-[250px]">
                            {!item ?
                              <Image src={`/images/kol.png`} alt={item.name} height='645' width='780' className="cursor-pointer" />
                              :
                              <Image
                                className='block w-full transition select-none ease-in-out delay-100 group-hover:scale-105 duration-300'
                                src={`${process.env.NEXT_PUBLIC_API}/images/videos/${item?.thumbnail}`}
                                alt={item.name}
                                width={350}
                                height={250}
                              />
                            }
                          </div>
                          <Link className='absolute top-0 w-full h-full z-2' href={`/videos/${item.slug}`} title={item.name}></Link>
                        </>
                      }

                      {/* {isFromSearch === true ?
                      <Link className='absolute top-0 w-full h-full z-2' href={`/stories/search/${item.slug}`} title={item.name}></Link> :
                      <Link className='absolute top-0 w-full h-full z-2' href={`/stories/${item.slug}`} title={item.slug}></Link>
                    } */}

                    </>
                }
              </div>

              <div className='space-y-3'>
                {
                  page === 'magazine' ? '' :
                    <div className='flex justify-between items-center'>

                      <span className='text-[12px] text-[#797979] capitalize tracking-[1px]'>
                        {new Date(item.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>

                      {/* {item.words_by && (
                    <span className='text-[12px] text-[#797979] capitalize tracking-[1px]'>
                      By <b className='font-[700]'>{item.words_by}</b>
                    </span>
                  )} */}
                    </div>
                }



                <h4 className='leading-6  line-clamp-2'>{item.name}</h4>

                {
                  page === 'magazine' && <p class="text-left text-normal  font-opensans font-normal text-[#797979]">{item.issue}</p>
                }

                {
                  page === 'magazine' &&
                  <div>

                    <Link className='relative group' href={`#${item.id}`} title={item.name}>
                      <ModalMagazine item={item} />
                      Read
                      <span className="absolute -bottom-2 w-[100%] left-0 -right-2 h-[12%] origin-left scale-x-0 rounded-full bg-[#E8412C] transition-transform duration-300 ease-out group-hover:scale-x-100 "></span>
                    </Link>
                  </div>
                }

                {
                  page === 'stories' &&
                  <div>
                    <Link className=' relative group' href={`/stories/${item.slug}`} title={item.name}>
                      Read
                      <span className="absolute -bottom-2 w-[100%] left-0 -right-2 h-[12%] origin-left scale-x-0 rounded-full bg-[#E8412C] transition-transform duration-300 ease-out group-hover:scale-x-100 "></span>
                    </Link>
                  </div>
                }

                {
                  page === 'videos' &&
                  <div>
                    <Link className='inline-block group relative' href={`/videos/${item.slug}`} title={item.name}>
                      <span className='flex items-center'><PlayCircleIcon className='h-5 w-5 mr-1' />
                        <span className='relative group'>Watch <span className="absolute -bottom-2 w-[100%] left-0 -right-2 h-[12%] origin-left scale-x-0 rounded-full bg-[#E8412C] transition-transform duration-300 ease-out group-hover:scale-x-100 "></span></span>
                      </span>
                    </Link>
                  </div>
                }

                {/* {(page === 'magazine' ?
                  <Link className='block relative' href={`#${item.id}`} title={item.name}>
                    Learn More
                    <span className='absolute top-0 w-full h-full left-0'>
                      <ModalMagazine item={item} />
                    </span>
                  </Link>
                  :
                  <Link className='block' href={`${item.slug}`} title={item.name}>
                    {page === 'stories' ? 'Read more' :
                      (page === 'videos' ? <><span className='flex items-center'><PlayCircleIcon className='h-5 w-5 mr-1' /> Watch</span></> : null)}
                  </Link>
                )} */}
              </div>
            </div>
          )
        })
      ) : (
        // Render skeleton items or a message when data is not available
        <>
          {
            page === 'magazine' ?
              <>
                <SkeletonCardItem2 />
                <SkeletonCardItem2 />
                <SkeletonCardItem2 />
                <SkeletonCardItem2 />
              </> : <>
                <SkeletonCardItem />
                <SkeletonCardItem />
                <SkeletonCardItem />
                <SkeletonCardItem />
                <SkeletonCardItem />
                <SkeletonCardItem />
              </>
          }
        </>
      )}
    </>
  )
}
