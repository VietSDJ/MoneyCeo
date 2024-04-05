import React from "react"
import QuotationLeft from "../assets/images/shapes/quotation-left.svg"
import QuotationRight from "../assets/images/shapes/quotation-right.svg"

const BlockMessage = (props) => {
  return (
    <div className={`block-message text-${props.textAlign} ${props.className}`}>
      <img src={QuotationLeft} className="quoctation-left" alt="" />
      <img src={QuotationRight} className="quoctation-right" alt="" />
      <h3 className="fit-width">{props.titleText}</h3>
    </div>
  )
}

export default BlockMessage
