import React from 'react'
import { FormLabel, Input as ChakraInput } from '@chakra-ui/react'
//@ts-ignore
const Input = ({id,name,label,placeholder,type,onChange,helper,
}) => {
  return (
    <div>
      <FormLabel 
        htmlFor={id} 
        className="text-gray-700 dark:text-white">
          {label}
      </FormLabel>
      <ChakraInput
        id={id}
        name={name}
        onChange={onChange}
        variant="outline" 
        className="mt-0 text-gray-700 border-black dark:text-white dark:border-[#605e8a]" 
        focusBorderColor="#605e8a" 
        borderColor="#605e8a"
        placeholder={placeholder}
        type={type}
      />
      <div className="text-sm mt-1 text-[#666666]">{helper}</div>
    </div>
  )
}

export default Input

Input.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text',
  onchange: () => {},
  helper: ''
}