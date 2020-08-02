import React from 'react'

export default function ProjectRight(props) {
  return (
    <div className="row">
      <hr></hr>
      <div className="col s12 l4 offset-l1 push-l7">
        <img src={props.image} alt="" className="responsive-img materialboxed"></img>
      </div>
      <div className="col s12 l6 offset-l1 pull-l5 right-align">
        <h2 className="blue-text text-darken-4">{props.title}</h2>
        <p>{props.discrip}</p>
        <a className="waves-effect waves-light btn" href={props.app}
          target="_blank" rel="noopener noreferrer">App</a>
        <a className="waves-effect waves-light btn" href={props.repo}
          target="_blank" rel="noopener noreferrer">Repo</a>
      </div>
    </div>
  )
}
