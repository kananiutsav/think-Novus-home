import { TButton } from '@/interface'
import React from 'react'

const Button = (props: TButton) => {
  return (
    <button
      className={`${
        !props.transparent &&
        'bg-gradient-to-r from-purple-500 via-purple-700 to-blue-500 w-[188px] h-[47px] border-spacing-11 rounded-[53px] cursor-pointer'
      } ${props.className}`}
      type={props.type || 'button'}
    
    >
      {props.label}
      

      
    </button>
  )
}

export default Button