import React from "react";
import PropTypes from "prop-types";

import "./Container.styles.scss";

const Container = ({ children }) => {
  return <div className='container'>{children}</div>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
