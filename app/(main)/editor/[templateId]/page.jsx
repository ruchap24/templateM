"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Canvas from '@/components/custom/Canvas'
import Settings from '@/components/custom/Settings'
import ElementsSideBar from '@/components/custom/ElementsSideBar'
import EditorHeader from '@/components/custom/EditorHeader'
import { api } from '@/convex/_generated/api'
import { useEmailTemplate } from '@/app/provider'


function Editor() {
  const [viewHTMLCode, setViewHtmlCode] = useState();
  const {templateId}=useParams();
  const {userDetail, setUserDetail}= useUserDetail();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const { loading, setLoadin }= useState(false);
  const convex= useConvex();

  useEffect(()=>{
    if(userDetail)
    {
      GetTemplateData();
    }
  },[userDetail])

  const GetTemplateData=async()=>{
    setLoading(true)
    const result=await convex.query(api.emailTemplate.GetTemplateDesign,{
      tid:templateId,
      email:userDetail?.email
    });
    console.log(result);
    setEmailTemplate(result?.design)
    setLoadin(false);
  }
  


  return (
    <div>
      <EditorHeader viewHTMLCode={(v) => setViewHtmlCode(v)} />
        {!loading? <div className='grid grid-cols-5'>
        <ElementsSideBar />
        <div className='col-span-3 bg-gray-100'>
          <Canvas 
            viewHTMLCode={viewHTMLCode} 
            closeDialog={()=> setViewHtmlCode(false)}
          />
        </div>
        <Settings />
      </div>:
      <div>
        <h2> Please wait...</h2>
      </div>
        }
    </div>
  );
}

export default Editor