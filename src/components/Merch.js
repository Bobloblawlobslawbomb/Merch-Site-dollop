import React from "react";
import PropTypes from "prop-types";

function Merch(props) {
  return (
    <React.Fragment>
      <h3>{props.names}</h3>
      <h3>{props.price}</h3>
      <h3>{props.quantity}</h3>
      <p>{props.picture}</p>
    </React.Fragment>
  )
}

Merch.propTypes = {
  names: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantitiy: PropTypes.number.isRequired,
  picture: PropTypes.node //or 'any'
};

export default Merch;