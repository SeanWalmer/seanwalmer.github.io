import React from 'react'

export default function Pottery() {
  return (
    <section className="container section scrollspy" id="pottery">
      <div className="row">
        <div className="card col s12 l4 offset-l1">
          <img src="img/mug1.jpg" alt="Simple mug with a curled handel" className="responsive-img materialboxed"></img>
          <p>Simple mug with a curled handel</p>
        </div>
        <div className="card col s12 l4 offset-l2">
          <img src="img/mug2.jpg" alt="Small tea cup with" className="responsive-img materialboxed"></img>
          <p>Small tea cup with</p>
        </div>
        <div className="card col s12 l4 offset-l1">
          <img src="img/plates1.jpg" alt="Stacked plates" className="responsive-img materialboxed"></img>
          <p>Stacked plates</p>
        </div>
        <div className="card col s12 l4 offset-l2">
          <img src="img/plates2.jpg" alt="Lunch and dinner plates" className="responsive-img materialboxed"></img>
          <p>Lunch and dinner plates</p>
        </div>
        <div className="card col s12 l4 offset-l1">
          <img src="img/test.jpg" alt="blue salsa bowl" className="responsive-img materialboxed"></img>
          <p>blue salsa bowl</p>
        </div>
        <div className="card col s12 l4 offset-l2">
          <img src="img/glazed.jpg" alt="Ready to be glaze fired works" className="responsive-img materialboxed"></img>
          <p>Ready to be glaze fired works</p>
        </div>
      </div>
    </section>
  )
}
