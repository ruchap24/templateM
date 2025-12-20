import React from 'react'

function ColorPickerField({label, value, onHandleStyleChange}) {
  return (
    <div className='flex flex-col gap-2 mt-4'>
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <div className="flex items-center gap-3">
            <input 
                type="color" 
                value={value || '#ffffff'} 
                onChange={(e)=>onHandleStyleChange(e.target.value)}
                className="w-12 h-10 rounded border border-gray-300 cursor-pointer"
            />
            <input
                type="text"
                value={value || '#ffffff'}
                onChange={(e)=>onHandleStyleChange(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="#ffffff"
            />
        </div>
    </div>
  )
}

export default ColorPickerField