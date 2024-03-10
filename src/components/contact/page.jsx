'use client'

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useForm } from "react-hook-form"
import { useState } from "react";

export default function Page() {



  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      contactNumber: ''
    },
  });

  // const onSubmit = (data) => console.log(data);

  const [datas, setData] = useState("");

  return (
    <Sheet>
      <SheetTrigger className='uppercase'>
        Contact Us
      </SheetTrigger>

      <SheetContent>
        <SheetHeader className='mb-10'>
          <SheetTitle className='text-3xl mt-6 mb-4'>We’d love to know what you think!</SheetTitle>
          <SheetDescription className='text-xl'>
            Help us make Kaunlaran better by sending your feedback, story ideas, and suggestions.
          </SheetDescription>
        </SheetHeader>

        <form className="max-w-md mx-auto h-full" onSubmit={handleSubmit((datas) => setData(JSON.stringify(data)))}>
          <div className="relative z-0 w-full mb-5 group">
            <input type="text" {...register("firstName", { required: true })} id="firstName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:border-slate-600 peer" placeholder="First Name" required />
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input type="text" {...register("lastName", { required: true })} id="lastName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:border-slate-600 peer" placeholder="Last Name" required />
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} id="email" className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:border-slate-600 peer ${errors.email && 'border-red-500'}`} placeholder="Email address" required />
            {errors.email && <p className="text-red-500">Invalid email format</p>}
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input type="text" {...register("contactNumber", { required: true, maxLength: 11 })} id="contactNumber" className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:border-slate-600 peer ${errors.contactNumber && 'border-red-500'}`} placeholder="Contact Number" required />
            {errors.contactNumber && <p className="text-red-500">Contact number must be 11 characters or less</p>}
          </div>

          <button type='submit' className="text-white bg-[#E8412C] hover:bg-[#E8412C] duration-150 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#FC2815 dark:hover:bg-[#E8412C] dark:focus:ring-[#E8412C]">Submit</button>
        </form>

      </SheetContent>
    </Sheet>
  )
}
