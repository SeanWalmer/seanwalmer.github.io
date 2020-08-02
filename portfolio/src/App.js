import './App.css';
import React from 'react';
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Parallax from './components/Parallax'
import About from './components/About';
import ProjectSec from './components/ProjectSec';
import ProjectList from './components/projects.json'
import ProjectRight from './components/ProjectRight';
import ProjectLeft from './components/ProjectLeft';
import Pottery from './components/Pottery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Welcome/>
      <Parallax link='img/walk.jpg' altText='walkway through garden' />
      <About/>
      <Parallax link='img/lodge.jpg' altText='lodge on a frozen lake' />
      <ProjectSec>
        {/* maping projects to components */}
        {ProjectList.map((project, index) => {
          // if statment to alternate between the two project component styles
          if ((index + 1) % 2 === 0) {
            return <ProjectLeft key={project.title} image={project.image} title={project.title} discrip={project.discrip} app={project.app} repo={project.repo} />
          } else {
            return <ProjectRight key={project.title} image={project.image} title={project.title} discrip={project.discrip} app={project.app} repo={project.repo} />
          }
        })}
        <hr></hr>
      </ProjectSec>
      <Parallax link='img/works.jpg' altText='unglazed pottery' />
      <Pottery/>
      <Parallax link='img/mist.jpg' altText='mountain vista'/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
