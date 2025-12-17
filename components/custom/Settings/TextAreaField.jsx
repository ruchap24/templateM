import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function TextAreaField({label,value,onHandleInputChange}) {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <Textarea 
        value={value || ''} 
        onChange={(e)=>onHandleInputChange(e.target.value)} 
        className="min-h-[100px]"
      />
    </div>
  )
}

export default TextAreaField