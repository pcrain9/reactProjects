import React from 'react';

const BackdropModal = (props) => {
    return (
      <div
        style={{
          height: "1000px",
          width: "100%",
          margin: "auto",
          position: "absolute",
          zIndex: 5,
          backgroundColor: "rgba(0, 0, 0, .5)",
          display: "flex",
        }}
        onClick={props.onModalWasClicked}
      ></div>
    );
  };

  export default BackdropModal;