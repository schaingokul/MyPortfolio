import React, { useState } from 'react'
import {useNavigate ,Link, useParams } from 'react-router-dom';
import './LoginForm.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Axios from 'axios';


const LoginForm = () => {
  
  const navigate = useNavigate();
  const { token } = useParams();
  const [isLogin, setIsLogin] = useState(false);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [forgot, setForgot] = useState(false);
  const [newPassword, setNewPassword] = useState(false);

  const changeName = (e) => {
    setName(e.target.value);
  }
 
  const changeEmail = (e) => {
    setEmail(e.target.value);
  }

  const changePassword = (e) => {
    setPassword(e.target.value);
  }

 
  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (password.length <= 8) {
      setErrorMessage("Password length should be more than 8 characters");
      setPassword('')
      return;
    }

    try{
      await Axios.post('http://localhost:5000/auth/signup', {name, email, password});
      alert("Registered Succefully");
      setName('');
      setEmail('');
      setPassword('');
      navigate('/todolist');
      }
      catch(error){
          if(error.response && error.response.data && error.response.data.message){
            setErrorMessage(error.response.data.message);
          }else{
            setErrorMessage("An unexpected error occurred");
          }
      }
  };
  
  Axios.defaults.withCredentials = true;

  const handleSignup = async(e) => {
    e.preventDefault();
    try{
      const response = await Axios.post('http://localhost:5000/auth/login', {email, password});
      if(response.data.status){
        navigate('/todolist');
      }else{
        setErrorMessage(response.data.message);
      }

    }catch(error){
      if(error.response && error.response.data && error.response.data.message){
        setErrorMessage(error.response.data.message);
      }else{
        setErrorMessage("An unexpected error occurred");
      }
    }
    
  }

  const handlePasswordForgot = async(e) => {
    e.preventDefault();
    try{
      const response = Axios.post("http://localhost:5000/auth/forgot-password", {email})
      if((await response).data.status){
        alert("check your email for rest password link")
        setNewPassword(true);
      }else{
        setErrorMessage(response.data.message);
      }

    }catch(error){
      if(error.response && error.response.data && error.response.data.message){
        setErrorMessage(error.response.data.message);
      }else{
        setErrorMessage("An unexpected error occurred");
      }
    }
  }

  const handleNewPassword = async(e) => {
    e.preventDefault();
    try{
      const response = await Axios.post(`http://localhost:5000/auth/signup/${token}`, {password});
      console.log("Token received from URL:", token);
      if(response.data.status){
        navigate('/signup');
        setNewPassword(false);
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
            <h1>Authorization</h1>
            <img src={theme_pattern} alt=''/>
      </div>
      <p onClick={() => navigate('/')} className='backtohome'>Back to Home</p>
      {!forgot ? (
        isLogin  ? 
        (
          <form className='todolist-right' onSubmit={handleLogin}>
              <h1>Login</h1>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <label htmlFor='name'>Your Name</label>
              <input type='text' value={name} onChange={changeName} placeholder='Enter Your Name' name='name' required/>
              <label htmlFor='email'>Your Email</label>
              <input type='text' autoComplete = 'on' value={email} onChange={changeEmail} placeholder='Enter Your email' name='email' required/>
              <label htmlFor='password'>Your Password</label>
              <input type='password' value={password} onChange={changePassword} placeholder='Enter Your password' name='password' required/>
              <button type="submit" className='todolist-submit'>Login</button>
              <p><Link to="#" onClick={() => {
                setIsLogin(false); 
                setName('');
                setEmail('');
                setPassword('');
                setErrorMessage('')}}>Don't have an account? Sign up</Link></p>
          </form>
        ) : (
              <form className='todolist-right' onSubmit={handleSignup}>
                <h1>Signup</h1>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <label htmlFor='email'>Your Email</label>
                <input type='text' autoComplete = 'off' value={email} onChange={changeEmail} placeholder='Enter Your email' name='email' required/>
                <label htmlFor='password'>Your Password</label>
                <input type='password' value={password} onChange={changePassword} placeholder='Enter Your password' name='password' required/>
                <button type="submit" className='todolist-submit'>Sign Up</button>
                <p ><Link to="#" onClick={() => {setForgot(true)}}>Forgot Password?</Link></p>
                <p><Link to="#" onClick={() => {
                  setIsLogin(true); 
                  setName('');
                  setEmail('');
                  setPassword('');
                  setErrorMessage('')}}>Already have an account? Login</Link></p>
              </form>
            )) :
            (
              !newPassword ? (
                <form className='todolist-right' onSubmit={handlePasswordForgot}>
                  <h1>Reset Password</h1>
                  {errorMessage && <p className="error-message">{errorMessage}</p>}
                  <label htmlFor='email'>Your Email</label>
                  <input type='text' autoComplete = 'off' value={email} onChange={changeEmail} placeholder='Enter Your email' name='email' required/>
                  <button type="submit" className='todolist-submit'>Send Request</button>
                  <p><Link to="#" onClick={() => {
                    setForgot(false);
                    setEmail('');
                    }} className="error-message" >Exit</Link></p>
                </form>) : ( 
                  navigate('/signup'))
            )
        }
    </div>
  )
}

export default LoginForm;
