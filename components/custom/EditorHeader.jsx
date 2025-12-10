"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'  
import { Button } from '../ui/button'
import { Code, Monitor, Smartphone } from 'lucide-react'
import { useEmailTemplate, useScreenSize } from '@/app/provider'
import CheckCode from './CheckCode'

function EditorHeader({viewHTMLCode}) {
  const { screenSize, setScreenSize } = useScreenSize();
  const router = useRouter();
  const updateEmailTemplate= useMutation(api.emailTemplate.updateTemplateDesign);
  const {emailTemplate, setEmailTemplate}=useEmailTemplate();

  const onSaveTemplate=async()=>{
    await updateEmailTemplate({
      tid:templateId,
      design:emailTemplate
    });
    toast('Email Template Saved Successfully!')
  }
  
  return (
    <div className='p-4 shadow-sm flex justify-between items-center dark:bg-gray-900 dark:border-b dark:border-gray-800'>
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
          className={`${screenSize === 'desktop' ? 'bg-purple-100 text-primary dark:bg-purple-900' : 'dark:text-gray-300'}`}
        >
          <Monitor className="mr-2" />Desktop
        </Button>
        <Button 
          variant='ghost' 
          onClick={() => setScreenSize('mobile')} 
          className={`${screenSize === 'mobile' ? 'bg-purple-100 text-primary dark:bg-purple-900' : 'dark:text-gray-300'}`}
        >
          <Smartphone className="mr-2" />Mobile
        </Button>
      </div>
      
      <div className='flex gap-3'>
        <Button 
          variant='ghost' 
          className="hover:text-primary dark:hover:text-purple-400"
          onClick={() => viewHTMLCode(true)}
        >
          <Code className="mr-2" />
        </Button>
        
        <Button 
          variant='default' 
          onClick={() => router.push('/checkcode')}
          className="dark:bg-purple-800 dark:hover:bg-purple-700"
        >
          Check Diff
        </Button>
        <Button 
          variant='outline'
          className="dark:border-purple-700 dark:text-gray-200"
        >
          Send Test Email
        </Button>
        <Button 
          variant='default'
          className="dark:bg-purple-800 dark:hover:bg-purple-700"
          onClick={onSaveTemplate}
        >
          Save Template
        </Button>
      </div>
    </div>
  )
}

export default EditorHeader