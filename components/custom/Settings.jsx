"use client"
import { useSelectedElement } from '@/app/provider'
import React, { useEffect, useState} from 'react';
import InputField from './Settings/InputField';

function Settings() {
  const { selectedElement, setSelectedElement } = useSelectedElement();
  const [element, setElement] = useState();
  useEffect(() => {
    setElement(selectedElement?.layout?.[selectedElement?.index]);
  }, [selectedElement]);
  return (
    <div children='p-5'>
      <h2 className='font-bold text-xl'>Settings</h2>
      {selectedElement?.layout?.content &&
      <InputField/>}
    </div>
  )
}

export default Settings