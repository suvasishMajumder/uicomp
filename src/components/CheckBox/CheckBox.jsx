import React from 'react'
import '../globalstyle.css'
import PropTypes from 'prop-types'

const CheckBox = ({children,style, placeholder, className, ...rest}) => {
  return (
    <>
    <input type="checkbox"
     style={style} className={`${className}`}
     placeholder={`${placeholder}`} {...rest} />
    </>
  )
}

CheckBox.propTypes ={

  children:PropTypes.node.isRequired,
style:PropTypes.object,
placeholder:PropTypes.string,
className:PropTypes.string,

}


CheckBox.defaultProps = {

  style:{},
  placeholder:'',
  className:'',


}


export default CheckBox;
