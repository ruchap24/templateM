"use client";
import { useSelectedElement } from "@/app/provider";
import React, { useEffect, useState } from "react";
import InputField from "./Settings/InputField";
import ColorPickerField from "./Settings/ColorPickerField";
import InputStyleField from "./Settings/InputStyleField";
import SliderField from "./Settings/SliderField";
import TextAreaField from "./Settings/TextAreaField";
import ToogleGroupField from "./Settings/ToogleGroupField";
import DropdownField from "./Settings/DropdownField";
import ImagePreview from "./Element/ImagePreview";
import { AlignLeft, AArrowUp, CaseLower, CaseUpper } from "lucide-react";

const TextAlignOptions = [
  { value: "left", icon: AlignLeft },
  { value: "center", icon: AlignLeft },
  { value: "right", icon: AlignLeft },
];

const TextTransformOptions = [
  { value: "uppercase", icon: CaseUpper },
  { value: "lowercase", icon: CaseLower },
  { value: "capitalize", icon: AArrowUp },
];

function Settings() {
  const { selectedElement, setSelectedElement } = useSelectedElement();
  const [element, setElement] = useState();

  useEffect(() => {
    if (selectedElement?.layout && typeof selectedElement.index === "number") {
      const element = selectedElement.layout[selectedElement.index];
      setElement(element);
    }
  }, [selectedElement]);

  const onHandleInputChange = (fieldName, value) => {
    if (!selectedElement?.layout || typeof selectedElement.index !== "number") {
      return;
    }
    
    const updatedLayout = {
      ...selectedElement.layout,
      [selectedElement.index]: {
        ...selectedElement.layout[selectedElement.index],
        [fieldName]: value,
      },
    };
    setSelectedElement({ ...selectedElement, layout: updatedLayout });
  };

  const onHandleStyleChange = (fieldName, fieldValue) => {
    if (!selectedElement?.layout || typeof selectedElement.index !== "number") {
      return;
    }
    
    const currentElement = selectedElement.layout[selectedElement.index];
    const updatedLayout = {
      ...selectedElement.layout,
      [selectedElement.index]: {
        ...currentElement,
        style: {
          ...currentElement?.style,
          [fieldName]: fieldValue,
        },
      },
    };
    setSelectedElement({ ...selectedElement, layout: updatedLayout });
  };

  const onHandleOuterStyleChange = (fieldName, fieldValue) => {
    if (!selectedElement?.layout || typeof selectedElement.index !== "number") {
      return;
    }
    
    const currentElement = selectedElement.layout[selectedElement.index];
    const updatedLayout = {
      ...selectedElement.layout,
      [selectedElement.index]: {
        ...currentElement,
        outerStyle: {
          ...currentElement?.outerStyle,
          [fieldName]: fieldValue,
        },
      },
    };
    setSelectedElement({ ...selectedElement, layout: updatedLayout });
  };

  return (
    <div className="p-5 flex flex-col gap-4">
      <h2 className="font-bold text-xl">Settings</h2>
      {element?.imageUrl && (
        <ImagePreview
          label="Image Preview"
          value={element.imageUrl}
          onHandleInputChange={(value) =>
            onHandleInputChange("imageUrl", value)
          }
        />
      )}
      {element?.content && (
        <InputField
          label="Content"
          value={element.content}
          onHandleInputChange={(value) =>
            onHandleInputChange("content", value)
          }
        />
      )}
      {element?.textarea && (
        <TextAreaField
          label="Text Area"
          value={element.textarea}
          onHandleInputChange={(value) =>
            onHandleInputChange("textarea", value)
          }
        />
      )}
      {element?.url && (
        <InputField
          label="URL"
          value={element.url}
          onHandleInputChange={(value) => onHandleInputChange("url", value)}
        />
      )}
      {element?.style?.width && (
        <SliderField
          label="Width"
          value={element.style.width}
          type="%"
          onHandleStyleChange={(value) =>
            onHandleInputChange("width", value)
          }
        />
      )}
      {element?.style?.textAlign && (
        <ToogleGroupField
          label="Text Align"
          value={element.style.textAlign}
          options={TextAlignOptions}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("textAlign", value)
          }
        />
      )}
      {element?.style?.backgroundColor && (
        <ColorPickerField
          label="Background Color"
          value={element.style.backgroundColor}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("backgroundColor", value)
          }
        />
      )}
      {element?.style?.color && (
        <ColorPickerField
          label="Text Color"
          value={element.style.color}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("color", value)
          }
        />
      )}
      {element?.style?.fontSize && (
        <InputStyleField
          label="Font Size"
          value={element.style.fontSize}
          onHandleStyleChange={(value) =>
            onHandleInputChange("fontSize", value)
          }
        />
      )}
      {element?.style?.textTransform && (
        <ToogleGroupField
          label="Text Transform"
          value={element.style.textTransform}
          options={TextTransformOptions}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("textTransform", value)
          }
        />
      )}
      {element?.style?.padding && (
        <InputStyleField
          label="Padding"
          value={element.style.padding}
          onHandleStyleChange={(value) =>
            onHandleInputChange("padding", value)
          }
        />
      )}
      {element?.style?.margin && (
        <InputStyleField
          label="Margin"
          value={element.style.margin}
          onHandleStyleChange={(value) =>
            onHandleInputChange("margin", value)
          }
        />
      )}
      {element?.style?.borderRadius && (
        <SliderField
          label="Border Radius"
          value={element.style.borderRadius}
          onHandleStyleChange={(value) =>
            onHandleInputChange("borderRadius", value)
          }
        />
      )}
      {element?.style?.fontWeight && (
        <DropdownField
          label="Font Weight"
          value={element.style.fontWeight}
          options={["normal", "bold"]}
          onHandleStyleChange={(value) =>
            onHandleInputChange("fontWeight", value)
          }
        />
      )}
      <div>
        <h2 className="font-bold mb-2">Outer Style</h2>
        {element?.outerStyle?.backgroundColor && (
          <ColorPickerField
            label="Outer Background Color"
            value={element.outerStyle.backgroundColor}
            onHandleStyleChange={(value) =>
              onHandleOuterStyleChange("backgroundColor", value)
            }
          />
        )}
        {element?.outerStyle?.justifyContent && (
          <ToogleGroupField
            label="Align"
            value={element.outerStyle.justifyContent}
            options={TextAlignOptions}
            onHandleStyleChange={(value) =>
              onHandleOuterStyleChange("justifyContent", value)
            }
          />
        )}
      </div>
    </div>
  );
}

export default Settings;