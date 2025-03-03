import React from 'react'

function InputField({label, value, onHandleInputChange}) {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(event) => onHandleInputChange(event.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}

export default InputField