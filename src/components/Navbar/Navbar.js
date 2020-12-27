import React from 'react'
import './navbar.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="navbar">
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/list">COUNTRY LIST</NavLink>
                {/*<NavLink to="/regionalBlocs">REGIONAL BLOC</NavLink>*/}
            </div>
        </header>
    )
}

export default Navbar;