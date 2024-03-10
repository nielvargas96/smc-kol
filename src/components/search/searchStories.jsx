// "use client"

// import React from 'react'
// import { useSearchParams, usePathname, useRouter } from 'next/navigation';
// import { useDebouncedCallback } from 'use-debounce';

// export default function Search() {

//   const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const { replace } = useRouter();

//   const handleSearch = useDebouncedCallback((param) => {
//     console.log(`Searching... ${param}`);

//     const params = new URLSearchParams(window.location.search);

//     if (param) {
//       params.set('search', param);
//     } else {
//       params.delete('search');
//     }
//     replace(`${pathname}?${params.toString()}`);
//   }, 500);

//   return (
//     <>
//       <input
//         onChange={(e) => {
//           handleSearch(e.target.value);
//         }}
//         defaultValue={searchParams.get('search')?.toString()}
//         type="text" placeholder='Search a keyword...'
//         className='h-[50px] rounded-full px-6 text-sm outline-0 drop-shadow-sm' />
//     </>
//   )
// }
