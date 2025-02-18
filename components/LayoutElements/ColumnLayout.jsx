import React from 'react'

function ColumnLayout({layout}) {


    const onDragOverHandler=(event, index)=>{
        event.preventDefault();
    }
    
  return (
    <div>
        <div style={{
            display:'grid',
            gridTemplateColumns:`repeat(${layout?.numOfCol},1fr)`,
            gap:'0px'
        }}>
            {Array.from({length:layout?.numOfCol}).map((_,index)=>(
                <div key={index} className='p-2 flex items-center bg-gray-100 border border-dashed justify-center' onDragOver={(event)=>onDragOverHandler(event,index)}>
                    {index+1}
                </div>
        ))}
        </div>
    </div>
  )
}

export default ColumnLayout