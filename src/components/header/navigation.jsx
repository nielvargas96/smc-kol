"use client"

import React from 'react'
import Image from 'next/image'
import Logo from '@/app/logo.svg'
import LogoBlack from '@/app/logo-black.png'
import SMCLogo from '@/app/escudo.svg'
import Link from 'next/link'
import { Nav as navData } from '@/lib/api/nav'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { useScroll, useMotionValueEvent, motion } from 'framer-motion'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Search from '../search/search'

import ContactUs from '@/components/contact/page'
import { Bars3Icon } from "@heroicons/react/24/outline";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// Mapping Navigation
const NavItems = () => {
  const pathname = usePathname();

  return navData.map((item, index) => (
    <div key={index}>
      <Link className={`${pathname === `${item.url}/` ? 'text-[#f1debc]' : ''} relative text-slate-950 md:text-white text-base md:text-base uppercase font-light group tracking-normal mx-3 `} href={item.url} title={item.title} >
        {item.title}
        <span className={`absolute -bottom-2 w-[100%] left-0 -right-2 h-[12%] origin-left scale-x-0 rounded-full bg-[#f1debc] transition-transform duration-300 ease-out group-hover:scale-x-100 ${pathname === `${item.url}/` ? 'scale-x-100' : ''}`}
        />
      </Link>
    </div>
  ));
}

export default function Navigation() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    const prev = scrollY.getPrevious();
    if (value > prev && value > "0") {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-101%' }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className='fixed w-screen top-0 bg-[#2C2C2C] text-white z-50'>

      <div className='relative flex items-center justify-between max-w-[1280px] mx-auto h-[70px] bg-[#2C2C2C] px-6'>
        <div className='hidden md:block relative z-10 w-[183px] h-[20px]'>
          <Link className='absolute top-0 left-0 h-full w-full' href='/' title='Kaunlaran'></Link>
          <Image src={Logo} alt='Kaunlaran - Logo' width={183} height={20} className='w-full h-full ' />
        </div>


        <div className='md:absolute flex items-center justify-center md:w-full'>
          <div className='flex flex-col md:flex-row space-x-1'>

            {/* For mobile nav */}
            <Sheet>
              <SheetTrigger>
                <Bars3Icon className="h-8 w-8 text-gray-white block md:hidden cursor-pointer" />
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>
                    <div className='xsblock relative z-10 w-[183px] h-[20px]'>
                      <Link className='absolute top-0 left-0 h-full w-full' href='/' title='Kaunlaran'></Link>
                      <Image src={LogoBlack} alt='Kaunlaran - Logo' width={183} height={20} className='w-full h-full ' />
                    </div>
                  </SheetTitle>
                  <SheetDescription>
                    <div className='flex flex-col mt-8 space-y-6 text-left'>
                      {NavItems()}
                      <div>
                        <Link className={` relative text-slate-950 md:text-white text-lg md:text-base capitalize font-light group tracking-normal mx-2`} href='#' >
                          <ContactUs />
                          <span className={`absolute -bottom-2 w-[100%] left-0 -right-2 h-[12%] origin-left scale-x-0 rounded-full bg-[#f1debc] transition-transform duration-300 ease-out group-hover:scale-x-100  `}
                          />
                        </Link>
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            {/* For desktop nav */}
            <div className='hidden md:relative md:flex flex-col md:flex-row'>
              {NavItems()}
              <div>
                <Link className={` relative text-white text-base uppercase font-light group tracking-normal mx-2`} href='#' >
                  <ContactUs />
                  <span className={`absolute -bottom-2 w-[100%] left-0 -right-2 h-[12%] origin-left scale-x-0 rounded-full bg-[#f1debc] transition-transform duration-300 ease-out group-hover:scale-x-100  `}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='flex items-center space-x-1 relative'>
          {/* <Link href='/search'>
            <MagnifyingGlassIcon className="h-6 w-6 text-white stroke-2" />
          </Link> */}

          <Search />

          {/* <Link href="/" title='SMC Corporate'>
            height='48' width='30'
            <Image className='p-[2px] ml-2' src={SMCLogo} style={{ height: '52px', width: '36px' }} alt='SMC Corporate' />
          </Link> */}
        </div>
      </div>
    </motion.nav>
  )
}
