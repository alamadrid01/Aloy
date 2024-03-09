"use client"
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const Login = () => {
  return (
    <div className='max-w-[1900px] container min-h-screen grid md:grid-cols-2 '>
        <section className="flex flex-col gap-2 items-center justify-center">
            <div className="flex md:-mt-[15rem] items-center gap-4">
            <Image src='/logo.png' width={40} height={20} alt='my image' className='' />
            <p className="font-semibold text-lg">Aloy</p>
            </div>

            <h2 className="font-bold text-4xl">Welcome back!</h2>
             <div onClick={() => signIn('google', { callbackUrl: '/profile' })} className="flex  mt-7 justify-between px-12 cursor-pointer py-3 border hover:bg-slate-100 border-gray-400 rounded-md ">
          <h3 className="flex gap-3 items-center text-sm ">
            <span className="inline">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                focusable="false"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M16.0008 8.17753C16.0008 7.51976 15.9463 7.03976 15.8285 6.54199H8.16406V9.51085H12.6629C12.5722 10.2486 12.0824 11.3598 10.994 12.1064L10.9787 12.2058L13.4021 14.0456L13.5699 14.062C15.1119 12.6664 16.0008 10.6131 16.0008 8.17753Z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M8.1636 15.9999C10.3676 15.9999 12.218 15.2887 13.5695 14.0621L10.9935 12.1065C10.3042 12.5776 9.37899 12.9065 8.1636 12.9065C6.00489 12.9065 4.17272 11.5109 3.5196 9.58203L3.42386 9.59L0.904047 11.5011L0.871094 11.5909C2.21348 14.2042 4.97084 15.9999 8.1636 15.9999Z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M3.52021 9.5824C3.34788 9.08463 3.24815 8.55126 3.24815 8.00017C3.24815 7.44903 3.34788 6.91572 3.51115 6.41795L3.50658 6.31193L0.95518 4.37012L0.871703 4.40903C0.31844 5.49349 0.000976562 6.71129 0.000976562 8.00017C0.000976562 9.28906 0.31844 10.5068 0.871703 11.5913L3.52021 9.5824Z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M8.16364 3.09331C9.6965 3.09331 10.7305 3.7422 11.3201 4.28446L13.6239 2.08C12.209 0.791114 10.3677 0 8.16364 0C4.97087 0 2.21349 1.79554 0.871094 4.40885L3.51054 6.41777C4.17274 4.48888 6.00492 3.09331 8.16364 3.09331Z"
                    fill="#EB4335"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="16" height="16" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </span>
            Sign in with Google
          </h3>
        </div>
        </section>

        <section className='bg-stone-100'>
        <Image src="/one.jpg" alt="image" width={500} height={500} className=" object-contain w-full h-full" />
        </section>
    </div>
  )
}

export default Login