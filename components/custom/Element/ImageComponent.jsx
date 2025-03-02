import React from 'react'

function ImageComponent({style, imageUrl, outStyle}) {
  return (
    <div style={outStyle
    }>
        <img style={style} src={imageUrl
        } alt='img'/>
    </div>
  )
}

export default ImageComponent