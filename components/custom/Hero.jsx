import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import SignInButton from './SignInButton'

function Hero() {
  return (
    <div className='px-10 md:px-28 lg:px-44  flex flex-col items-center mt-24'>
        <h2 className='font-extrabold text-6xl text-center text-slate-900'>Build Emails.
            <span className='text-purple-700 bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent'> Faster. Smarter.</span>
        </h2>
        <p className='text-center text-lg mt-4 text-slate-600 max-w-2xl mx-auto'>Create stunning, responsive email templates with AI-powered design tools. Build, customize, and deploy professional emails in minutes.</p>
        <div className='flex gap-5 mt-6'>
            <Button variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50 hover:border-purple-600 transition-all shadow-sm hover:shadow-md">View Demo</Button>
            <SignInButton/>
        </div>
        <Image src={'/landing.png'} alt="Landing" width={1000} height={800} className='mt-12 rounded-xl'/>
    </div>
  )
}


export default Hero