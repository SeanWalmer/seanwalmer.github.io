import React from 'react'

export default function PotteryCard(props) {
  return (
    <div className={props.classes}>
      <img src={props.image} alt={props.discrip} className="responsive-img materialboxed"></img>
      <p>{props.discrip}</p>
    </div>
  )
}
