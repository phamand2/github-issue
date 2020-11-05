import React from 'react'
import './UserCard.css'

function UserCard(props) {
  const { login, avatar_url, type, location, html_url } = props.user


  return (<div className='UserCard'>
    <div className='profileImage'>
      <img src={avatar_url} alt='profile'></img>
    </div>
    <div className='profileDetails'>
        <h3>{login}</h3> 
        <ul>
          <li><b>Account Type: </b>{type}</li>
          <li><b>Account Location: </b>{location}</li>
          <li><b>Account URL: </b>{html_url}</li>
        </ul>
    </div>
    </div>
  )
}

export default UserCard
