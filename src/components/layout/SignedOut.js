import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const SignedOut = () => {
    return(
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item active"><NavLink className="nav-link" to='/'><h3>Home &ensp; &emsp;</h3></NavLink></li>
            <li className="nav-item active"><NavLink className="nav-link" to='/about'><h3>About Us &ensp; &emsp;</h3></NavLink></li>
            <li className="nav-item active"><NavLink className="nav-link" to='/service'><h3>Services &ensp;&emsp; </h3></NavLink></li>
            <li className="nav-item active"><NavLink className="nav-link" to='/book'><h3>Book &emsp;&ensp; </h3></NavLink></li>
            <li className="nav-item active"><NavLink className="nav-link" to='/product'><h3>Products&emsp;&ensp;</h3></NavLink></li>
            <li className="nav-item active"><NavLink className="nav-link" to='/signup'><h3>SignUp&emsp;&ensp;</h3></NavLink></li>
            <li className="nav-item active"><NavLink className="nav-link" to='/signin'><h3>Log In&emsp;&ensp;</h3></NavLink></li>
            

        </ul>
        </div>

        
    )
}

export default SignedOut