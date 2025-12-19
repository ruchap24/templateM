import React, { useEffect } from 'react'
import { useState } from 'react';
import Image from 'next/image'
import { Button } from '../ui/button';
import Link from 'next/link';
import { useConvex } from 'convex/react';
import { useUserDetail } from '@/app/provider';
import { api } from '@/convex/_generated/api';

function EmailTemplateList() {
    const [emailList, setEmailList] = useState([]);
    const convex=useConvex();
    const {userDetail, setUserDetail}=useUserDetail();

    useEffect(()=>{
      userDetail&&GetTemplateList();
    },[userDetail])

    const GetTemplateList=async()=>{
      const result=await convex.query(api.emailTemplate.GetAllUserTemplate,{
        email:userDetail?.email
      })
      console.log(result);
      setEmailList(result);
    }

  return (
    <div>
        <h2 className='font-bold text-xl text-purple-700 mt-6'>My Email Templates</h2>
        {emailList?.length==0 ?
        <div className='flex justify-center mt-7 flex-col items-center'>
            <Image src={'/email.png'} alt='email' height=
            {250} width={250}/>
            <Link href="/dashboard/create">
            <Button className='mt-7'>+ Create New</Button>
            </Link>
            </div>
            :<div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
              {emailList?.map((item,index)=>(
                <div key={index} className='p-5 rounded-lg shadow-md border border-slate-200 hover:shadow-xl hover:border-purple-300 transition-all hover:-translate-y-1'>
                  <Image src={'/emailbox.png'} alt='emailbox' width={200} height={200} className='mx-auto'/>
                  
                    <h2 className='mt-2 text-slate-900 font-semibold'>{item?.description || 'Untitled Template'}</h2>
                    <Link href={'/editor/'+item.tid}>
                    <Button className="mt-2 w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-md hover:shadow-lg transition-all">View/Edit</Button>
                    </Link>
                  </div>
              ))}
              </div>
        }
    </div>
  )
}

export default EmailTemplateList