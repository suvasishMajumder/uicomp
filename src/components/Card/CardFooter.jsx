import React from "react";
import "./cardstyle.css";
import PropTypes from "prop-types";

const CardFooter = ({ children, className , style , ...rest }) => {
  return (
    <div style={style} className={`card-footer ${className}`} {...rest}>
      {children}
    </div>
  );
};

CardFooter.PropTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};


CardFooter.deafaultProps = {

style:{},
className:'',


}

export default CardFooter;
