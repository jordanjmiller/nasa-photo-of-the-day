import React from "react";
import logo from './Nasa-logo.png';
import styled from 'styled-components';

const Header = (props) => {

  const Button = styled.button`
  padding: 10px 10px;
  margin: 5px;
  border: none;
  border-radius: 3px;
  color: black;

  ${props => (props.type === 'headerB' 
  ? `background: lightblue;
    border: 1px solid black;
    margin: 5px;
    padding: 10px 10px;
    width: 60px;
    height: 60px;
    &:hover {
      background-color: red;
      color: white;
    }
    ` : null)}
  ${props => (props.type === 'false' 
  ? `background: lightblue;
    border: 1px solid black;
    margin: 5px;
    padding: 10px 10px;
    width: 60px;
    height: 60px;
    &:hover {
      background-color: red;
      color: white;
    }
    ` : null)}
    ${props => (props.type === 'true' 
    ? `background: lightblue;
      border: 1px solid black;
      margin: 5px;
      padding: 10px 10px;
      width: 60px;
      height: 60px;
      background-color: red;
      color: white;
      &:hover {
        background-color: lightblue;
        color: black;
      }
    ` : null)}
`;
  return (
    <header className="header">
      {
          <>
          <div>
          <img src={logo} alt='Nasa Logo'/>
          <h1>Astronomy<br></br>Photo of the Day<br></br>{`${props.displayedDate.getFullYear()}-${props.displayedDate.getMonth()+1}-${props.displayedDate.getDate()}`}</h1>
          </div>
          <div className='hButtonDiv'>
          <Button type='headerB' onClick={ () => {
              props.setDisplayedDate(new Date());
          } }  >Back to today</Button>
          <Button type={`${props.useHD}`} onClick={ () => {
              console.log('aaa');
              props.setUseHD(!props.useHD);
              console.log(props.useHD);
          } }  >Toggle HD</Button>
          </div>
          </>
      }
    </header>
  );
};

export default Header;
