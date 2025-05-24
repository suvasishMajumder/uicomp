import React from 'react'
import './inputstyle.css'
import PropTypes from 'prop-types'

const Input = ({children,type,placeholder,style,className,...rest}) => {
  return (
   <>
   <input type = {type} placeholder={placeholder} className={className}
   style={style} {...rest} />
   </>
  )
}

Input.PropTypes = {

  // children:PropTypes.node.isRequired,
  type:PropTypes.string,
  placeholder:PropTypes.string,
  style:PropTypes.object,
  className:PropTypes.string,


}


Input.defaultProps = {

type:'',
placeholder:'Enter your data',
style:{},
className:''

}

export default Input;
