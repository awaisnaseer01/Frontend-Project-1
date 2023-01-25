import React, { useState, useEffect } from "react";
import "./Pages.css";
import axios from "axios";
import Success from "../Components/Success";
import Loader from "../Components/Loader";
import Errors from "../Components/Error";
import { Link } from "react-router-dom";

function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const [success, setsuccess] = useState();

  async function register() {
    if (password === cpassword) {
      const user = {
        name,
        email,
        password,
        cpassword,
      };
      try {
        setloading(true);
        const result = await axios.post("/api/users/register", user).data;
        setloading(false);
        setsuccess(true);

        setname("");
        setemail("");
        setpassword("");
        setcpassword("");
      } catch (error) {
        console.log(error);
        setloading(false);
        seterror(true);
      }
    } else {
      alert("Password not matched..!");
    }
  }

  return (
    <div>
      {loading && <Loader />}
      {error && <Errors />}
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          {success && <Success message="Registration Success" />}
          <div className="bs">
            <h1>Register</h1>
            <input
              type="text"
              className="form-control mt-4"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Confirm Password"
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            />
            <button bg="dark" className=" btn btn-dark mt-4" onClick={register}>
              Register
            </button>
            <p className="mt-4">Click here for <Link to="/login">Login.</Link></p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
