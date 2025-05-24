import React from 'react'
import PropTypes from 'prop-types';
import CheckBox from '../CheckBox/CheckBox';
import './label.css'
import '../globalstyle.css'

const Label = ({children,style={},className,size,htmlFor,...rest}) => {
  return (
  <div>
    <div className="flex items-center space-x-3">
    <label htmlFor={`${htmlFor}`} style={style} className={`${className} ${size}`} {...rest}>
      {children}
    </label>
 
    </div>
  </div>
  )
}


Label.propTypes = {

style:PropTypes.object,
className:PropTypes.string,
htmlFor:PropTypes.string,
children:PropTypes.node.isRequired,
size:PropTypes.string,


}


Label.defualtProps = {

  style:{},
  className:'',
  htmlFor:'',
  size:'',



}

export default Label;
