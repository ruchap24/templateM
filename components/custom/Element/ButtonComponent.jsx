import React from 'react'

function ButtonComponent({style, content,url,outerStyle}) {
  return (
    <div>
        <a href={url} style={outerStyle}>
            <button style={style} className='p-2 bg-blue-500 text-white rounded-md'>{content}</button>
        </a>
    </div>
  )
}

export default ButtonComponent