import React from 'react'

function InputField({label, value, onHandleInputChange}) {
  return (
    <div>
        <label>{label}</label>
        <input type="text" value={value} onChange={(event)=>onHandleInputChange(event.target.value)}/>
    </div>
  )
}

export default InputField