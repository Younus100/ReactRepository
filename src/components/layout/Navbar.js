import React from 'react'
import { Link } from 'react-router-dom'
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth ,profile } =props
    const links = auth.uid ? <SignedIn profile={ profile }/> : <SignedOut />
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">BarberShop</Link>
                {auth.isLoaded && 
                   links
                }
            </div>
        </nav>
    )
}

const mapStateProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile : state.firebase.profile
    }

}

export default connect(mapStateProps)(Navbar)