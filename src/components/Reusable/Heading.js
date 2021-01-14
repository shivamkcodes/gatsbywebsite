import React from "react"

export default function Heading({ title, color = "text-white" }) {
  return (
    <div className="row">
      <div className="col text-center  mb-4">
        <h1 className={color}>{title}</h1>
      </div>
    </div>
  )
}
