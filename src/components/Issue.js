import React from 'react'
import { Link } from 'react-router-dom'

function Issue(props) {

  // Deconstruct from props.issue
  const {issue} = props
  return (
    <div className='Issue'>
      <div>
      <i className="fas fa-exclamation-circle"></i>
              <Link to={`/issue/${issue.number}`}>
              {issue.title}
              </Link>
              

              {issue.labels.map(label => (
              <span key={label.id} className='label 'style={{backgroundColor:'#' + label.color}}>{label.name}</span>))}

              <div className='comment'>
                {issue.comments > 0 && (
                  <a href={issue.comments_url} ><i className="fas fa-comments"></i>{issue.comments}</a>
                )}
              </div>
      </div>
    </div>
  )
}

export default Issue
