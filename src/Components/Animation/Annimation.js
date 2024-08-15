import React from 'react'
import './Annimation.css';
import image2 from '../images/2.png'
import code from '../images/code.png'
import rock1 from '../images/rock1.png'
import rock2 from '../images/rock2.png'
import rock3 from '../images/rock3.png'
import bg from '../images/bg.png'
import bg2 from '../images/bg2.png'

const Animation = () => {
  return (
    <div className='body'>
                <div>
                  <div class="left">
                      <h1>CSS ONLY</h1>
                      <img src={image2} alt=""/>
                  </div>
                  <div class="author">
                      <h3>LUN DEV</h3>
                      <div >
                          <p>Design By</p>
                          <p>Lun Dev</p>
                      </div>
                      <div>
                          <p>Code By</p>
                          <p>Lun Dev</p>
                      </div>
                      <img src={code} alt=""/>
                  </div>
                </div>
        <div class="banner">
            <div class="product">
                <div class="soda" style={{'--url': `url(${bg.png})`}}>
                </div>
                <div class="soda" style={{'--url': `url(${bg2.png})`}}>
                </div>
            </div>
            <div class="rock">
                <img src={rock1} alt=""/>
                <img src={rock2} alt=""/>
                <img src={rock3} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Animation
