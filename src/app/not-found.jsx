import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className='text-center flex items-center justify-center h-[100vh] w-full'>
      <div className='flex flex-col space-y-3 text-center'>
        <h1>Not Found!</h1>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </section >
  )
}
