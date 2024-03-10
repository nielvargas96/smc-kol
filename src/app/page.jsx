"use client"

import { Suspense } from 'react';
import Home from './home/page'
import Loading from '@/components/loading';
// import Loading from '@/app/XXxloading'

export default function Index() {
  return (
    <section className='mt-[8rem]'>
      <Home />
      {/* <ProgressBar
        height="1px"
        color="#f1debc"
        options={{ showSpinner: true }}
        shallowRouting
      /> */}
    </section>
  );
}
