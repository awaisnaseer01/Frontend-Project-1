import React, {useState, useEffect} from 'react'
import './Pages.css'

function Register() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

    function register(){
       if (password===cpassword)
       {
        const user={
            name,
            email,
            password,
            cpassword
        }
        console.log(user)
       }
       else{
        alert('Password not matched..!')
       }
    }


  return (
   <div>
    <div className="row justify-content-center mt-5">
        <div className="col-md-5">
           <div className='bs'>
            <h1>Register</h1>
            <input type="text" className='form-control' placeholder='Name' value={name} onChange={(e)=>{setname(e.target.value)}} />
            <input type="text" className='form-control' placeholder='Email' value={email} onChange={(e)=>{setemail(e.target.value)}} />
            <input type="text" className='form-control' placeholder='Password' value={password} onChange={(e)=>{setpassword(e.target.value)}} />
            <input type="text" className='form-control' placeholder='Confirm Password' value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}} />
           <button bg="dark" className=' btn btn-dark mt-3' onClick={register}>Register</button>
           </div>
        </div>
    </div>
   </div>
  )
}

export default Register
