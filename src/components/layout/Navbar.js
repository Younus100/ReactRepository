import React from 'react'
import { Link } from 'react-router-dom'
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth ,profile } =props
    const links = auth.uid ? <SignedIn profile={ profile }/> : <SignedOut />
    return(
        <nav class="navbar navbar-expand-lg navbar-light brown">
                <Link to='/' className="navbar-brand"><h1>BarberShop&ensp;</h1></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
     </button>
                { auth.isLoaded && 
                   links
                }

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