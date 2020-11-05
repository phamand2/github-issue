import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './IssueList.css'
import Issue from './Issue'

function IssueList() {

  const [issues, setIssues] = useState([])


  
  useEffect(()=>{
  getIssues()
  }, [])


  const getIssues = async () => {
    const issues = await axios.get('https://api.github.com/repos/facebook/create-react-app/issues');
    setIssues(issues.data)
  }



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
