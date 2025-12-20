import React from 'react'
import { Input } from '@/components/ui/input'

function InputStyleField({label,value,onHandleStyleChange,type='px'}) {

    const FormattedValue=(value_)=>{
        if (!value_) return '';
        try {
            const str = value_.toString();
            const num = Number(str.replace(type, '').replace('%', ''));
            return isNaN(num) ? '' : num;
        } catch {
            return '';
        }
    }
  return (
    <div className="flex flex-col gap-2 mt-4">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <div className='flex'>
        <Input 
            type="text" 
            value={FormattedValue(value) || ''} 
            onChange={(e)=>{
                const val = e.target.value;
                if (val === '') {
                    onHandleStyleChange('0' + type);
                } else {
                    onHandleStyleChange(val + type);
                }
            }}
            className="flex-1"
        />
        <span className='p-1.5 bg-gray-100 rounded-r-lg -ml-1 flex items-center text-sm'>{type}</span>
        </div>
    </div>
  )
}

export default InputStyleField