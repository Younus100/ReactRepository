import React, { Component } from 'react';
import BookList from '../projects/BookList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
 
class Admin extends Component {
    render() {
        const { projects,auth } = this.props;
  

        
        return(<div> <h1 align="center">This is Admin Panel</h1>
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <BookList projects={projects} />
                </div>
            </div>
        </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        projects : state.firestore.ordered.book,
        auth : state.firebase.auth
    }
}

export default compose(
    firestoreConnect(() => ['book']),
    connect(mapStateToProps)
    )(Admin)
