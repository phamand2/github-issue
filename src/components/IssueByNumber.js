import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Markdown from 'react-markdown';
import './IssueByNumber.css'
import Moment from 'react-moment'


function IssueByNumber() {
  const { number } = useParams();
  const [issue, setIssue] = useState(null);


  useEffect(()=>{
  getIssues()
  },[])
  

  const getIssues = async () => {
    const {data} = await axios.get(`https://api.github.com/repos/facebook/create-react-app/issues/${number}`);
    setIssue(data)
  }


  return (
    <>
      <div className='IssueDetail'>
          <>  
            <div><h1>{issue?.title} <span style={{color:"lightgray"}}># {issue?.number}</span></h1></div>

            <div>
              <span className='openIcon'>{issue?.state}</span> <span className='userLogin'>{issue?.user?.login}</span> opened this issue at <Moment format='MMMM Do YYYY, h:mm:ss a'>
              {issue?.created_at}</Moment>, <span>{issue?.comments} comments</span>
            </div>

            <hr></hr>

            <div className='markdown'> <Markdown source={issue?.body} allowDangerousHtml={true} /> </div>
            
          </>
      </div>
      
    </>
  )
}

export default IssueByNumber
