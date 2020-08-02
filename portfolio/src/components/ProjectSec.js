import React from 'react'

export default function ProjectSec(props) {
  return (
    <section className="container section scrollspy" id="program">
      <h1 className="blue-text text-darken-3 underline"><u>Projects</u></h1>
      {props.children}
    </section>
  )
}

