import React from 'react'
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
    <div className='container justify-content-center'>
        <h1>Welcome to QuizD</h1>
        <h3><Link to="/cards">Take Quiz</Link></h3>
    </div>
    </>
  )
}

export default Landing