import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'


function IssueByNumber() {
  const { number } = useParams();
  const [issue, setIssue] = useState(null);



  useEffect(()=>{
    axios.get(`https://api.github.com/repos/facebook/create-react-app/issues/${number}`)
    .then(res => {
      setIssue(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  })


  return (
    <>
      <h1>Issues By Number: {number}</h1>
      <div>
        {issue && (
          <>
          <h2>
          {issue.title}
          </h2>
          </>
        )}
      </div>
      
    </>
  )
}

export default IssueByNumber
