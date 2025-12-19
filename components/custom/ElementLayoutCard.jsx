import React from 'react'

function ElementLayoutCard({layout}) {
  return (
    <div className='flex flex-col items-center justify-center border border-dashed rounded-xl p-3 group hover:shadow-lg hover:border-purple-500 cursor-pointer transition-all hover:-translate-y-1'>
                    <layout.icon className='p-2 h-9 w-9 bg-gray group-hover:text-purple-600 group-hover:bg-purple-100 rounded-full transition-colors'/>
                    <h2 className='text-sm group-hover:text-purple-600 transition-colors font-medium'>{layout.label}</h2>
                </div>
  )
}

export default ElementLayoutCard