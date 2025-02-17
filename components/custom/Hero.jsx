import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import SignInButton from './SignInButton'

function Hero() {
  return (
    <div className='px-10 md:px-28 lg:px-44  flex flex-col items-center mt-24'>
        <h2 className='font-extrabold text-5xl text-center'>ai power email templates
            <span className='text-primary'>Email Templates</span>
        </h2>
        <p className='text-center text-lg mt-4'>Create beautiful email templates with ai power.</p>
        <div className='flex gap-5 mt-6'>
            <Button variant="outline">Try Demo</Button>
            <SignInButton/>
        </div>
        <Image src={'/landing.webp'} alt="Landing" width={1000} height={800} className='mt-12 rounded-xl'/>
    </div>
  )
}

export default Hero