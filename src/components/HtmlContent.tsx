import { Link } from "gatsby"
import React, { useState } from "react"
import Modal from "react-modal"
import NoteIcon from "../icons/NoteIcon"
import TimesIcon from "../icons/TimesIcon"
import "../css/HtmlContent.css"

type Props = {
  title?: string
  html?: string
}

const HtmlContent: React.FC<Props> = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "80vw",
      maxHeight: "80vh",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "4px",
      outline: "none",
      border: "none",
      padding: "0px",
    },
  }

  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }

  Modal.setAppElement("#___gatsby")
  return (
    <div>
      <button
        className="
          text-neutral-700 bg-neutral-200
          rounded-full border-transparent bg-tranparent
          hover:text-neutral-800 hover:bg-neutral-400"
        onClick={openModal}
      >
        <NoteIcon className="w-5 h-5 m-2 fill-current" />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col items-start">
          <div className="flex items-center w-full bg-primary-800 px-4 py-1">
            <div className="text-white font-extrabold text-lg py-1">
              {props.title}
            </div>
            <div className="ml-auto">
              <Link to="#" onClick={closeModal}>
                <TimesIcon className="fill-current text-white w-5 h-5 cursor-pointer" />
              </Link>
            </div>
          </div>
          <div
            id="html-content"
            className="p-5 lg:px-16"
            dangerouslySetInnerHTML={{ __html: props.html || "" }}
          ></div>
          <div className="ml-auto mr-0">
            <button
              className="m-6 bg-transparent hover:bg-neutral-500 text-primary-700 font-semibold hover:text-white py-2 px-4 border border-primary-700 hover:border-transparent rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default HtmlContent
