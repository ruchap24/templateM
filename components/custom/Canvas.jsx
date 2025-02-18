"use client"
import { useDragElementLayout, useEmailTemplate, useScreenSize } from '@/app/provider';
import Layout from '@/Data/Layout';
import React, { useState } from 'react'

function Canvas() {
  const { screenSize, setScreenSize }= useScreenSize();
  const {dragElementLayout, setDragElementLayout}=useDragElementLayout();
  const {emailTemplate, setEmailTemplate}=useEmailTemplate();
  const[dragOver, setDragOver]=useState(false);

  const onDragOver=(e)=>{
    e.preventDefault();
    setDragOver(true);
    console.log('over...')
  }

  const onDropHandle=()=>{
    setDragOver(false);
    if(dragElementLayout?.dragLayout){
      setEmailTemplate(prev=>[...prev,dragElementLayout?.dragLayout])
    }
  }

  return (
    <div className='mt-20 flex justify-center'>
      <div className={`bg-white p-6 w-full ${screenSize=='desktop'?'max-w-2xl':'max-w-md'}
      ${dragOver && 'bg-purple-100 p-4'}`}
      onDragOver={onDragOver}
      onDrop={()=>onDropHandle()}
      >
        {emailTemplate?.length>0? emailTemplate?.map((Layout,index)=>(
          <div key={index}>
            Column {index+1}
          </div>
        )):
        <h2 className='p-4 text-center bg-gray-100 border border-dashed'>Add Layout Here</h2>}
      </div>
    </div>
  )
}

export default Canvas