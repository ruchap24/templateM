"use client"
import { UserDetail } from '@/app/provider' 
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import SignInButton from './SignInButton'
import Link from 'next/link'


function Header() {
  const { userDetail, setUserDetail } = UserDetail();
  return (
    <div className='flex justify-between items-center p-4 shadow-sm px-10'>
        <Image src={'/img.png'} alt="Logo" width={140} height={140} />

        <div>
          {userDetail?.email ?
            <div className='flex gap-3 items-center'>
              <Link href={'/dashboard'}>
              <Button>Dashboard</Button>
              </Link>
              <Image 
                src={userDetail?.picture} 
                alt='user' 
                width={35} 
                height={35}
                className="rounded-full" 
              />
            </div>: <SignInButton/>
       }
        </div>
    </div>
  )
}

export default Header