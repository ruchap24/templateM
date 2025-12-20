import React, { useEffect } from 'react'
import { useState } from 'react';
import Image from 'next/image'
import { Button } from '../ui/button';
import Link from 'next/link';
import { useConvex, useMutation } from 'convex/react';
import { useUserDetail } from '@/app/provider';
import { api } from '@/convex/_generated/api';
import { DEFAULT_TEMPLATE } from '@/Data/DefaultTemplate';
import { Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';

function EmailTemplateList() {
    const [emailList, setEmailList] = useState([]);
    const [defaultTemplateId, setDefaultTemplateId] = useState(null);
    const convex=useConvex();
    const {userDetail, setUserDetail}=useUserDetail();
    const deleteTemplate = useMutation(api.emailTemplate.DeleteTemplate);
    const saveTemplate = useMutation(api.emailTemplate.SaveTemplate);

    useEffect(()=>{
      userDetail&&GetTemplateList();
    },[userDetail])

    const GetTemplateList=async()=>{
      const result=await convex.query(api.emailTemplate.GetAllUserTemplate,{
        email:userDetail?.email
      })
      console.log(result);
      setEmailList(result);
      
      // If no templates, create default template
      if(result.length === 0 && !defaultTemplateId){
        createDefaultTemplate();
      }
    }

    const createDefaultTemplate = async () => {
      const tid = uuidv4();
      setDefaultTemplateId(tid);
      try {
        await saveTemplate({
          tid: tid,
          design: DEFAULT_TEMPLATE,
          email: userDetail?.email,
          description: 'Welcome Email Template'
        });
        GetTemplateList();
      } catch (error) {
        console.error('Error creating default template:', error);
      }
    }

    const handleDelete = async (tid) => {
      if (confirm('Are you sure you want to delete this template?')) {
        try {
          await deleteTemplate({
            tid: tid,
            email: userDetail?.email
          });
          toast.success('Template deleted successfully');
          GetTemplateList();
        } catch (error) {
          console.error('Error deleting template:', error);
          toast.error('Failed to delete template');
        }
      }
    }

  return (
    <div>
        <h2 className='font-bold text-xl text-purple-700 mt-6'>My Email Templates</h2>
        {emailList?.length==0 ?
        <div className='flex justify-center mt-7 flex-col items-center'>
            <Image src={'/email.png'} alt='email' height={250} width={250}/>
            <Link href="/dashboard/create">
            <Button className='mt-7'>+ Create New</Button>
            </Link>
            </div>
            :<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-5'>
              {emailList?.map((item,index)=>(
                <div key={index} className='p-5 rounded-lg shadow-md border border-slate-200 hover:shadow-xl hover:border-purple-300 transition-all hover:-translate-y-1 relative'>
                  <button
                    onClick={() => handleDelete(item.tid)}
                    className="absolute top-3 right-3 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors z-10"
                    title="Delete template"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
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