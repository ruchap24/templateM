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
import { AlignLeft, AlignCenter, AlignRight, AArrowUp, CaseLower, CaseUpper } from "lucide-react";

const TextAlignOptions = [
  { value: "left", icon: AlignLeft },
  { value: "center", icon: AlignCenter },
  { value: "right", icon: AlignRight },
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

  // Helper function to get style value safely
  const getStyleValue = (style, key, defaultValue = '') => {
    if (!style || !style[key]) return defaultValue;
    const val = style[key];
    if (Array.isArray(val)) return val[0] || defaultValue;
    if (typeof val === 'object' && val.value) return val.value;
    return val;
  };

  return (
    <div className="p-5 flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-80px)] bg-white border-l border-slate-200">
      <h2 className="font-bold text-xl text-slate-900 mb-2 sticky top-0 bg-white pb-2 border-b border-slate-200">Settings</h2>
      
      {/* Image Preview Section */}
      {(element?.imageUrl !== undefined || element?.type === 'Image' || element?.type === 'LogoHeader') && (
        <ImagePreview
          label="Image Preview"
          value={element.imageUrl || ''}
          onHandleInputChange={(value) =>
            onHandleInputChange("imageUrl", value)
          }
        />
      )}

      {/* URL Field */}
      <InputField
        label="URL"
        value={element?.url || '#'}
        onHandleInputChange={(value) => onHandleInputChange("url", value)}
      />

      {/* Width Control */}
      <SliderField
        label="Width"
        value={getStyleValue(element?.style, 'width', '100%')}
        type="%"
        max={100}
        onHandleStyleChange={(value) =>
          onHandleStyleChange("width", value)
        }
      />

      {/* Height Control */}
      <div className="flex flex-col gap-2 mt-4">
        <label className="text-sm font-medium text-gray-700">Height</label>
        <div className="flex gap-2 items-end">
          <div className="flex-1">
            {getStyleValue(element?.style, 'height', 'auto') === 'auto' ? (
              <DropdownField
                label=""
                value="auto"
                options={['auto', 'manual']}
                onHandleStyleChange={(value) =>
                  onHandleStyleChange("height", value === 'auto' ? 'auto' : '200px')
                }
              />
            ) : (
              <InputStyleField
                label=""
                value={getStyleValue(element?.style, 'height', '200px')}
                type="px"
                onHandleStyleChange={(value) =>
                  onHandleStyleChange("height", value)
                }
              />
            )}
          </div>
          {getStyleValue(element?.style, 'height', 'auto') !== 'auto' && (
            <DropdownField
              label=""
              value="manual"
              options={['auto', 'manual']}
              onHandleStyleChange={(value) =>
                onHandleStyleChange("height", value === 'auto' ? 'auto' : getStyleValue(element?.style, 'height', '200px'))
              }
            />
          )}
        </div>
      </div>

      {/* Background Color Picker */}
      <ColorPickerField
        label="Background Color"
        value={getStyleValue(element?.style, 'backgroundColor', '#ffffff')}
        onHandleStyleChange={(value) =>
          onHandleStyleChange("backgroundColor", value)
        }
      />

      {/* Content Field (for buttons, etc.) */}
      {element?.content !== undefined && (
        <InputField
          label="Content"
          value={element.content || ''}
          onHandleInputChange={(value) =>
            onHandleInputChange("content", value)
          }
        />
      )}

      {/* Text Area Field */}
      {element?.textarea !== undefined && (
        <TextAreaField
          label="Text Area"
          value={element.textarea || ''}
          onHandleInputChange={(value) =>
            onHandleInputChange("textarea", value)
          }
        />
      )}

      {/* Text Align */}
      {element?.style?.textAlign !== undefined && (
        <ToogleGroupField
          label="Text Align"
          value={getStyleValue(element?.style, 'textAlign', 'left')}
          options={TextAlignOptions}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("textAlign", value)
          }
        />
      )}

      {/* Text Color */}
      {element?.style?.color !== undefined && (
        <ColorPickerField
          label="Text Color"
          value={getStyleValue(element?.style, 'color', '#000000')}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("color", value)
          }
        />
      )}

      {/* Font Size */}
      {element?.style?.fontSize !== undefined && (
        <InputStyleField
          label="Font Size"
          value={getStyleValue(element?.style, 'fontSize', '16px')}
          type="px"
          onHandleStyleChange={(value) =>
            onHandleStyleChange("fontSize", value)
          }
        />
      )}

      {/* Text Transform */}
      {element?.style?.textTransform !== undefined && (
        <ToogleGroupField
          label="Text Transform"
          value={getStyleValue(element?.style, 'textTransform', 'none')}
          options={TextTransformOptions}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("textTransform", value)
          }
        />
      )}
      {/* Padding Control */}
      <InputStyleField
        label="Padding"
        value={getStyleValue(element?.style, 'padding', '10px')}
        type="px"
        onHandleStyleChange={(value) =>
          onHandleStyleChange("padding", value)
        }
      />

      {/* Margin Control */}
      <InputStyleField
        label="Margin"
        value={getStyleValue(element?.style, 'margin', '0px')}
        type="px"
        onHandleStyleChange={(value) =>
          onHandleStyleChange("margin", value)
        }
      />

      {/* Border Radius */}
      <SliderField
        label="Border Radius"
        value={getStyleValue(element?.style, 'borderRadius', '5px')}
        type="px"
        max={50}
        onHandleStyleChange={(value) =>
          onHandleStyleChange("borderRadius", value)
        }
      />
      {/* Font Weight */}
      {element?.style?.fontWeight !== undefined && (
        <DropdownField
          label="Font Weight"
          value={getStyleValue(element?.style, 'fontWeight', 'normal')}
          options={["normal", "bold", "300", "400", "500", "600", "700"]}
          onHandleStyleChange={(value) =>
            onHandleStyleChange("fontWeight", value)
          }
        />
      )}
      {/* Outer Style Section */}
      <div className="mt-4 pt-4 border-t border-slate-200">
        <h2 className="font-bold text-lg mb-4 text-slate-900">Outer Style</h2>
        
        {/* Outer Background Color */}
        <ColorPickerField
          label="Outer Background Color"
          value={getStyleValue(element?.outerStyle, 'backgroundColor', '#ffffff')}
          onHandleStyleChange={(value) =>
            onHandleOuterStyleChange("backgroundColor", value)
          }
        />

        {/* Alignment Controls */}
        <ToogleGroupField
          label="Alignment"
          value={getStyleValue(element?.outerStyle, 'justifyContent', 'center')}
          options={TextAlignOptions}
          onHandleStyleChange={(value) =>
            onHandleOuterStyleChange("justifyContent", value)
          }
        />
      </div>
    </div>
  );
}

export default Settings;