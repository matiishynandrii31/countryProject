import React from 'react'
import './navbar.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/list">Country List</NavLink>
            </div>
        </div>
    )}

export default Navbar;