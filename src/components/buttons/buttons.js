import React from "react";
import tardis from './tardis.png';
import styled from 'styled-components';


const ButtonsAndTitle = (props) => {

  const Button = styled.button`
    padding: 10px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: white;

    ${props => (props.type === 'arrows' 
    ? `background: steelblue;
      border: 1px solid black;
      margin: 0 10px;
      padding: 10px 10px;
      width: 60px;
      height: 60px;
      &:hover {
        background-color: red;
      }
      ` 
    : null)}
`;
  const H1 = styled.h1`
    width: 80%;
    @media (max-width: 800px){
        font-size: 1.5rem;
    }
    @media (max-width: 500px){
        font-size: 1rem;
    }
  `;

  return (
    <div className='buttonsAndTitle'>
      {
          <>
          <Button type='arrows' onClick={ () => {
              `${props.displayedDate.getFullYear()}-${props.displayedDate.getMonth()+1}-${props.displayedDate.getDate()}` !== `${props.today.getFullYear()}-${props.today.getMonth()+1}-${props.today.getDate()}`
              ? props.setDisplayedDate(new Date(props.displayedDate.setDate(props.displayedDate.getDate()+1)))
              : console.log('This button is not a time machine.');
          } }>
          {
            `${props.displayedDate.getFullYear()}-${props.displayedDate.getMonth()+1}-${props.displayedDate.getDate()}` !== `${props.today.getFullYear()}-${props.today.getMonth()+1}-${props.today.getDate()}`
              ? '<'
              : <img src={tardis} alt='tardis'/>
          }
          </Button>
          <H1>{props.title}</H1>
          <Button type={'arrows'} onClick={ () => {
              props.setDisplayedDate(new Date(props.displayedDate.setDate(props.displayedDate.getDate()-1)));
          } }  >{'>'}</Button>
          </>
      }
    </div>
  );
};

export default ButtonsAndTitle;

// today.setDate(today.getDate() -10);
// console.log(today);