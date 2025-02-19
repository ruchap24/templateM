import React from 'react'

function ImageComponent({style, content}) {
  return (
    <div>
        <img style={style} src={content
        }/>
    </div>
  )
}

export default ImageComponent