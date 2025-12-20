"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Canvas from '@/components/custom/Canvas'
import Settings from '@/components/custom/Settings'
import ElementsSideBar from '@/components/custom/ElementsSideBar'
import EditorHeader from '@/components/custom/EditorHeader'
import { api } from '@/convex/_generated/api'
import { useEmailTemplate } from '@/app/provider'
import { useConvex } from 'convex/react'
import { useUserDetail } from '@/app/provider'
import { Loader2 } from 'lucide-react';

export const dynamic = 'force-dynamic';

function Editor() {
  const [viewHTMLCode, setViewHtmlCode] = useState();
  const {templateId}=useParams();
  const {userDetail, setUserDetail}= useUserDetail();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const [ loading, setLoading ]= useState(false);
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
    setLoading(false);
  }
 
  const [showElementsSidebar, setShowElementsSidebar] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <EditorHeader 
        viewHTMLCode={(v) => setViewHtmlCode(v)} 
        showElementsSidebar={showElementsSidebar}
        showSettings={showSettings}
        setShowElementsSidebar={setShowElementsSidebar}
        setShowSettings={setShowSettings}
      />
        {!loading? (
          <div className='flex-1 overflow-hidden flex flex-col lg:grid lg:grid-cols-5 relative'>

            {/* Elements Sidebar */}
            <div className={`lg:block lg:col-span-1 border-r border-slate-200 overflow-y-auto fixed lg:static inset-0 lg:inset-auto bg-white z-40 transform transition-transform duration-300 ${
              showElementsSidebar ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
            }`}>
              <div className="p-2 lg:p-5">
                <button
                  onClick={() => setShowElementsSidebar(false)}
                  className="lg:hidden mb-4 text-gray-500 hover:text-gray-700"
                >
                  ✕ Close
                </button>
                <ElementsSideBar />
              </div>
            </div>

            {/* Canvas */}
            <div className='flex-1 lg:col-span-3 bg-gray-100 overflow-y-auto'>
              <Canvas 
                viewHTMLCode={viewHTMLCode} 
                closeDialog={()=> setViewHtmlCode(false)}
              />
            </div>

            {/* Settings Panel */}
            <div className={`lg:block lg:col-span-1 border-l border-slate-200 overflow-y-auto fixed lg:static inset-0 lg:inset-auto bg-white z-40 transform transition-transform duration-300 ${
              showSettings ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
            }`}>
              <div className="p-2 lg:p-5">
                <button
                  onClick={() => setShowSettings(false)}
                  className="lg:hidden mb-4 text-gray-500 hover:text-gray-700"
                >
                  ✕ Close
                </button>
                <Settings />
              </div>
            </div>

            {/* Overlay for mobile */}
            {(showElementsSidebar || showSettings) && (
              <div
                className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                onClick={() => {
                  setShowElementsSidebar(false);
                  setShowSettings(false);
                }}
              />
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <h2 className="text-lg text-slate-600">Please wait...</h2>
          </div>
        )}
    </div>
  );
}

export default Editor