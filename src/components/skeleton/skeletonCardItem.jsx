import React from 'react'
import Image from 'next/image'

export default function SkeletonCardItem() {
  return (
    <div className="max-w-sm w-full mx-auto mb-3">
      <div className="animate-pulse space-y-4">
        {/* <Image src="/images/placeholder.png" height="100" width="100" alt='Placeholder' /> */}
        <div className=" bg-gray-300 h-[210px] w-[350px]"></div>
        <div className="flex-1 space-y-2 pt-4 ">
          <div className="space-y-2">
            <div className="grid grid-cols-4 gap-4">
              <div className="h-4 bg-gray-300 rounded col-span-1"></div>
            </div>
          </div>

          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>

          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-4 bg-gray-300 rounded col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
