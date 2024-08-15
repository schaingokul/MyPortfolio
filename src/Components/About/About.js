import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import gokul from '../../assets/gokul.svg';

const About = () => {
  
  return (
    <div id='aboutme' className='about'>
      <div className='about-title'>
        <h1>About Me</h1>
        <img  src ={theme_pattern} alt=''/>
      </div>
      <div className='about-section'>
        <div className='about-left'>
        <img src= {gokul} alt='' />
        </div>
        <div className='about-right'>
            <div className='about-para'>
                <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className='about-skills'>
                <div className='about-skill'><p>HTML & CSS</p><hr style ={{width: "60%"}} /></div>
                <div className='about-skill'><p>JavaScript</p><hr style ={{width: "50%"}} /></div>
                <div className='about-skill'><p>React</p><hr style ={{width: "60%"}} /></div>
                <div className='about-skill'><p>Node & Express JS</p><hr style ={{width: "50%"}} /></div>
                <div className='about-skill'><p>MongoDB & MYSQL</p><hr style ={{width: "50%"}} /></div>
                
            </div>
        </div>
      </div>
      <div className='about-achivements'>
        <div className='about-achivement'>
            <h1>3+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className='about-achivement'>
            <h1>1+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
        <div className='about-achivement'>
            <h1>1+</h1>
            <p>HAPPY CLIENT</p>
        </div>
      </div>
    </div>
  )
}

export default About
