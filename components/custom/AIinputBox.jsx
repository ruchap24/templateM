"use client"
import React, { useState } from 'react'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

function AIinputBox() {

  const [userInput, setUserInput] = useState('')
  const [loading, setLoading] = useState(false);
  return (
    <div className='mt-5'>
        <p className='mt-5 text-lg text-gray-400'>
            Provide details about your email template, such as the purpose, target audience, and any specific elements you want to include. The more details you provide, the better the AI can assist you in creating a tailored email template.
        </p>  
            <Textarea className="w-full h-40 mt-5 p-3 border border-gray-300 rounded-lg" placeholder="Enter your details here..." onChange={(e)=>setUserInput(e.target.value)}></Textarea>
        <Button className='mt-5 bg-blue-500 text-white hover:bg-blue-600' disabled={!userInput?.length==0 || loading} >Generate Template</Button>
        {/* <p className='mt-5 text-lg text-gray-400'>
            Note: The AI-generated template may require further customization to meet your specific needs.
        </p> */}
    </div>
  )
}

export default AIinputBox