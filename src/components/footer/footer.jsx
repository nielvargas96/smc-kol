import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SMCLogo from '@/app/smc-logo.svg'

export default function Footer() {
  return (
    <footer className='bg-[#E4E4E4] h-[140px] flex items-center w-full px-14'>
      <div className='flex justify-between items-center w-full'>
        <div className='flex space-x-3'>
          <Link className='relative group text-black font-tabletgothic upperacase text-base tracking-[1px]' href='/stories' title='Stories'>Stories
            <span className="absolute -bottom-2 w-[100%] left-0 -right-2 h-[12%] origin-left scale-x-0 rounded-full bg-[#E8412C] transition-transform duration-300 ease-out group-hover:scale-x-100 "></span></Link>
          <Link className='relative group text-black font-tabletgothic upperacase text-base tracking-[1px]' href='/videos' title='Videos'>Videos<span className="absolute -bottom-2 w-[100%] left-0 -right-2 h-[12%] origin-left scale-x-0 rounded-full bg-[#E8412C] transition-transform duration-300 ease-out group-hover:scale-x-100 "></span></Link>
          <Link className='relative group text-black font-tabletgothic upperacase text-base tracking-[1px]' href='/magazine' title='Magazine'>Magazine<span className="absolute -bottom-2 w-[100%] left-0 -right-2 h-[12%] origin-left scale-x-0 rounded-full bg-[#E8412C] transition-transform duration-300 ease-out group-hover:scale-x-100 "></span></Link>
        </div>
        <div>
          <Link href='https://www.sanmiguel.com.ph/' title='SMC Corporate' target='_blank'>
            <Image src={SMCLogo} alt='SMC Logo' width='86' height='75' />
          </Link>
        </div>
        <div className='flex space-x-3'>
          {/* <Link className='text-black font-tabletgothic upperacase text-base' href='/contact' title='Contact Us'>Contact Us</Link> */}
          <Link className='text-black font-tabletgothic upperacase text-base' href='/' title='2024 Kaunlaran'>&copy; 2024 Kaunlaran</Link>
        </div>
      </div>
    </footer>
  )
}
