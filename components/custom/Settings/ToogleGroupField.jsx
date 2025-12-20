import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import React, { useEffect, useState } from "react";

function ToogleGroupField({label, value, options, onHandleStyleChange}) {
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  if (!options || !Array.isArray(options)) {
    return null;
  }
  return (
    <div className="flex flex-col gap-2 mt-4">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <ToggleGroup
        type="single"
        value={currentValue}
        onValueChange={(v) => {
          if (v) {
            setCurrentValue(v);
            onHandleStyleChange(v);
          }
        }}
        className="flex gap-2"
      >
        {options.map((option, index) => (
          <ToggleGroupItem 
            key={index} 
            value={option?.value} 
            className="flex-1 flex items-center justify-center gap-2 data-[state=on]:bg-purple-600 data-[state=on]:text-white"
            aria-label={option?.value}
          >
            {option?.icon && <option.icon className="h-4 w-4"/>}
            <span className="hidden sm:inline">{option?.value}</span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}

export default ToogleGroupField;
