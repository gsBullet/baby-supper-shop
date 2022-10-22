import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='notFound'>
         <Link className='btn btn-info my-3 goBack' to="/">GO BACK</Link>
         <br />
        <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000" alt="" />
       
    </div>
  )
}

export default NotFound;