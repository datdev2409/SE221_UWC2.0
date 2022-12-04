import React from "react"
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome"

function BoardColumn({ title, children }) {
  return (
    <div className="boardCol">
      <div className="boardColHeader">
        <h3 className="boardColTitle">{title}</h3>
        <div className="boardColIcon">
          <FAIcon icon={faEllipsis} />
        </div>
      </div>

      <div className="boardColBody">
        {children}
      </div>
    </div>
  )
}

export default BoardColumn
