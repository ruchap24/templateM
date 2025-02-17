import Layout from '@/Data/Layout'
import React from 'react'

function ElementsSideBar() {
  return (
    <div className='p-5'>
        <h2 className='text-lg font-bold'>Layouts</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {Layout.map((layout, index) => (
                <div key={index} className='flex flex-col items-center justify-center border border-dashed rounded-xl p-3 group hover:shadow-md hover:border-primary cursor-pointer'>
                    <layout.icon className=''/>
                    <h2 className='text-sm'>{layout.label}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ElementsSideBar