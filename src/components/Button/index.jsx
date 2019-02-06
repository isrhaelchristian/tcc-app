import React from "react";
import "./styles.css";

const index = props => {
  return (
    <div className="button-sign-up" onClick={props.toggle}>
      <p className="btn-text">{props.text}</p>
    </div>
  );
};

export default index;
