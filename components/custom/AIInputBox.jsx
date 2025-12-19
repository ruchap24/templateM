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
        <p className='mb-2 text-lg text-slate-600'>
            Describe your email template requirements. Include details about the purpose, target audience, key messaging, and design preferences. The more specific you are, the better our AI can create a tailored template for you.
        </p>  
            <Textarea className="w-full h-40 mt-5 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all" placeholder="Example: Create a welcome email for new customers with a modern design, including company logo, welcome message, and call-to-action button..." onChange={(e)=>setUserInput(e.target.value)}></Textarea>
        <Button className='w-full mt-7 bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 shadow-md hover:shadow-xl transition-all' disabled={(userInput?.length==0 || loading)} onClick={OnGenerate}>
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