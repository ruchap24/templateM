import React from 'react'

function inputField({label, value}) {
  return (
    <div>
        <label>{label}</label>
        <input type="text" value={value} onChange={(event)=>onHandleInputChange(event.target.value)}/>
    </div>
  )
}

export default inputField