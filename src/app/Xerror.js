'use client' // Error components must be Client Components

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (<section className='text-center flex items-center justify-center h-[100vh] w-full'>
    <div className='flex flex-col space-y-3 text-center'>
      <h1>Something went wrong!</h1>
      <p>Could not find requested resource</p>
      <Link href="/" title='Return Home'>Return Home</Link>
    </div>
  </section >
  )
}