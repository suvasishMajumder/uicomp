import React from "react";
import "./cardstyle.css";
import PropTypes from "prop-types";
import '../globalstyle.css'

const CardTitle = ({ children, variant, className, style, ...rest }) => {
  return (
    <h1 className={`${className} ${variant} `} style={style} {...rest}>
      {children}
    </h1>
  );
};

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

CardTitle.defaultProps = {
  variant: "",
  className: "",
  style: {},
};

export default CardTitle;
