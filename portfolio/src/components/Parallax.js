import React from 'react'

export default function Parallax(props) {
  return (
    <div className="parallax-container">
        <div className="parallax">
            <img src={props.link} alt={props.altText} className="responsive-img"></img>
        </div>
    </div>
  )
}
