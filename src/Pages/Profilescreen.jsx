import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import axios from "axios";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import Swal from "sweetalert2";
import { Divider, Space, Tag } from 'antd';
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;

function Profilescreen() {

  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="ml-3 mt-3">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Profile" key="1">
          <h1>My Profile</h1>
          <br />
          <h1>Name : {user.name}</h1>
          <h1>Email : {user.email}</h1>
          <h1>IsAdmim : {user.isAdmin ? "Yes" : "No"}</h1>
        </TabPane>
        <TabPane tab="Bookings" key="2">
          <MyBookings />
        </TabPane>
      </Tabs>
    </div>
  );
}


export default Profilescreen;


// Component for Mybookings in profile screen

export function MyBookings() {
  
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [bookings, setbookings] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  useEffect(() => {
    setloading(true);
    axios
      .post("/api/bookings/getbookingsbyuserid", { userid: user._id })
      .then((response) => {
        console.log(response.data);
        setbookings(response.data);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
        seterror(true);
      });
  }, []);

  async function cancelBooking(bookingid, roomid)  {

    
    
    try {
      setloading(true);
      const result = await axios.post("/api/bookings/cancelbooking", { bookingid:bookingid, roomid:roomid })
      console.log(result);
      setloading(false);
      Swal.fire('Congrats' , 'Your Booking has been cancelled' , 'success').then(result=>{
        window.location.reload(true)
      })
    } catch (error) {
      console.log(error);
      setloading(false);
      Swal.fire('Oops' , 'Something went wrong' , 'error')
    }
  }

  // useEffect(async()=>{
  // try {
  //     const rooms=await axios.post("/api/bookings/getbookingsbyuserid" , {userid : user._id} );
  //     console.log(rooms)
  // } catch (error) {
  //     console.log(error)
  // }
  // },[])
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          {loading && <Loader />}
          {bookings &&
            bookings.map((booking,index) => {
              return (
                <div className="bs" key={index}>
                  <h1>{booking.room}</h1>
                  <p>
                    <b>BookingID : </b>
                    {booking._id}
                  </p>
                  <p>
                    <b>CheckIn : </b> {booking.fromdate}
                  </p>
                  <p>
                    <b>CheckOut : </b>
                    {booking.todate}
                  </p>
                  <p>
                    <b>Total Amount : </b>
                    {booking.totalamount}
                  </p>
                  <p>
                    <b>Status : </b>
                    {booking.status == 'cancelled' ? (<Tag color="red">CANCELLED</Tag>) : ( <Tag color="green">CONFIRMED</Tag>)}
                  </p>

                   {booking.status !== 'cancelled' && (<div className="text-right">
                   <button
                     className="btn btn-dark"
                     onClick={() => {
                       cancelBooking(booking._id, booking.roomid);
                     }}
                   >
                     Cancel Booking
                   </button>
                 </div>)}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
