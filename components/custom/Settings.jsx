"use client"
import { useSelectedElement } from '@/app/provider'
import React, { useEffect, useState} from 'react';
import InputField from './Settings/InputField';

function Settings() {
  const { selectedElement, setSelectedElement } = useSelectedElement();
  const [element, setElement] = useState();
  useEffect(() => {
    console.log(selectedElement?.layout?.[selectedElement?.index]);
    setElement(selectedElement?.layout?.[selectedElement?.index]);
  }, [selectedElement]);

  const onHandleInputChange = (fieldName, value) => {
    console.log(fieldName,"value"+ value);
  };
  return (
    <div children='p-5'>
      <h2 className='font-bold text-xl'>Settings</h2>
      {element?.content &&
      <InputField label={'Content'} value={element?.content} 
      onHandleInputChange={(value)=>onHandleInputChange('content',value)}/>}
    </div>
  )
}

export default Settings