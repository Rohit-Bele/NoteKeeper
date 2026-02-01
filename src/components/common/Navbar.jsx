import React from 'react'
import AuthContext from '../../context/AuthContext'
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useContext } from "react";




function Navbar() { 

    const {setislogginedin} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogOut = ()=>
    {
    setislogginedin(false)
    navigate('/login')
    }


  return (

    <div>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/profile">Profile</NavLink>
            </li>
             <li>
                <NavLink to="/add">Add Notes</NavLink>
            </li>
            <li>
                <button onClick={handleLogOut}>Logout</button>
            </li>
        </ul>
    </div>
  )
}

export default Navbar









