"use-client"
import React from "react"
import ReactDOM from "react-dom"
const ModalUpdateInFuture = (props) => {
  const handleCloseClick = (e) => {
    e.preventDefault()
    props.onClose()
  }

  const modalContent = (
    <div className="modal-overlay">
      {/* Wrap the whole Modal inside the newly created StyledModalWrapper
          and use the ref */}
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-header">
            <a href="#" onClick={handleCloseClick}>
              x
            </a>
          </div>
          {props?.title && <h1>{props?.title}</h1>}
          <div className="modal-body">{props?.children}</div>
        </div>
      </div>
    </div>
  )

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  )
}

export default ModalUpdateInFuture
