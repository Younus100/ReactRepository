import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authAction';

class SignUp extends Component {
    state = { 
        email :  '',
        password : '',
        firstname: '',
        lastname:''
     }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.signUp(this.state)
    }

    
    render() { 
        const { auth ,authError } = this.props;

        if(auth.uid) return <Redirect to='/' />
        return (  
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id="firstname"  onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="lastname">LastName</label>
                        <input type="text" id="lastname"  onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className='btn brown lighten-1 z-depth-0'>SignUp</button>
                        <div className="red-text" center>
                            { authError ? <p> { authError } </p>: null}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps =(state) => {
    return {
        auth : state.firebase.auth,
        authError : state.auth.authError
    }
}

const mapDisplayToProps = (dispatch) => {
    return {
        signUp : (newUser) => dispatch(signUp(newUser))
    }
}
 
export default connect(mapStateToProps , mapDisplayToProps)(SignUp);