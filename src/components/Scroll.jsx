import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "500px",
        width: "100%",
        paddingRight: "15px",
        boxSizing: "content-box",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
