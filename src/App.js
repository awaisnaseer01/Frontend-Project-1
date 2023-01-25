import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Homescreen from "./Pages/Homescreen";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";

import Booking from "./Pages/Booking";


import Profilescreen from "./Pages/Profilescreen";
import Adminscreen from "./Pages/Adminscreen";
import Landingscreen from "./Pages/Landingscreen";

function App() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  
  return (
    
    <div className="App">
      <Navbar />
      
      

      <Routes>
      {user ? (<Route path="/Login" element={<Login />} />) : (<Route path="/" element={<Login />} />)}

      <Route path="/Login" element={<Login />} />
        
        <Route path="/home" element={<Homescreen />} />

        <Route path="/register" element={<Register />} />

        <Route path="/booking" element={<Booking />} />

        

        <Route path="/profile" element={<Profilescreen />} />

        <Route path="/admin" element={<Adminscreen />} />

        <Route path="/" element={<Landingscreen />} />
        
      </Routes>
      
    </div>
  );
}

export default App;
