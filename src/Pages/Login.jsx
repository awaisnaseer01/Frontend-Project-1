import React, {useState, useEffect} from 'react'
import './Pages.css'

function Login() {
   
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    

    function Login(){
       
        const user={
            
            email,
            password,
           
        }
        console.log(user)
       }
       
    


  return (
   <div >
    <div className="row justify-content-center mt-5 mb-10">
        <div className="col-md-5">
           <div className='bs'>
            <h1>Login</h1>
            <input type="text" className='form-control' placeholder='Email' value={email} onChange={(e)=>{setemail(e.target.value)}} />
            <input type="password" className='form-control' placeholder='Password' value={password} onChange={(e)=>{setpassword(e.target.value)}} />
           <button bg="dark" className=' btn btn-dark mt-3' onClick={Login}>Login</button>
           </div>
        </div>
    </div>
   </div> 
  )
}

export default Login
