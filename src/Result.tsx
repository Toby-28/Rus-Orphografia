import React from 'react'

function Result() {
  return (
    <div className="result">
      <div className="header">
        <button className="home"></button>
      </div>
      <div className="flex">
        <p className="errors"></p>
        <p className="grade"></p>
        <button className="again"></button>
      </div>
      <div className="footer"></div>
    </div>
  )
}

export default Result
