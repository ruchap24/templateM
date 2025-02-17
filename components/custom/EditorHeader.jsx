import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Code } from 'lucide-react'

function EditorHeader() {
  return (
    <div className='p-4 shadow-sm px-10 flex justify-between items-center'>
        <Image src={'/logo.svg'} alt='logo' width={160} height={150}/>
        <div>
            
        </div>
        <div className='flex gap-3'>
            <Button>
                <Code />
            </Button>
            <Button varient='outline'>Send Test Email</Button>
            <Button>Save Template</Button>
        </div>
    </div>
  )
}

export default EditorHeader