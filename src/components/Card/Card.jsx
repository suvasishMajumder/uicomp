import React from "react";
import "./cardstyle.css";
import Button from "../Button/Button";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import PropTypes from "prop-types";


const Card = ({ children, size,
     style, variant, className , ...rest }) => {
  return (
    <>
    <div className={`${className} ${variant} ${size}`} style={{style}} {...rest}>
        {children}
    </div>
    </>
  );
};



Card.propTypes ={

children:PropTypes.node.isRequired,

className:PropTypes.string,

size:PropTypes.string,

variant:PropTypes.string,

style:PropTypes.object,


}


Card.defaultProps ={

  size:'',
  style:{},
  variant:'',
  className:'',

}

export default Card;
