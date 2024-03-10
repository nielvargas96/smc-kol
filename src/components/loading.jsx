"use client"

import React from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function Loading() {
  return (
    <ProgressBar
      height="1px"
      color="#f1debc"
      options={{ showSpinner: false }}
      shallowRouting
    />
  )
}
