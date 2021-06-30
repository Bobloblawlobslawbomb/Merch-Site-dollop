import React from "react";
import PropTypes from "prop-types";

function Merch(props) {

  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h3>{props.price}</h3>
      <h3>{props.quantity}</h3>
      <p>{props.picture}</p>
    </React.Fragment>
  )
}

Merch.propTypes = {
  // name: PropTypes.string.isRequired,
  // price: PropTypes.string.isRequired,
  // quantity: PropTypes.number.isRequired,
  name: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number,
  picture: PropTypes.string
};

export default Merch;