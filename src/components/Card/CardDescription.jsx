import PropTypes from 'prop-types';
import React from 'react'

const CardDescription = ({children,style,className,...rest}) => {
  return (
   <p  className={`${className}`} style={style} {...rest}>{children}</p>
  )
}


CardDescription.PropTypes ={

  children:PropTypes.node.isRequired,

  style:PropTypes.object,

  className:PropTypes.string,

} 


CardDescription.defaultProps = {

style:{},

className:'',


}

export default CardDescription;
