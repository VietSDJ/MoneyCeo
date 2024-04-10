import React from "react"
import styles from "../assets/css/modal.module.css"
import undraw from "../assets/images/resources/undraw.png"

const ModalUpdateInFuture = (props) => {
  if (!props.isOpen) return null

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <a className={styles.close} onClick={props.onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <circle cx="25" cy="25" r="25" fill="transparent" />
            <path
              d="M13.669 39.7384L39.2504 13.7136L36.6923 11.1111L11.1108 37.136L13.669 39.7384Z"
              fill="#0D263B"
            />
            <path
              d="M11.8602 13.9752L37.4416 40L39.9997 37.3975L14.4183 11.3727L11.8602 13.9752Z"
              fill="#0D263B"
            />
          </svg>
        </a>
        <div className={styles.content}>
          <img src={undraw} style={{ marginBottom: "64px" }} alt="" />
          <p>The app will be published in the very near future</p>
        </div>
      </div>
    </div>
  )
}
export default ModalUpdateInFuture
