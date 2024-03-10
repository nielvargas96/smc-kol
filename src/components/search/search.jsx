import React from 'react'
import { Copy } from "lucide-react"

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Search() {
  return (
    <Dialog>
      <DialogTrigger asChild className='cursor-pointer'>
        <MagnifyingGlassIcon style={{ width: '24px', height: '24px' }} className=" text-white stroke-2" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-0 rounded-xl bg-white">
        <form>
          <input type='text' className="block w-full appearance-none bg-transparent py-4 pl-4 pr-12 text-base text-slate-900 placeholder:text-slate-600 focus:outline-none sm:text-sm sm:leading-6" placeholder="Find anything..." />
        </form>
      </DialogContent>
    </Dialog>
  )
}
