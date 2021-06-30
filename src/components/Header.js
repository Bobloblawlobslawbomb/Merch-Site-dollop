import React from "react";
import dummyImage from "./../img/zombie.jpg";

function Header(props){
  const myFunkyStles = {
    height: '40vh',
    width: 'auto',
    maxWidth: '100%',
    backgroundSize: 'cover',
    textAlign: 'center'
  }

  return (
      <div style={myFunkyStles}>
        <h1>Filthy and the Butchers</h1>
        <img src={dummyImage} alt="a medical dummy" />
      </div>
  );
}

export default Header;