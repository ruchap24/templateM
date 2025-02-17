import React from 'react'
import Canvas from '@/components/custom/Canvas'
import Settings from '@/components/custom/Settings'
import ElementsSideBar from '@/components/custom/ElementsSideBar'
import EditorHeader from '@/components/custom/EditorHeader'


function Editor() {
  return (
    <div>
        <EditorHeader/>
        <div className='grid grid-cols-5'>
            <ElementsSideBar/>
            <div className='col-span-3 bg-gray-100'>
                <Canvas/>
            </div>
            <Settings/>
        </div>
    </div>
  )
}

export default Editor