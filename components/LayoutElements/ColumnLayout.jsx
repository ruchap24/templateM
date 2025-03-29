"use client"
import { useState } from 'react';
import { useDragElementLayout, useEmailTemplate, useSelectedElement } from '@/app/provider';
import ButtonComponent from '@/components/custom/Element/ButtonComponent';
import TextComponent from '@/components/custom/Element/TextComponent';
import ImageComponent from '../custom/Element/ImageComponent';
import React from 'react'
import LogoComponent from '../custom/Element/LogoComponent';
import DividerComponent from '../custom/Element/DividerComponent';
import { SelectedElementContext } from '@/context/SelectedElementContext';

function ColumnLayout({layout}) {

    const [dragOver, setDragOver]= useState();
    const { emailTemplate, setEmailTemplate } = useEmailTemplate();
    const { dragElementLayout, setDragElementLayout } = useDragElementLayout();
    const { selectedElement, setSelectedElement } = useSelectedElement();

    const onDragOverHandler=(event, index)=>{
        event.preventDefault();
        setDragOver({
            index:index,
            columId:layout?.id
        })
    }

    const onDropHandle=()=>{
        const index=dragOver.index;
        setEmailTemplate(prevItems=>prevItems.map(
            col=>col.id===layout?.id?{
                ...col,
                [index]:dragElementLayout?.dragElement
            }:col)
        )
        setDragOver(null);
    }

    const GetElementComponent=(element)=>{
        if(element?.type=='Button'){
            return <ButtonComponent {...element}/>
        }
        else if(element?.type=='Text'){
            return <TextComponent {...element}/>
        }
        else if(element?.type=='Image'){
            return <ImageComponent {...element}/>
        }
        else if(element?.type=='Logo'){
            return <LogoComponent {...element}/>
        }
        else if(element?.type=='Divider'){
            return <DividerComponent {...element}/>
        }
        return element?.type
    }

  return (
    <div>
        <div style={{
            display:'grid',
            gridTemplateColumns:`repeat(${layout?.numOfCol},1fr)`,
            gap:'0px'
        }}>
            {Array.from({length:layout?.numOfCol}).map((_,index)=>(
                <div key={index} className={`p-0 flex items-center h-full w-full bg-white cursor-pointer
                ${!layout?.[index]?.type && 'bg-gray-100 border border-dashed'} justify-center'
                ${(index==dragOver?.index && dragOver?.columId) && 'bg-green-100'}
                ${(selectedElement?.layout?.id==layout?.id && selectedElement?.index==index)&&'border-blue-500 border-2'}`} onDragOver={(event)=>onDragOverHandler(event,index)} onDrop={onDropHandle}
                onClick={()=>setSelectedElement({layout:layout,index:index})}>
                    {GetElementComponent(layout?.[index])??'Drag Element Here'}
                </div>
        ))}
        </div>
    </div>
  )
}

export default ColumnLayout