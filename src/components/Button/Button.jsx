import React from 'react'
import './btnstyle.css'

const Button = ({variant={}, size={}, children='Click Me',style={},className={},...rest}) => {
  return (
    <>
    <button role='button' className={`${className} ${size} ${variant} `} style={style} {...rest}>{children}</button>
    </>
  )
}

export default Button;
