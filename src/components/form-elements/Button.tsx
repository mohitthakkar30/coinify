import React from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'

const Button = ({
  //@ts-ignore
  label,
  //@ts-ignore
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full text-[#666666] bg-green-300 hover:bg-green-200 focus:ring-1 focus:outline-none focus:ring-[#cfcfcf] font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-none dark:bg-green-700 dark:hover:bg-green-600 dark:text-gray-200"
    >
      {label}
    </button>
  )
}

export default Button

Button.defaultProps = {
  label: '',
  onClick: () => {}
}