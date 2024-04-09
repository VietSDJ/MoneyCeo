import React from "react"

const BlockTitle = (props) => {
  return (
    <div className={`block-title text-${props.textAlign} ${props.className}`}>
      <p className="para-text">{props.paraText}</p>
      <h3 className="fit-width">{props.titleText}</h3>
    </div>
  )
}

export default BlockTitle
