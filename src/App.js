import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Homescreen from "./Pages/Homescreen";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";
import Practice from "./Pages/Practice";
import Practice2 from "./Pages/Practice2";
import Practice3 from "./Pages/Practice3";
import Sidebar from "./Components/Sidebar";
import Booking from "./Pages/Booking";
import Modal from "./Pages/Modal";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homescreen />} />

        <Route path="/register" element={<Register />} />

        <Route path="/Login" element={<Login />} />

        <Route path="/booking" element={<Booking />} />

        <Route path="/modal" element={<Modal />} />
      </Routes>

     
    </div>
  );
}

export default App;
