import React, { useState } from 'react'
import {useNavigate ,Link, useParams } from 'react-router-dom';
import './LoginForm.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Axios from 'axios';


const ResetPassword = () => {
  
  const navigate = useNavigate();
  const { token } = useParams();
  console.log(token);
  
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const changePassword = (e) => {
    setPassword(e.target.value);
  }


  
  const handleNewPassword = async(e) => {
    e.preventDefault();
    try{
      const response = await Axios.post(`http://localhost:5000/auth/resetpassword/${token}`, {password});
      console.log("Token received from URL:", token);
      if(response.data.status){
        navigate('/signup');
        
      }
    }catch(error){
      if(error.response && error.response.data && error.response.data.message){
        setErrorMessage(error.response.data.message);
      }else{
        setErrorMessage("An unexpected error occurred")
      }
    }
  }

  return (
    <div id='todolist' className='todolist'>
      <div className='todolist-title'>
            <h1>New Password</h1>
            <img src={theme_pattern} alt=''/>
      </div>
      <p onClick={() => navigate('/')} className='backtohome'>Back to Home</p>
                <form className='todolist-right' onSubmit={handleNewPassword}>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <label htmlFor='password'>Your Password</label>
                <input type='password' value={password} onChange={changePassword} placeholder='Enter Your password' name='password' required/>
                <button type="submit" className='todolist-submit'>Reset Password</button>
                <p><Link to="#" onClick={() => {
                  navigate('/signup')
                  }} className="error-message" >Exit</Link></p>
              </form>
    </div>
  )
}

export default ResetPassword;
