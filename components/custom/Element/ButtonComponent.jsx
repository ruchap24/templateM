import React from 'react'

function ButtonComponent({style, content,url}) {
  return (
    <div>
        <a href={url}>
            <button style={style} className='p-2 bg-blue-500 text-white rounded-md'>{content}</button>
        </a>
    </div>
  )
}

export default ButtonComponent