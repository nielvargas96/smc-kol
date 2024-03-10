import React from 'react'

import Image from 'next/image'
import Link from 'next/link'


export async function generateStaticParams() {
  const special = await fetch(`${process.env.NEXT_PUBLIC_API}/api/specials`, { revalidate: 0 }).then((res) => res.json());
  return special.map((item) => ({
    slug: item.slug
  }))
}

export default async function Page({ params }) {
  const { slug } = params;
  const data = await fetch(`${process.env.NEXT_PUBLIC_API}/api/specials`, { revalidate: 0 }).then((res) => res.json());

  const normalizedData = data.find(item => item.slug === slug);


  return (
    <section className="mb-20">
      {normalizedData && normalizedData.slug === slug && (

        <>
          <div className=' w-full bg-[#F9F0DF] pt-[0rem] flex  justify-center items-end'>
            <div className='flex w-full items-end justify-between mx-auto flex-col md:flex-row  mt-[4rem]'>
              <div className='relative flex justify-end flex-1 w-full md:w-50'>
                {!normalizedData ?
                  <Image src={`/images/kol.png`} alt={normalizedData?.name} height='645' width='780' />
                  :
                  <Image src={`${process.env.NEXT_PUBLIC_API}/images/specials/${normalizedData.thumbnail}`} alt={normalizedData?.name} height='645' width='780' />
                }

                {/* <Image src='/images/stories-inner.png' height='645' width='780' alt='Stories' /> */}
              </div>

              <div className='flex flex-1 flex-col w-full md:w-50'>
                <div className='m-7 md:m-14'>
                  <h1 className='mb-4 text-3xl md:text-[2.25rem] md:leading-10'>{normalizedData?.name}</h1>
                  <p className='text-lg lg:text-2xl'>{normalizedData?.sub_title}</p>
                </div>
              </div>

            </div>
          </div>


          <div className='max-w-[1480px] mx-auto mt-10 md:mt-14 mb-20 px-6 flex flex-col lg:flex-row justify-center lg:space-x-20'>



            <div className='flex-none w-[200px] lg:pt-3 mb-6'>
              <div>
                <p className='font-poppins capitalize text-xs font-light text-[#797979]'>
                  {normalizedData?.published_by &&
                    <>Presented by
                      <span className='font-bold'> {normalizedData?.published_by}</span>

                      <div className=' border-b border-[#CDCBCB] my-3 w-[75%] '></div>
                    </>
                  }
                </p>


                <p className='font-poppins capitalize text-xs font-light text-[#797979]'>
                  Published {new Date(normalizedData?.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>

            {/* MAIN CONTENT */}
            <div className='flex-1 w-full lg:max-w-[700px]'>
              <div className=' border-b border-[#CDCBCB] mb-6 w-full '></div>

              <div className='customized-contents mb-7'>
                <div className='content'>
                  <p>
                    {
                      normalizedData.teaser
                    }
                  </p>
                  {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem vel quia rem fugit enim ex doloremque deleniti. Dolorem architecto magni nobis molestiae ipsam natus esse quaerat cumque. Minima, quia vel.</p> */}
                </div>
              </div>
            </div>
          </div>

        </>
      )}
    </section>
  )
}
