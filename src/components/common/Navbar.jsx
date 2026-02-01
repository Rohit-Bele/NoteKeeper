import React from 'react'
import AuthContext from '../../context/AuthContext'
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import './Navbar.css'

function Navbar() { 

    const {setislogginedin} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogOut = ()=>
    {
        setislogginedin(false)
        navigate('/login')
    }

  return (
    <nav className='Navbar-box'>
        {/* Logo Section */}
        <div className='navbar-logo'>
            <span className='logo-icon'>📝</span>
            <span className='logo-text'>NotesKeeper</span>
        </div>

        {/* Heading Section */}
        <div className='navbar-heading'>
            <h2>Capture Your Thoughts</h2>
        </div>

        {/* Navigation Items */}
        <ul className='ul-tag'>
            <li className='li-tag'>
                <NavLink to="/">Home</NavLink>
            </li>
            <li className='li-tag'>
                <NavLink to="/profile">Profile</NavLink>
            </li>
            <li className='li-tag'>
                <NavLink to="/add">Add Notes</NavLink>
            </li>
            <li className='li-tag'>
                <button className='logout-btn' onClick=            {handleLogOut}>Logout</button>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar