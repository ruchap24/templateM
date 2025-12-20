import { Slider }from '@/components/ui/slider'
import React, { useState, useEffect } from 'react'

function SliderField({label,value,onHandleStyleChange,type="px", max=100}) {
    const FormattedValue=(value_) => {
        if (!value_) return 0;
        const str = value_.toString();
        if (type === '%') {
            return Number(str.replace('%', '').replace('px', ''));
        }
        return Number(str.replace(type, ''));
    }
    
    const [currentValue, setCurrentValue] = useState([FormattedValue(value) || 0]);
    
    useEffect(() => {
        setCurrentValue([FormattedValue(value) || 0]);
    }, [value]);

    const handleValueChange = (newValue) => {
        setCurrentValue(newValue);
        const formattedValue = type === '%' ? `${newValue[0]}%` : `${newValue[0]}${type}`;
        onHandleStyleChange(formattedValue);
    }

  return (
    <div className="flex flex-col gap-2 mt-4">
        <label className="text-sm font-medium text-gray-700">
            {label} ({currentValue[0]}{type})
        </label>
        <Slider 
            value={currentValue} 
            max={max} 
            step={1}
            onValueChange={handleValueChange}
            className="w-full"
        />
    </div>
  )
}

export default SliderField