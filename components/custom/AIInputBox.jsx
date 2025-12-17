"use client"
import React, { useState } from 'react'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import Prompt from '@/Data/Prompt';
import axios from 'axios';
import { useMutation } from 'convex/react'; 
import { api } from '@/convex/_generated/api';
import { v4 as uuidv4 } from 'uuid';
import { useUserDetail } from '@/app/provider';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

function AIInputBox() {
  const [userInput, setUserInput] = useState('')
  const [loading, setLoading] = useState(false);
  const SaveTemplate=useMutation(api.emailTemplate.SaveTemplate);
  const {userDetail, setUserDetail}=useUserDetail();
  const router=useRouter();

  const OnGenerate=async()=>{
    const PROMPT=Prompt.EMAIL_PROMPT+"\n-"+userInput;
    const tid=uuidv4();
    setLoading(true)
    try{
      const result=await axios.post('/api/ai-email-generate',{
        prompt:PROMPT,
        // userEmail:'',
        // tId:0
      });
      console.log(result.data);
      if (result.data?.error) {
        const errorMessage = result.data.details || result.data.error || 'Failed to generate template';
        alert(`Error: ${errorMessage}`);
        setLoading(false);
        return;
      }
      if (!result.data || !Array.isArray(result.data)) {
        alert('Error: Invalid response from AI. Please try again.');
        setLoading(false);
        return;
      }
      
      const resp =await SaveTemplate({  
        tid:tid,
        design:result.data,
        email:userDetail?.email,
        description:userInput
      });
      console.log(resp);
      router.push('/editor/'+tid)
      setLoading(false);
    }
    catch(e){
      console.error("Error generating template:", e);
      setLoading(false);
      if (e?.response?.data?.error) {
        const errorData = e.response.data;
        console.error("API Error:", errorData.error);
        if (errorData.details) {
          alert(`Error: ${errorData.details}`);
        } else if (errorData.error) {
          alert(`Error: ${errorData.error}`);
        }
      } else if (e?.message) {
        alert(`Error: ${e.message}`);
      } else {
        alert('An error occurred while generating the template. Please try again.');
      }
    } 
  }
  return (
    <div className='mt-5'>
        <p className='mb-2 text-lg text-gray-400'>
            Provide details about your email template, such as the purpose, target audience, and any specific elements you want to include. The more details you provide, the better the AI can assist you in creating a tailored email template.
        </p>  
            <Textarea className="w-full h-40 mt-5 p-3 border border-gray-300 rounded-lg" placeholder="Enter your details here..." onChange={(e)=>setUserInput(e.target.value)}></Textarea>
        <Button className='w-full mt-7 bg-blue-500 text-white hover:bg-blue-600' disabled={(userInput?.length==0 || loading)} onClick={OnGenerate}>
          {loading ? (
            <span className='flex gap-2 items-center'>
              <Loader2 className='animate-spin'/> Please wait...
            </span>
          ) : (
            'Generate Template'
          )}
        </Button>
        {/* <p className='mt-5 text-lg text-gray-400'>
            Note: The AI-generated template may require further customization to meet your specific needs.
        </p> */}
    </div>
  )
}

export default AIInputBox