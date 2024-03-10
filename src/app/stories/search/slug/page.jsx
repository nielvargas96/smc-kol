// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import SwiperSlider from '@/components/swiperSlider/swiperSlider';

// // import SeachPage from './page' 


// // async function getSearchStories(searchParams) {
// //   // const searchStories = await fetch(`${process.env.NEXT_PUBLIC_API}/api/stories/search/${value}`)
// //   // return searchStories.data.slug;

// //   return console.log(searchParams)
// // }

// // export async function generateMetadata({ params }) {
// //   const { slug } = params;
// //   const data = await fetch(`${process.env.NEXT_PUBLIC_API}/api/stories`).then((res) => res.json());
// //   const item = data.data[0];

// //   return {
// //     title: `${item.name} | Stories | Kaunlaran`,
// //   }
// // }

// // Function to generate param
// export async function generateStaticParams() {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/stories/search/wo-paginate=1`);
//     const data = await res.json();

//     // Check if data is an array
//     if (Array.isArray(data)) {
//       return data.map((item) => ({
//         slug: item.slug
//       }));
//     } else {
//       console.error('Invalid data format:', data);
//       return [];
//     }
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return [];
//   }
// }

// export default async function Page({ params }) {
//   const { slug } = params;
//   const data = await fetch(`${process.env.NEXT_PUBLIC_API}/api/stories/search/${slug}`).then((res) => res.json());
//   const item = data[0];

//   return (
//     <section className='mb-20'>
//       <div className=' w-full bg-[#F9F0DF] pt-[0rem] flex  justify-center items-end'>
//         <div className='flex w-full items-end justify-between mx-auto flex-col md:flex-row'>
//           <div className='relative flex justify-end flex-1 w-full md:w-50'>
//             <Image src='/images/stories-inner.png' height='645' width='780' alt='Stories' />
//           </div>


//           <div className='flex flex-1 flex-col w-full md:w-50'>
//             <div className='m-7 md:m-14'>
//               <h1 className='mb-4 text-3xl md:text-[2.25rem] md:leading-10'>{item.name}</h1>
//               <p className='text-lg lg:text-2xl'>{item.sub_title}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className='max-w-[1480px] mx-auto mt-10 md:mt-14 mb-20 px-6 flex flex-col lg:flex-row justify-center lg:space-x-20'>
//         <div className='flex-none w-[200px] lg:pt-3 mb-6'>
//           <div>
//             <p className='font-poppins uppercase text-xs font-light text-[#797979]'>
//               Presented by <span className='font-bold'>{item.words_by}</span>
//             </p>

//             <div className=' border-b border-[#CDCBCB] my-3 w-[75%] '></div>

//             <p className='font-poppins uppercase text-xs font-light text-[#797979]'>
//               PUBLISHED {new Date(item.created_at).toLocaleDateString('en-US', {
//                 year: 'numeric',
//                 month: 'long',
//                 day: 'numeric',
//               })}
//             </p>
//           </div>
//         </div>

//         {/* MAIN CONTENT */}
//         <div className='flex-1 w-full lg:max-w-[700px]'>
//           <div className=' border-b border-[#CDCBCB] mb-6 w-full '></div>
//           <p className='text-lg mb-7'>
//             {item.teaser}
//             {/* <Image src={`${item.images[0].image}`} alt={item.name} width={100} height={100} /> */}
//           </p>
//           <p className='text-lg mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum adipisci, odio cupiditate a nam totam odit harum ut culpa nobis alias sequi, reprehenderit distinctio. Aut provident at veritatis incidunt perferendis!</p>
//           <p className='text-lg mb-7'>
//             Arcu arcu senectus pharetra euismod pellentesque enim commod libero. Fusce laoreet mattis non nibh duis eu pulvinar. Ultrices morbi euismod diam volutpat. Erat in platea amet mi pulvinar vitae. Diam mauris mattis sagittis massa dictum nec at massa
//           </p>
// <p className='text-lg mb-7'>
//   Enim egestas enim nullam senectus aliquam. Vivamus curabitur pulvinar tristique lectus id. Senectus sit arcu mauris convallis mauris massa.
//   Bibendum enim ut id ultrices pharetra mattis risus. Interdum iaculis nam amet vitae a a lacus mauris. Velit hac neque pretium tincidunt gravida vitae donec nisl.
// </p>
//           <p className='text-lg mb-7'>
//             Diam enim ornare quisque pellentesque ac velit interdum enim. Facilisis nunc sed molestie integer etiam eu tellus enim. Eu leo est suscipit pharetra egestas. Porta arcu eu feugiat arcu. At mauris purus dui massa id dui elit commodo turpis. Imperdiet pharetra elementum.
//           </p>
//           <p className='text-lg mb-7'>Sed aliquam ornare aenean tempor tellus senectus. Enim lectus nisi dui lobortis in luctus. Tortor quam elementum aliquam risus eget in consectetur enim non. Ac ridiculus vulputate interdum amet et ultrices nisi. Quis morbi turpis suscipit urna. Blandit laoreet pellentesque commodo interdum ornare consequat tincidunt quam. Elit euismod id maecenas dui tincidunt lorem viverra accumsan. Augue at aliquam pretium faucibus.</p>

//           {/* SLIDER */}
//           <SwiperSlider data={item} />

//           <p className='text-lg mb-7'>
//             {item.content}
//           </p>

//           <p className='text-lg mb-7'>
//             {item.content}
//           </p>

//           {/* QOUTE */}
//           <blockquote className='mb-10'>
//             <div className='w-auto max-w-[420px] flex flex-col mb-5 relative'>
//               <Image src='/images/qout-left.svg' width='38' height='36' className='mb-2' alt='Titles' />
//               <h2 className='font-tabletgothic leading-12 font-extrabold text-balance'>Each success and setback are opportunities to learn and grow</h2>
//               <Image src='/images/qout-right.svg' width='38' height='36' className='absolute bottom-[-.5rem] right-[-2rem]' alt='title' />
//             </div>

//             <div className='flex items-center space-x-3'>
//               <div><div className='border-2 border-[#E8412C] w-[42px]'></div></div>
//               <span className='font-tabletgothic text-[#7F7F7F] text-xl'>{item.author}</span>
//             </div>
//           </blockquote>

//           {/* TWO COL IMAGE */}
//           <div className='grid grid-cols-2 gap-5 mb-10'>
//             <figure>
//               <Image src='/images/stories-inner-content.png' width='355' height='295' alt='title' />
//               <figcaption><p className='font-poppins text-xs text-[#797979] mt-4'>Vulputate nulla sed pulvinar in auctor amet. Massa sed cras ut quis tincidunt fringilla convallis. At est ut et.</p></figcaption>
//             </figure>

//             <figure>
//               <Image src='/images/stories-inner-content-2.png' width='355' height='295' alt='title' />
//               <figcaption><p className='font-poppins text-xs text-[#797979] mt-4'>Vulputate nulla sed pulvinar in auctor amet. Massa sed cras ut quis tincidunt fringilla convallis. At est ut et.</p></figcaption>
//             </figure>
//           </div>


//           <p className='text-lg mb-7'>
//             {item.content}
//           </p>

//           <p className='text-lg mb-7'>
//             {item.content}
//           </p>

//         </div>

//         {/* RELATED STORIES */}
//         <div className='flex-none lg:w-[200px] pt-3'>
//           <div className='flex flex-col mb-2'>
//             <h3 className='mb-3'>Related Stories</h3>
//             <span className='block border-b-4 border-[#EFA9A9]  w-[50%]'></span>
//           </div>

//           <div className='flex flex-col space-y-6 divide-y-2'>
//             <div className='pt-5'>
//               <h5 className='text-[#4E4E4E] font-opensans font-bold mb-3'>Massa at pulvinar vestibulum feugiat. Et ac proin tempor id nec.</h5>
//               <p className='font-poppins text-[#797979] text-sm '>Sept. 20, 2023</p>
//               <Link href='/' title='Read More'>Read More</Link>
//             </div>

//             <div className='pt-5'>
//               <h5 className='text-[#4E4E4E] font-opensans font-bold mb-3'>Massa at pulvinar vestibulum feugiat. Et ac proin tempor id nec.</h5>
//               <p className='font-poppins text-[#797979] text-sm '>Sept. 20, 2023</p>
//               <Link href='/' title='Read More'>Read More</Link>
//             </div>

//             <div className='pt-5'>
//               <h5 className='text-[#4E4E4E] font-opensans font-bold mb-3'>Massa at pulvinar vestibulum feugiat. Et ac proin tempor id nec.</h5>
//               <p className='font-poppins text-[#797979] text-sm '>Sept. 20, 2023</p>
//               <Link href='/' title='Read More'>Read More</Link>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* READ NEXT */}
//       <article className='max-w-[1180px] mx-auto px-6'>
//         <h2 className='mb-6'>Read this next</h2>
//         <div className='border-b-2 border-[#D9D9D9] mb-10 w-full '></div>

//         <div className='grid sm:grod-cols-2 md:grid-cols-3 sm:gap-7 md:gap-14 space-y-12 md:space-y-0 '>
//           <div className='w-full space-y-4'>
//             <div className='relative group z-0 overflow-hidden'>
//               <Image
//                 className='block w-full transition ease-in-out delay-100 group-hover:scale-105 duration-300'
//                 src='/images/stories.png'
//                 alt='Featured Image'
//                 width={360}
//                 height={210}
//               />
//               <Link className='absolute top-0 w-full h-full z-2' href='/' title='title'></Link>
//             </div>

//             <div className='space-y-3'>
//               <div className='flex justify-between items-center'>
//                 <span className='text-[12px] text-[#797979] uppercase'>
//                   Jan 2, 2024
//                 </span>
//                 <span className='text-[12px] text-[#797979] uppercase'>
//                   By <b className='font-[700]'>Joe Lardo</b>
//                 </span>
//               </div>
//               <h4 className='leading-6 pb-1'>Mus sem odio vel amet ultricies sed lacus. Leo ipsum tempor et orci.</h4>

//               <Link className='block' href='/' title='title'>
//                 Read more
//               </Link>
//             </div>
//           </div>

//           <div className='w-full space-y-4'>
//             <div className='relative group z-0 overflow-hidden'>
//               <Image
//                 className='block w-full transition ease-in-out delay-100 group-hover:scale-105 duration-300'
//                 src='/images/stories.png'
//                 alt='Featured Image'
//                 width={360}
//                 height={210}
//               />
//               <Link className='absolute top-0 w-full h-full z-2' href='/' title='title'></Link>
//             </div>

//             <div className='space-y-3'>
//               <div className='flex justify-between items-center'>
//                 <span className='text-[12px] text-[#797979] uppercase'>
//                   Jan 2, 2024
//                 </span>
//                 <span className='text-[12px] text-[#797979] uppercase'>
//                   By <b className='font-[700]'>Joe Lardo</b>
//                 </span>
//               </div>
//               <h4 className='leading-6 pb-1'>Mus sem odio vel amet ultricies sed lacus. Leo ipsum tempor et orci.</h4>
//               <Link className='block' href='/' title='title'>
//                 Read more
//               </Link>
//             </div>
//           </div>

//           <div className='w-full space-y-4'>
//             <div className='relative group z-0 overflow-hidden'>
//               <Image
//                 className='block w-full transition ease-in-out delay-100 group-hover:scale-105 duration-300'
//                 src='/images/stories.png'
//                 alt='Featured Image'
//                 width={360}
//                 height={210}
//               />
//               <Link className='absolute top-0 w-full h-full z-2' href='/' title='title'></Link>
//             </div>

//             <div className='space-y-3'>
//               <div className='flex justify-between items-center'>
//                 <span className='text-[12px] text-[#797979] uppercase'>
//                   Jan 2, 2024
//                 </span>
//                 <span className='text-[12px] text-[#797979] uppercase'>
//                   By <b className='font-[700]'>Joe Lardo</b>
//                 </span>
//               </div>
//               <h4 className='leading-6 pb-1'>Mus sem odio vel amet ultricies sed lacus. Leo ipsum tempor et orci.</h4>

//               <Link className='block' href='/' title='title'>
//                 Read more
//               </Link>
//             </div>
//           </div>
//         </div>
//       </article>

//     </section>
//   )
// }


import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
