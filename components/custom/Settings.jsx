"use client";
import { useSelectedElement } from "@/app/provider";
import React, { useEffect, useState } from "react";
import InputField from "./Settings/InputField";
import ColorPickerField from "./Settings/ColorPickerField";

function Settings() {
  const { selectedElement, setSelectedElement } = useSelectedElement();
  const [element, setElement] = useState();
  useEffect(() => {
    console.log(selectedElement?.layout?.[selectedElement?.index]);
    setElement(selectedElement?.layout?.[selectedElement?.index]);
  }, [selectedElement]);

  const onHandleInputChange = (fieldName, value) => {
    console.log(fieldName, "value" + value);
    const updatedData = { ...selectedElement };

    updatedData.layout[selectedElement.index][fieldName] = value;

    setSelectedElement(updatedData);
  };

  const onHandleStyleChange = (fieldName, fieldValue) => {


    let updateElement = {
      ...selectedElement,
      layout: {
        ...selectedElement?.layout,
        [selectedElement?.index]: {
          ...selectedElement?.layout[selectedElement?.index],
          style: {
            ...selectedElement?.layout[selectedElement?.index]?.style,
            [fieldName]: [fieldValue],
          },
        },
      },
    };

    setSelectedElement(updateElement);
  };

  return (
    <div className="p-5">
      <h2 className="font-bold text-xl">Settings</h2>
      {element?.content && (
        <InputField
          label={"Content"}
          value={element?.content}
          onHandleInputChange={(value) => onHandleInputChange("content", value)}
        />
      )}
      {element?.url && (
        <InputField
          label={"url"}
          value={element?.url}
          onHandleInputChange={(value) => onHandleInputChange("content", value)}
        />
      )}
      {element?.style?.backgroundColor && (
        <ColorPickerField
          label="Background Color"
          value={element?.style?.backgroundColor}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("backgroundColor", value)
          }
        />
      )}
    </div>
  );
}

export default Settings;
