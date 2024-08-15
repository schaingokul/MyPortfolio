import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './TodoList.css';
import user_icon from '../../assets/user_icon.svg';
import theme_pattern from '../../assets/theme_pattern.svg';

const TodoList = () => {
    const [display, setDisplay ] = useState([]);
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    }
    
    const handleClick = (e) => {
        e.preventDefault()
        setDisplay(title);
    }

  return (
    <div id='formlist' className='formlist'>
        <div className='formlist-title'>
            <h1>Add List</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className='formlist-container'>
            <div className='formlist-input'>
                <img src={user_icon} alt=''/>
                <input placeholder='Enter your Title' onChange={handleChange}/>
            </div>
            <div className='formlist-add' onClick={handleClick}>
                Add
            </div>
        </div>
        <div className='display'>
            {
                display.map((value, index)=> {
                    return <div className= 'display-title' key={index}>{value}</div>
                })
            }
        </div>
        <p><Link to = '/signup' >Logout</Link></p>
    </div>
  )
}

export default TodoList
