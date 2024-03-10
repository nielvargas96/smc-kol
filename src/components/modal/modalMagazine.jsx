import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { PlayCircleIcon } from "@heroicons/react/20/solid";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function ModalMagazine({ activeId, item, page, isLoading }) {

  // const activeItem = data?.find(item => item.id === activeId);

  return (
    <Dialog>
      <DialogTrigger asChild className='cursor-pointer'>
        {page === 'homepageMagazine' ?
          <Link href={`#magazine`} className=' text-xl z-1 absolute h-full w-full top-0 z-1'>
          </Link>
          :
          <Link href={`#${item?.id}`} className=' text-xl z-1 absolute h-full w-full top-0 z-1'>
            {/* Learn More */}
          </Link>
        }
      </DialogTrigger>

      <DialogContent className={!item?.link ? 'p-10 bg-white' : 'w-[100%] max-w-[90vw] h-[90vh]'} >
        <div>
          <div className='relative'>
            <div
              className={`${!item?.link ? 'h-[40vh]' : 'h-[90vh]'} relative w-full flex items-center justify-center`} >
              {!item?.link ? <h3 className='text-black'>No magazine found.</h3> :
                <iframe src={item.link} width="100%" height="100%" scrolling="no" frameBorder="0" allowfullscreen="" className="publuuflip"></iframe>
              }
            </div>

            {/* {isLoading ?
              <>
                <p>Loading...</p>
              </> :
              <>
                <div className='relative w-full p-10 flex items-center justify-center'>
                  <iframe src="https://publuu.com/flip-book/393795/892395" width="100%" height="100%" scrolling="no" frameBorder="0" allowfullscreen="" className="publuuflip"></iframe>
                </div>
              </>
            } */}
          </div>
        </div>
      </DialogContent >



    </Dialog >
  )
}
