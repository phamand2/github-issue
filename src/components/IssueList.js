import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './IssueList.css'
import Issue from './Issue'

function IssueList() {

  const [issues, setIssues] = useState([])


  
  useEffect(()=>{
    axios.get('https://api.github.com/repos/facebook/create-react-app/issues')
    .then(res => {
      console.log(res)
      setIssues(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [])




  return (
  
        <div className='Issue'>
          {
            issues.map(issue =>  (
              <Issue key={issue.id} issue={issue} />
              )) 
          }
    
        </div> 
  )
}

export default IssueList
