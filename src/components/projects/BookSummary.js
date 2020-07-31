import React from 'react'

const BookSummary = ({project}) => {
    return(
        <div className="project-list section">
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">E-mail: { project.email }</span>
                    <span className="card-title">Name: { project.name }</span>
                    <span className="card-title">Contact: { project.contact }</span>
                    <span className="card-title">Location: { project.location }</span>
                    <span className="card-title">Gender: { project.gender }</span>
                
                </div>
            </div>
        </div>
    )
}

export default BookSummary