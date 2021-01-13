import React from "react"

export default function Heading({ title }) {
  return (
    <div className="row">
      <div className="col text-center  mb-4">
        <h1 className="text-white">{title}</h1>
      </div>
    </div>
  )
}