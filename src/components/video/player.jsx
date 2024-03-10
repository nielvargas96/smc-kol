"use client"

// import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Player({ data }) {

  // const [playVideo, setPlayVideo] = useState(false);

  // const handlePlay = () => {
  //   setPlayVideo(!handlePlayVideo);

  //   if (setPlayVideo) {
  //     setMainVideo(true)
  //   }
  // }

  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <section className='h-[500px] w-[900px]'>
      {
        // FB AND Local file mp4 should have a light properties with image YOUTUBE HAVE ALREADY THUMBNAIL
        hasWindow &&
        <ReactPlayer
          width='100%'
          height='100%'
          // className='max-h-[565px] h-[100%] w-[100%] '
          style={{ height: '565px', width: '900px' }}
          url={data}
          // url={`https://sxrtmwec.forapprovalonly.net/sustainability/images/video/SMCAVP.mp4`}
          // url={`https://fb.watch/q0L1gD37VE/`}
          // url={`https://youtu.be/8guP6F56TPk`}   CHECKED FOR AUTOPLAY
          playing
          // onClickPreview={true}
          controls
          alt='Title'
          autoPlay={true}
        // config={{
        //   youtube: {
        //     playerVars: { showinfo: 1 }
        //   },
        //   facebook: {
        //     appId: '12345'
        //   }
        // }} 
        // light={<Image src='/images/video.png' width='1000' height='1000' style={{ width: '100%', height: '100%' }}
        //   alt='Thumbnail' />}
        />
      }

      {/* Optional to embed code from fb but class style would cause error. */}
      {/* <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fofficialsanmiguelcorp%2Fvideos%2F3639844722938767%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe> */}
    </section>
  )
}
