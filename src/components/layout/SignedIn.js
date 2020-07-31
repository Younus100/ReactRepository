import React, { Profiler } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'
const SignedIn = (props) => {
    
    return(
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item active"><NavLink className="nav-link" to='/'><h3>Home &ensp; &emsp;</h3></NavLink></li>
            <li className="nav-item active"><NavLink className="nav-link" to='/about'><h3>About Us &ensp; &emsp;</h3></NavLink></li>
            <li className="nav-item active"><NavLink className="nav-link" to='/service'><h3>Services &ensp;&emsp; </h3></NavLink></li>
           
            <li className="nav-item active"><NavLink className="nav-link" to='/book'><h3>Book &emsp;&ensp; </h3></NavLink></li>
            <li className="nav-item active"><NavLink className="nav-link" to='/product'><h3>Products&emsp;&ensp;</h3></NavLink></li>
            <li className="nav-item active"><a className="nav-link" onClick={props.signOut}><h3>Log Out &emsp; &ensp;</h3></a></li>

        </ul>
        </div>
        
    )
}

const mapDispatchtoProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null,mapDispatchtoProps)(SignedIn)