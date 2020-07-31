import React from 'react'
import BookSummary from './BookSummary'
import { Link } from 'react-router-dom'


const BookList = ( {projects} ) => {
    
    return(
        
        <div className="project-list section">
            { projects && projects.map(project => {
                return (
                    
                    <BookSummary project={project} key={project.id} />

                )
            }

            )}
          
         
        </div>
    )
}

export default BookList