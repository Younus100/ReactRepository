import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const SignedOut = () => {
    return(
        <ul className="right">
            <li><NavLink to='/about'>About Us</NavLink></li>
            <li><NavLink to='/service'>Services</NavLink></li>
            <li><NavLink to='/signup'>SignUp</NavLink></li>
            <li><NavLink to='/signin'>Log In</NavLink></li>
        </ul>
    )
}

export default SignedOut