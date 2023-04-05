import React, { useState, useEffect } from "react";
import "./Pages.css";
import axios from "axios";
import Loader from "../Components/Loader";
import Errors from "../Components/Error";
import Success from "../Components/Success";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate()
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();

  async function Login() {
    const user = {
      email,
      password,
    }
    try {
      setloading(true);
      const result = (await axios.post("/api/users/login",user)).data;
      setloading(true);
    
      localStorage.setItem('currentUser', JSON.stringify(result));
      navigate("/")
      window.location.reload(true)
     

    } catch (error) {
      console.log(error);
      setloading(false);
      seterror(true);
    }
  }

  return (
    <div>
      
    
    {loading ? (<Loader />)  : ( 
      <div className="row justify-content-center mt-5 mb-10">
        <div className="col-md-5">
        {error && (<Errors message='Invalid Username or Password' />)}
          <div className="bs">
            <h1>Login</h1>
            <input
              type="text"
              className="form-control mt-4"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="password"
              className="form-control mt-2"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <button bg="dark" className=" btn btn-dark mt-4" onClick={Login}>
              Login
            </button>
            <p className="mt-4">Not have an Account ? Click here for <Link to="/register">Register.</Link></p>
          
          </div>

        </div>
      </div>
      )}
    </div>
    
  );
}
export default Login;
