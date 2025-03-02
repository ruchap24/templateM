import React from 'react'

function LogoComponent(style, imageUrl, outStyle) {
  return (
    <div style={outStyle}>
        <img style={style} src={imageUrl} alt='img'/>
    </div>
  )
}

export default LogoComponent