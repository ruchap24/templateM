"use client";
import { useState } from "react";
import {
  useDragElementLayout,
  useEmailTemplate,
  useSelectedElement,
} from "@/app/provider";
import ButtonComponent from "@/components/custom/Element/ButtonComponent";
import TextComponent from "@/components/custom/Element/TextComponent";
import ImageComponent from "../custom/Element/ImageComponent";
import React from "react";
import LogoComponent from "../custom/Element/LogoComponent";
import DividerComponent from "../custom/Element/DividerComponent";
import { SelectedElementContext } from "@/context/SelectedElementContext";
import { Trash } from "lucide-react";

function ColumnLayout({ layout }) {
  const [dragOver, setDragOver] = useState();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const { dragElementLayout, setDragElementLayout } = useDragElementLayout();
  const { selectedElement, setSelectedElement } = useSelectedElement();

  const onDragOverHandler = (event, index) => {
    event.preventDefault();
    setDragOver({
      index: index,
      columId: layout?.id,
    });
  };

  const onDropHandle = () => {
    const index = dragOver.index;
    setEmailTemplate((prevItems) =>
      prevItems.map((col) =>
        col.id === layout?.id
          ? {
              ...col,
              [index]: dragElementLayout?.dragElement,
            }
          : col
      )
    );
    setDragOver(null);
  };

  const GetElementComponent = (element) => {
    if (element?.type == "Button") {
      return <ButtonComponent {...element} />;
    } else if (element?.type == "Text") {
      return <TextComponent {...element} />;
    } else if (element?.type == "Image") {
      return <ImageComponent {...element} />;
    } else if (element?.type == "Logo") {
      return <LogoComponent {...element} />;
    } else if (element?.type == "Divider") {
      return <DividerComponent {...element} />;
    }
    return element?.type;
  };

  const deleteLayout=(layoutId)=>{
    const updateEmailTemplate=emailTemplate?.filter(item=>item.id!=layoutId);
    setEmailTemplate(updateEmailTemplate);
    setSelectedElement(null);
  }

  const moveItemUp=(layoutId)=>{
    const index=emailTemplate.findIndex((item)=> item.id===layout);

    if(index>0){
        setEmailTemplate((prevItems)=>{
            const updatedItems=[...prevItems];
            [updatedItems[index], updatedItems[index-1]]=[
                updatedItems[index-1],
                updatedItems[index],
            ];
            return updatedItems;
        });
    }
  }

  const moveItemDown=(layoutId)=>{
    const index=emailTemplate.findIndex((item)=> item.id===layout);

    if(index>0){
        setEmailTemplate((prevItems)=>{
            const updatedItems=[...prevItems];
            [updatedItems[index], updatedItems[index+1]]=[
                updatedItems[index+1],
                updatedItems[index],
            ];
            return updatedItems;
        });
    }
  }

  return (
    <div className="relative">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${layout?.numOfCol},1fr)`,
          gap: "0px",
        }}
        className={`${selectedElement?.layout?.id == layout?.id && "border border-dashed border-purple-500"}`}
      >
        {Array.from({ length: layout?.numOfCol }).map((_, index) => (
          <div
            key={index}
            className={`p-0 flex items-center h-full w-full bg-white cursor-pointer
                ${!layout?.[index]?.type && "bg-gray-100 border border-dashed"} justify-center'
                ${index == dragOver?.index && dragOver?.columId && "bg-green-100"}
                ${selectedElement?.layout?.id == layout?.id && selectedElement?.index == index && "border-purple-500 border-4"}`}
            onDragOver={(event) => onDragOverHandler(event, index)}
            onDrop={onDropHandle}
            onClick={() => setSelectedElement({ layout: layout, index: index })}
          >
            {GetElementComponent(layout?.[index]) ?? "Drag Element Here"}
          </div>
        ))}
        {selectedElement?.layout?.id == layout?.id && (
          <div className="absolute -right-8 sm:-right-10 top-0 cursor-pointer bg-red-500 hover:bg-red-600 text-white p-2 rounded-full hover:scale-105 transition-all hover:shadow-md z-10" onClick={(e) => {
            e.stopPropagation();
            deleteLayout(layout?.id);
          }}>
            <Trash className="h-4 w-4" />
          </div>
        )}
      </div>
    </div>
  );
}

export default ColumnLayout;
