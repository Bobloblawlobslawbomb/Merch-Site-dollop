import React from "react";

function Footer(props) {

  const myFunkyFooterStyles = {
    fontSize: '5'
  }

  return (
    <div style={myFunkyFooterStyles}>
      <p><small>Band Stuff</small></p>
      <p><small>FAQs</small></p>
      <p><small>Shipping and Returns</small></p>
      <p><small>Sizing</small></p>
      <p><small>Contact Us</small></p>
      <p><small>Need a Store?</small></p>
    </div>
  )
}

export default Footer;