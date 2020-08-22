import React from "react";


const Description = (props) => {

  return (
    <div className="desc">
      {
          <p>{props.explanation}</p>
      }
    </div>
  );
};

export default Description;