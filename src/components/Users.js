import React, { useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";

function Users() {
  const [userName, setUserName] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then((res) => {

        if (res.status !== 200) {
          return
        }


        const user = res.data;
        const newUser = [...users];
        newUser.unshift(user);
        setUsers(newUser);
        setUserName("");
      })
      .catch((error) => {
        alert(`No User Found at ${userName}`);
      });
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };


  const userCard = (
    <div>
      {users.map((user) => {
        return <UserCard user={user} />;
      })}
    </div>
  );

  return (
    <>
      <div>
        <h1>User Search</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="name"
              value={userName}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <h2>Results</h2>
      {userCard}
    </>
  );
}

export default Users;
