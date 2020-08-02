import React from 'react'

export default function About() {
  return (
    <section className="section container scrollspy" id="about">
    <div className="row">
      <div className="col s12 l4">
        <h2 className="indigo-text text-darken-4">About Me</h2>
        <p>Professionally I am a Cloud Technical Expert for Microsoft who specializes in deployment and training on
          Microsoft 365 cloud products for Education and SMB customers. I have worked for Microsoft for 5 years and am
          actively working towards the next stage in my career.</p>
        <p>Please select a category to the right to learn a little more about my passions.</p>
      </div>
      <div className="col s12 l6 offset-l2">
        {/* <!-- tabs --> */}
        <ul className="tabs">
          <li className="tab col s6"><a href="#prog" className="active grey lighten-2 indigo-text text-darken-4">Programing</a>
          </li>
          <li className="tab col s6"><a href="#pot" className="grey lighten-2 indigo-text text-darken-4">Pottery</a></li>
        </ul>
        <div id="prog" className="col s12">
          <p><a href="#program" className="flow-text indigo-text text-darken-4">Full Stack Development</a></p>
          <p>I have always been drawn to understanding the fundamentals of how things work. That's the origional reason
            why I got a degree in psychology when I was at Elon University. However, I began working as a computer
            technician for the school and realized what a passion I had for technology. After finishing my degree I went
            to work for Microsoft as a Service Advisor and now a Cloud Technical Expert.</p>
          <p>After several years of working in technology I decided I wanted to go back to school and learn more about
            programing so I could take the next step in my career. My natural passion for understanding how things
            function has made learning full stack development with UNC's Coding Bootcamp and absolute joy. One of the
            best parts about a job in technology, and especially a developer role, is that you never stop learning.</p>
        </div>
        <div id="pot" className="col s12">
          <p><a href="#pottery" className="flow-text indigo-text text-darken-4">Ceramics</a></p>
          <p>I started learning ceramic art back in college and immediately fell in love with it. However, as soon as I
            graduated the realities of life out side of school and the lack of access to the tools needed to do ceramic
            art meant I had to take a break from it. What I thought would be a short break turned into a 5 year break!
          </p>
          <p>However about 6 months ago I started back up with the Durham Arts School by registering for classes so I
            could use there studio and rebuild the throwing skills that I had let diminish. I am now starting to build
            my very own studio so I don’t have to rely on others tools or open studio hours to make pottery!</p>
        </div>
      </div>
    </div>
  </section>
  )
}
