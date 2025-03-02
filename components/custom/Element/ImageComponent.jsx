import React from 'react'

function ImageComponent({style, imageUrl, outerStyle}) {
  return (
    <div style={outerStyle
    }>
        <img style={style} src={imageUrl
        } alt='img'/>
    </div>
  )
}

export default ImageComponent