import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import {useNavigate} from 'react-router-dom';
import login from '../../assets/login.PNG';
import restaurant from '../../assets/restaurant.PNG';
import ecommerce from '../../assets/ecommerce.PNG';

const MyWork = () => {

  const navigate = useNavigate();

  return (

    <div id='portfolio' className='mywork'>
      <div className='mywork-title'>
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt=''/>
      </div>
        <div className='mywork-container'>
           <img src={login} alt='' onClick={() => navigate('/signup')}/>
            <img src={restaurant} alt='' onClick={() => navigate('/restarunt')}/>
          {/*<img src={ecommerce} alt='' onClick={() => navigate('/ecommerce')}/>*/}
        </div>
        <div className='mywork-showmore'>
            <p>Show More</p>
            <img src={arrow_icon} alt='' />
        </div>
    </div>
  )
}

export default MyWork
