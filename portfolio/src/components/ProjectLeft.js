import React from 'react'

export default function ProjectLeft(props) {
  return (
    <div className="row">
      <hr></hr>
      <div className="col s12 l4">
        <img src={props.image} alt="" className="responsive-img materialboxed"></img>
      </div>
      <div className="col s12 l6 offset-l1">
        <h2 className="indigo-text text-darken-4">{props.title}</h2>
        <p>{props.discrip}</p>
        <a className="waves-effect waves-light btn" href={props.app}
          target="_blank" rel="noopener noreferrer">App</a>
        <a className="waves-effect waves-light btn" href={props.repo}
          target="_blank" rel="noopener noreferrer">Repo</a>
      </div>
    </div>
  )
}
