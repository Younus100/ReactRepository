import React, { Profiler } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'
const SignedIn = (props) => {
    
    return(
        <ul className="right">
              <li><NavLink to='/about'>About Us</NavLink></li>
            <li><NavLink to='/service'>Services</NavLink></li>
            <li><NavLink to='/book'>Book</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating green lighten-1'> {props.profile.initials} </NavLink></li>
        </ul>
    )
}

const mapDispatchtoProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null,mapDispatchtoProps)(SignedIn)