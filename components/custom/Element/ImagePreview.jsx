import React from 'react'

function ImagePreview({label,value,onHandleInputChange}) {
  return (
    <div>
        <label>{label}</label>
        <img src={value} alt='image' className='w-full h-[150px] '/>

    </div>
  )
}

export default ImagePreview