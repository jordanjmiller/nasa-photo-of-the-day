import React from "react";


const Image = (props) => {

  return (
    <div className='imageDiv'>
      {
        props.media_type === 'image'
        ?   props.useHD
            ? <img src={props.hdurl} />
            : <img src={props.url} />
        : <iframe
            style={{
              // position: "absolute",
              // top: 0,
              // left: 0,
              width: "100%",
              height: "500px"
            }}
            src={props.url}
            frameBorder="0"
          />
        // :   <p>It's a video oh no</p>
      }
    </div>
  );
};

export default Image;