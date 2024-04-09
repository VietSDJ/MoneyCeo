import React from "react";

const BlockTitle = (props) => {
  return (
    <div className={`block-title text-${props.textAlign} ${props.className}`}>
      <p className="para-text text-custom-left">{props.paraText}</p>
      <h3 className="fit-width text-custom-left">{props.titleText}</h3>
    </div>
  );
};

export default BlockTitle;
