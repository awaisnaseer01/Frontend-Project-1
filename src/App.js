
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Homescreen from './Pages/Homescreen';
import Register from './Pages/Register';
import Login from './Pages/Login';
import {Route, Routes} from 'react-router-dom'
import Practice from './Pages/Practice';
import Practice2 from './Pages/Practice2';
import Practice3 from './Pages/Practice3';


function App() {
  return (
    <div className="App">

      <Navbar />
      
      

      

      {/* <Practice3 /> */}
      {/* <Practice />
      <Practice2 /> */}

      
      
      <Routes>
      <Route path="/home" element={<Homescreen />} />

      <Route path="/register" element={<Register />} />

      <Route path="/Login" element={<Login />} />
      </Routes>
      
      
      
      
    </div>
  );
}

export default App;
