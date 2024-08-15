
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/TodoList/LoginForm';
import ResetPassword from './Components/TodoList/ResetPassword';
import TodoList  from './Components/TodoList/TodoList';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Mywork from './Components/My Work/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Restaurant from './Components/Restaurant/RestaurantIndex';



function App() {


  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={
          <>
            <Navbar/>
            <Hero />
            <About />
            <Services />
            <Mywork />
            <Contact />
            <Footer />
          </>} />
          <Route path ="/signup" element = {<LoginForm />} />
          <Route path ="/resetpassword/:token" element = {<ResetPassword />} />
          <Route path="/todolist" element = {<TodoList />} />
          <Route path='/restarunt' element= {<Restaurant />}/>
          
      </Routes>
      
    </BrowserRouter>
  )
};

export default App
