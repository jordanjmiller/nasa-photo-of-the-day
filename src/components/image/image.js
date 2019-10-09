import React from "react";


const Image = (props) => {

  return (
    <div className='imageDiv'>
      {
        props.media_type === 'image'
        ?   props.useHD
            ? <img src={props.hdurl} />
            : <img src={props.url} />
        :   <p>It's a video oh no</p>
      }
    </div>
  );
};

export default Image;