import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import axios from "axios";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;

function Adminscreen() {
  const navigate=useNavigate()
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("currentUser")).isAdmin) {
      navigate("/home");
    }
  }, []);

  return (
    <div className="mt-3 ml-3 mr-3 bs">
      <h2 className="text-center">
        <b>Admin Panel</b>
      </h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Bookings" key="1">
          <h1>
            <Bookings />
          </h1>
        </TabPane>
        <TabPane tab="Rooms" key="2">
          <Rooms />
        </TabPane>
        <TabPane tab="Add Rooms" key="3">
          <Addroom />
        </TabPane>
        <TabPane tab="Users" key="4">
          <Users />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Adminscreen;

// This is booking list component of Adminscreen

export function Bookings() {
  const [bookings, setbookings] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(true);

  useEffect(() => {
    setloading(true);
    const fetchData = async () => {
      const response = await axios.get("/api/bookings/getallbookings");
      setbookings(response.data);
      setloading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Bookings</h1>
        {loading && <Loader />}
        <table className="table table-boarded table-dark">
          <thead className="bs">
            <tr>
              <th>Booking ID</th>
              <th>User ID</th>
              <th>Room</th>
              <th>From</th>
              <th>To</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length &&
              bookings.map((booking) => {
                return (
                  <tr>
                    <td>{booking._id}</td>
                    <td>{booking.userid}</td>
                    <td>{booking.room}</td>
                    <td>{booking.fromdate}</td>
                    <td>{booking.todate}</td>
                    <td>{booking.status}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// This is Rooms list component of Adminscreen

export function Rooms() {
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(true);

  useEffect(() => {
    setloading(true);
    const fetchData = async () => {
      const response = await axios.get("/api/rooms/getallrooms");
      setrooms(response.data);
      setloading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="row ">
      <div className="col-md-12">
        <h1>Rooms</h1>
        {loading && <Loader />}
        <table className="table table-boarded table-dark">
          <thead className="bs">
            <tr>
              <th>Room ID</th>
              <th>Name</th>
              <th>type</th>
              <th>Rent per day</th>
              <th>Maxcount</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {rooms.length &&
              rooms.map((room) => {
                return (
                  <tr>
                    <td>{room._id}</td>
                    <td>{room.name}</td>
                    <td>{room.type}</td>
                    <td>{room.rentperday}</td>
                    <td>{room.maxcount}</td>
                    <td>{room.phonenumber}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// This is User list component of Adminscreen

export function Users() {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();

  useEffect(() => {
    setloading(true);
    const fetchData = async () => {
      const response = await axios.get("/api/users/getallusers");
      setusers(response.data);
      setloading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Users</h1>
        {loading && <Loader />}
        <table className="table table-boarded table-dark">
          <thead className="bs">
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Is Admin</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => {
                return (
                  <tr>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.isAdmin ? "YES" : "NO"}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// This is Add new room component of Adminscreen

export function Addroom(){

  const navigate=useNavigate()
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();

    const[name , setname]=useState('')
    const[rentperday , setrentperday]=useState()
    const[maxcount , setmaxcount]=useState()
    const[description , setdescription]=useState()
    const[phonenumber , setphonenumber]=useState()
    const[type , settype]=useState()
    const[imageurl1 , setimageurl1]=useState()
    const[imageurl2 , setimageurl2]=useState()
    const[imageurl3 , setimageurl3]=useState()

    async function addRoom(){
        const newroom = {
            name,
            rentperday,
            maxcount,
            description,
            phonenumber,
            type,
            imageurls:[imageurl1 , imageurl2 , imageurl3]
        }

        // console.log(newroom)
        try {
            setloading(true)
            const result = await (await axios.post("/api/rooms/addroom" , newroom)).data
            console.log(result)
            setloading(false)
            Swal.fire('Congrats' , 'Your New Room Added Successfully' , 'success').then(result=>{
                navigate('/home')
            })
        } catch (error) {
            console.log(error)
            setloading(false)
            Swal.fire('Oops' , 'Something went wrong' , 'error')
        }
    }

    
    return(
        <div className="row">
        <div className="col-md-5">
        {loading && <Loader />}
        <input type='text' placeholder="room name" className="form-control" value={name} onChange={(e)=>{setname(e.target.value)}}/>
        <input type='text' placeholder="rent per day" className="form-control" value={rentperday} onChange={(e)=>{setrentperday(e.target.value)}} />
        <input type='text' placeholder="max count" className="form-control" value={maxcount} onChange={(e)=>{setmaxcount(e.target.value)}} />
        <input type='text' placeholder="description" className="form-control" value={description} onChange={(e)=>{setdescription(e.target.value)}} />
        <input type='text' placeholder="phone number" className="form-control" value={phonenumber} onChange={(e)=>{setphonenumber(e.target.value)}} /> 
        </div>
        <div className="col-md-5">
        <input type='text' placeholder="type" className="form-control" value={type} onChange={(e)=>{settype(e.target.value)}} />
        <input type='text' placeholder="Image url 1" className="form-control" value={imageurl1} onChange={(e)=>{setimageurl1(e.target.value)}} />
        <input type='text' placeholder="Image url 2" className="form-control" value={imageurl2} onChange={(e)=>{setimageurl2(e.target.value)}} />
        <input type='text' placeholder="Image url 3" className="form-control" value={imageurl3} onChange={(e)=>{setimageurl3(e.target.value)}} />

        <div className="text-right">
        <button className="btn btn-dark mt-3" onClick={addRoom}>Add Room</button>
        </div>
        </div>
        
        </div>
    )
}