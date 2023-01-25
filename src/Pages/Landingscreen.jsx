import React from 'react'
import { Link } from 'react-router-dom'


function Landingscreen() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div>

    {user ? (<div className='row landing justify-content-center'>
    <div className='col-md-9 text-center my-auto' style={{borderRight:'5px solid white',borderLeft:'5px solid white'}}>
    <h2 style={{color:'white', fontSize:'130px'}}>MERN Rooms</h2>
    <h1 style={{color:'white', paddingTop:'13px'}}>There is only one boss. "The Guest."</h1>
    <Link to='/home'>
    <button className='btn mt-4' style={{color:'black', backgroundColor: 'white'}} >Get started</button>
    </Link>
    
    </div>
      
    </div>) : (<Link to="/Login" /> 
  )}
    
    </div>
   
  )
}

export default Landingscreen

