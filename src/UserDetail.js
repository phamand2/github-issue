import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UserDetail() {
  const {login: loginName} = useParams();
  const [userData, setUserData] = useState();


  useEffect(()=>{
    getUser()
    },[])
  
  const getUser = async () => {
    const user = await axios.get(`https://api.github.com/users/${loginName}`);
    setUserData(user.data)
  }

  if(!userData){
    return ''
  }

  const {login, avatar_url, bio, company, location, blog } = userData

  return (
    <div> 
      <h1>{login}</h1>
      <div className='profileImage'>
      <img src={avatar_url} alt='profile'></img>
      </div>
      <div>{bio}</div>
      <div>{location}</div>
      <div>{blog}</div>
      <div>{company}</div>
    </div>
  
  )
}

export default UserDetail
