import React from 'react'

function Issue(props) {

  // Deconstruct from props.issue
  const {issue} = props

  return (
    <div className='Issue'>
      <div>
      <i class="fas fa-exclamation-circle"></i>
              {issue.title}

              {issue.labels.map(label => (
              <span className='label 'style={{backgroundColor:'#' + label.color}}>{label.name}</span>))}

              <div className='comment'>
                {issue.comments > 0 && (
                  <a href={issue.comments_url} ><i class="fas fa-comments"></i>{issue.comments}</a>
                )}
              </div>
      </div>
    </div>
  )
}

export default Issue
