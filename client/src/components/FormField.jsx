import React from 'react'

const FormField = ({type, labelName, name,handleSurpriseMe, value, isSurpriseMe, handleChange, placeholder, }) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label 
        htmlFor={name}
        className='text-gray-900 block text-sm font-medium'
        >
          {labelName}
        </label>
        {isSurpriseMe && (<button 
        type='button'
        onClick={handleSurpriseMe}
        className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black'
        >
          Surprise me
        </button>)}
      </div>
      <input 
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm
      rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] block w-full outline-none p-3'
       />
    </div>
  )
}

export default FormField