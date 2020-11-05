import React, { useState } from 'react';
import axios from 'axios'
import UserCard from './UserCard';



function Users() {

  const [userName, setUserName] = useState('')
  const [users, setUsers] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${userName}`)
      .then(res=>{
        if(res.status !== 200){
          throw Error(`Could not find user: ${userName}`)
        }
        const user = res.data
        const newUser = [...users]
        newUser.unshift(user)
        setUsers(newUser)
        setUserName('')
      })
      .catch(()=>{
        alert('No User')
      })
      }
    


  const handleChange = (e) => {
    setUserName(e.target.value)
  }


  return (
    <>
      <div>
        <h1>User Search</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" name="name" value={userName} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <h2>Results</h2>
      <div>
        {users.map((user) => {
          return <UserCard user={user} />
        })}
      </div>
    </>
  )
}

export default Users
