"use client";
import { useSelectedElement } from "@/app/provider";
import React, { useEffect, useState } from "react";
import InputField from "./Settings/InputField";
import ColorPickerField from "./Settings/ColorPickerField";
import InputStyleField from "./Settings/InputStyleField";
import SliderField from "./Settings/SliderField";
import TextAreaField from "./Settings/TextAreaField";
import ToogleGroupField from "./Settings/ToogleGroupField";
import { AArrowUp, CaseLower, CaseUpper } from "lucide-react";
import DropdownField from "./Settings/DropdownField";
import ImagePreview from "./Element/ImagePreview";

const TextAlignOptions = [
  {
    value: "left",
    icon: AlignLeft,
  },
  {
    value: "center",
    icon: AlignLeft,
  },
  {
    value: "right",
    icon: AlignLeft,
  },
];

const TextTransformOptions = [
  {
    value: "uppercase",
    icon: CaseUpper,
  },
  {
    value: "lowercase",
    icon: CaseLower,
  },
  {
    value: "capitalize",
    icon: AArrowUp,
  },
];

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
    <div className="p-5 flex flex-col gap-4">
      <h2 className="font-bold text-xl">Settings</h2>
      {element?.imageUrl && ( //remove this paranthesis()
        <ImagePreview
          label={"Image Preview"}
          value={element?.imageUrl}
          onHandleInputChange={(value) => onHandleInputChange("imageUrl", value)}
        />
      )}
      {element?.content && ( //remove this paranthesis()
        <InputField
          label={"Content"}
          value={element?.content}
          onHandleInputChange={(value) => onHandleInputChange("content", value)}
        />
      )}
      {element?.textarea && (
        <TextAreaField
          label={"Text Area"}
          value={element?.textarea}
          onHandleInputChange={(value) =>
            onHandleInputChange("textarea", value)
          }
        />
      )}
      {element?.url && (
        <InputField
          label={"url"}
          value={element?.url}
          onHandleInputChange={(value) => onHandleInputChange("url", value)}
        />
      )}
      {element?.style?.width && (
        <SliderField
          label={"Width"}
          value={element?.style?.width}
          type="%"
          onHandleStyleChange={(value) => onHandleInputChange("width", value)}
        />
      )}
      {element?.style.textAlign && (
        <ToogleGroupField
          label={"Text Align"}
          value={element?.style.textAlign}
          options={TextAlignOptions}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("textAlign", value)
          }
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
      {element?.style?.color && (
        <ColorPickerField
          label="Text Color"
          value={element?.style?.color}
          onHandleStyleChange={(value) => onHandleStyleChange("color", value)}
        />
      )}
      {element?.style?.fontSize && (
        <InputStyleField
          label={"Font size"}
          value={element?.style?.fontSize}
          onHandleStyleChange={(value) =>
            onHandleInputChange("fontSize", value)
          }
        />
      )}
      {element?.style.textTransform && (
        <ToogleGroupField
          label={"Text Transform"}
          value={element?.style.textTransform}
          options={TextTransformOptions}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("textTransform", value)
          }
        />
      )}
      {element?.style?.padding && (
        <InputStyleField
          label={"Padding"}
          value={element?.style?.padding}
          onHandleStyleChange={(value) => onHandleInputChange("padding", value)}
        />
      )}
      {element?.style?.borderRadius && (
        <SliderField
          label={"Border Radius"}
          value={element?.style?.borderRadius}
          onHandleStyleChange={(value) =>
            onHandleInputChange("borderRadius", value)
          }
        />
      )}
      {element?.style?.fontWeight && (
        <DropdownField
          label={"Font Weight"}
          value={element?.style?.fontWeight}
          options={['normal','bold']}
          onHandleStyleChange={(value) =>
            onHandleInputChange("fontWeight", value)
          }
        />
      )}

      {/* {element?.style.textAlign && (
        <ToogleGroupField
          label={"Text Align"}
          value={element?.style.textAlign}
          options={TextAlignOptions}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("textAlign", value)
          }
        />
      )} */}
    </div>
  );
}

export default Settings;
