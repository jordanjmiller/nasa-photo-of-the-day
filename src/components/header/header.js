import React from "react";
import logo from './Nasa-logo.png';

const Header = (props) => {

  return (
    <header className="header">
      {
          <>
          <img src={logo} alt='Nasa Logo'/>
          <h1>Photo of the Day<br></br>{`${props.displayedDate.getFullYear()}-${props.displayedDate.getMonth()+1}-${props.displayedDate.getDate()}`}</h1>
          </>
      }
    </header>
  );
};

export default Header;
