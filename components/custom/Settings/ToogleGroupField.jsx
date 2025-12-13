import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import React from "react";

function ToogleGroupField({label, value, options, onHandleStyleChange}) {
  if (!options || !Array.isArray(options)) {
    return null;
  }
  return (
    <div>
      <label>{label}</label>
      <ToggleGroup
        type="single"
        defaultValue={value}
        onValueChange={(v) => onHandleStyleChange(v)}
      >
        {options.map((option, index) => (
          <ToggleGroupItem key={index} value={option?.value} className="w-full">
            {option?.icon && <option.icon/>}
          </ToggleGroupItem>
        ))}
        {/* <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="a">B</ToggleGroupItem>
        <ToggleGroupItem value="a">C</ToggleGroupItem> */}
      </ToggleGroup>
    </div>
  );
}

export default ToogleGroupField;
