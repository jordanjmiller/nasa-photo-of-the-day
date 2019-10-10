import React from "react";


const ButtonsAndTitle = (props) => {
    // console.log("TEST: " + props.displayedDate)
  return (
    <div className='buttonsAndTitle'>
      {
          <>
          <button className='leftButton' onClick={ () => {
              `${props.displayedDate.getFullYear()}-${props.displayedDate.getMonth()+1}-${props.displayedDate.getDate()}` !== `${props.today.getFullYear()}-${props.today.getMonth()+1}-${props.today.getDate()}`
              ? props.setDisplayedDate(new Date(props.displayedDate.setDate(props.displayedDate.getDate()+1)))
              : console.log('This button is not a time machine.');
          } }>{'<'}</button>
          <h1>{props.title}</h1>
          <button className='rightButton' onClick={ () => {
              props.setDisplayedDate(new Date(props.displayedDate.setDate(props.displayedDate.getDate()-1)));
          } }  >{'>'}</button>
          </>
      }
    </div>
  );
};

export default ButtonsAndTitle;

// today.setDate(today.getDate() -10);
// console.log(today);