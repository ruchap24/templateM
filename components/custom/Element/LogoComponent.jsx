import React from 'react'

function LogoComponent({style, imageUrl, outerStyle}) {
  return (
    <div style={outerStyle}>
        <img style={style} src={imageUrl} alt='img'/>
    </div>
  )
}

export default LogoComponent