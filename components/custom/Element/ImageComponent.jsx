import React from 'react'

function ImageComponent({style, content,outerStyle}) {
  return (
    <div>
        <img style={style} src={content
        } alt='img'/>
    </div>
  )
}

export default ImageComponent