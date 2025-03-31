"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Code, Monitor, Smartphone } from 'lucide-react'
import { useScreenSize } from '@/app/provider'

function EditorHeader({viewHTMLCode}) {
  const { screenSize, setScreenSize } = useScreenSize();
  
  return (
    <div className='p-4 shadow-sm flex justify-between items-center'>
      <Link href="/">
        <Image 
          src='/logo.svg' 
          alt='logo' 
          width={160} 
          height={150}
          priority 
        />
      </Link>
      
      <div className='flex gap-3'>
        <Button 
          variant='ghost' 
          onClick={() => setScreenSize('desktop')} 
          className={`${screenSize === 'desktop' && 'bg-purple-100 text-primary'}`}
        >
          <Monitor className="mr-2" />Desktop
        </Button>
        <Button 
          variant='ghost' 
          onClick={() => setScreenSize('mobile')} 
          className={`${screenSize === 'mobile' && 'bg-purple-100 text-primary'}`}
        >
          <Smartphone className="mr-2" />Mobile
        </Button>
      </div>
      
      <div className='flex gap-3'>
        <Button 
          variant='ghost' 
          // className='hover:text-white hover:bg-primary'
          className="hover:text-primary"
          onClick={()=>viewHTMLCode(true)}
        >
          <Code className="mr-2" />
        </Button>
        <Button variant='outline'>Send Test Email</Button>
        <Button variant='default'>Save Template</Button>
      </div>
    </div>
  )
}

export default EditorHeader