import React from 'react'
import PotteryCard from './PotteryCard'
import PotteryList from './pottery.json'

export default function Pottery() {
  return (
    <section className="container section scrollspy" id="pottery">
      <div className="row">
        {PotteryList.map((pot, index) => {
          if ((index + 1) % 2 === 0) {
            return <PotteryCard
              classes="card col s12 l4 offset-l1"
              image={pot.image}
              discrip={pot.discrip}
            />
          } else {
            return <PotteryCard
            classes="card col s12 l4 offset-l2"
            image={pot.image}
            discrip={pot.discrip}
          />
          }
        })}
      </div>
    </section>
  )
}
