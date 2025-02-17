import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Code, Monitor, Smartphone } from 'lucide-react'

function EditorHeader() {
  return (
    <div className='p-4 shadow-sm flex justify-between items-center'>
        <Image src={'/logo.svg'} alt='logo' width={160} height={150}/>
        <div>
            <Button variant='ghost'><Monitor/>Desktop</Button>
            <Button variant='ghost'><Smartphone/>Mobile</Button>
        </div>
        <div className='flex gap-3'>
            <Button variant='ghost' className='hover:text-white hover:bg-primary'>
                <Code />
            </Button>
            <Button variant='outline'>Send Test Email</Button>
            <Button>Save Template</Button>
        </div>
    </div>
  )
}

export default EditorHeader