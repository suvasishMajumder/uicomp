import PropTypes from 'prop-types';
import React from 'react'
import '../globalstyle.css'
const CardDescription = ({children,style,className,...rest}) => {
  return (
   <p  className={`${className}`} style={style} {...rest}>{children}</p>
  )
}


CardDescription.propTypes ={

  children:PropTypes.node.isRequired,

  style:PropTypes.object,

  className:PropTypes.string,

} 


CardDescription.defaultProps = {

style:{},

className:'',


}

export default CardDescription;
