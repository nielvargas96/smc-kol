"use client"

import React, { useState } from 'react'
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

// import CardItem from '@/components/card/cardItem';

// import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

import useSWR from 'swr'
import axios from 'axios'
import CardMultipleItem from '@/components/card/cardMultipleItem';

export default function Page() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const [isSearchActivated, setIsSearchActivated] = useState(false);

  // const fetcher = (url) => axios.get(url).then((res) => res.data.slice(0, 21));
  // const fetcher = (url) =>
  //   axios.get(url).then((res) => {
  //     let filteredData = res.data;

  //     // Apply search filter
  //     if (searchKeyword) {
  //       filteredData = filteredData.filter(item =>
  //         item.title.toLowerCase().includes(searchKeyword.toLowerCase())
  //       );
  //     }

  //     // Apply month filter
  //     if (selectedMonth) {
  //       filteredData = filteredData.filter(item =>
  //         // Assuming your data has a 'month' property
  //         item.month.toLowerCase() === selectedMonth.toLowerCase()
  //       );
  //     }

  //     // Apply year filter
  //     if (selectedYear) {
  //       filteredData = filteredData.filter(item =>
  //         // Assuming your data has a 'year' property
  //         item.year.toString() === selectedYear
  //       );
  //     }

  //     return filteredData.slice(0, 15);
  //   });

  // const handleSearch = () => {
  //   mutate(videos);
  // };

  const [searchUrl, setSearchUrl] = useState(`${process.env.NEXT_PUBLIC_API}/api/videos?wo-paginate=1`);

  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const { data, error, isLoading, mutate } = useSWR(searchUrl, fetcher);

  const videoPage = 'videos';

  // Search trigger 
  const handleSearch = () => {
    let newselectedMonth = `${selectedMonth === '' ? '' : `create_month=${selectedMonth.toLowerCase()}`}`;
    let newselectedYear = `${selectedYear === '' ? '' : `&create_year=${selectedYear}`}`;
    let newsearchKeyword = `${searchKeyword === '' ? '' : `${searchKeyword}?`}`;

    let newSearchUrl = `${process.env.NEXT_PUBLIC_API}/api/videos/search/${newsearchKeyword}${newselectedMonth}${newselectedYear}`;
    setSearchUrl(newSearchUrl);
  };

  // Set month
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Get the current year
  const currentYear = new Date().getFullYear();

  // Set current year and the last data year 2019
  const years = Array.from({ length: currentYear - 2018 }, (_, index) => currentYear - index);

  // let normalizedData = [];

  // if (data) {
  //   if (Array.isArray(data)) {
  //     normalizedData = data;
  //   } else if (data.data && Array.isArray(data.data)) {
  //     normalizedData = data.data;
  //   }
  // }

  // console.log(data?.id)s


  return (
    <section className='mb-20'>
      <div className='min-h-[40vh] w-full px-6 bg-[#F9F0DF] pt-[4rem] flex justify-center items-end'>
        <div className='flex w-full items-end justify-between max-w-[1180px] mx-auto my-10'>
          <div>
            <h1 className='font-opensans font-bold'>Videos</h1>
          </div>

          <div className='flex space-x-5 items-center justify-center'>
            <input
              value={searchKeyword}
              onChange={(e) => {
                setSearchKeyword(e.target.value);
                setIsSearchActivated(e.target.value !== '' || selectedMonth !== '' || selectedYear !== '');
              }}
              type="text"
              placeholder='Search a keyword...'
              className='h-[50px] rounded-full px-6 text-sm outline-0 drop-shadow-sm'
            />

            <select
              className="w-[180px] h-[50px] rounded-full px-6 text-sm outline-0 drop-shadow-sm"
              value={selectedMonth}
              onChange={(e) => {
                setSelectedMonth(e.target.value);
                setIsSearchActivated(e.target.value !== '' || searchKeyword !== '' || selectedYear !== '');
              }}
            >
              <option value="" disabled defaultValue>
                Month
              </option>
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>

            <select
              className="w-[180px] h-[50px] rounded-full px-6 text-sm outline-0 drop-shadow-sm"
              value={selectedYear}
              onChange={(e) => {
                setSelectedYear(e.target.value);
                setIsSearchActivated(e.target.value !== '' || searchKeyword !== '' || selectedMonth !== '');
              }}
            >
              <option value="" disabled defaultValue>
                Year
              </option>
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>

            <button
              onClick={handleSearch}
              className={`  flex w-[120px] h-12 text-[#E8412C] rounded-full border-[#E8412C] font-tabletgothic justify-center items-center 
              ${isSearchActivated ? 'bg-[#E8412C] text-white transition duration-150' : 'border-2 border-[#E8412C] transition duration-150'
                }`}
            >
              <ArrowRightCircleIcon className={`h-5 w-5  ${isSearchActivated ? 'text-white transition duration-150' : 'text-[#E8412C] transition duration-150'} x mr-1`} />
              Search
            </button>
          </div>
          {/* <div className='flex space-x-5 items-center justify-center'>
            <input
              value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)}
              type="text"
              placeholder='Search a keyword...'
              className='h-[50px] rounded-full px-6 text-sm outline-0 drop-shadow-sm'
            />


            <select
              className="w-[180px] h-[50px] rounded-full px-6 text-sm outline-0 drop-shadow-sm"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option value="" disabled defaultValue>
                Month
              </option>
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>


            <select
              className="w-[180px] h-[50px] rounded-full px-6 text-sm outline-0 drop-shadow-sm"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="" disabled defaultValue>
                Year
              </option>
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>

            <button onClick={handleSearch} className='flex w-[120px] h-12 text-[#E8412C] rounded-full  border-[#E8412C] border-2 font-tabletgothic justify-center items-center'>
              <ArrowRightCircleIcon className="h-5 w-5 text-[#E8412C] mr-1" />
              Search
            </button>
          </div> */}
        </div>
      </div>

      <div className='max-w-[1180px] mx-auto my-14 px-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16'>
          {/* {error ? 'Error' :
            <>{data && data.length === 0 ? <p>No result found.</p>
              :
              <CardMultipleItem data={data} page={videoPage} loading={isLoading} />
            }</>
          } */}
          <>
            <CardMultipleItem data={data} page={videoPage} loading={isLoading} />
          </>
        </div>
      </div>

    </section>
  )
}
