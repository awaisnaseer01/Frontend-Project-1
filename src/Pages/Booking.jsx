import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";

function Booking() {
  // useNavigate() is used instead of window.location.href
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  const [room, setroom] = useState([]);

  // --------use location state for getting id through link react router dom-------

  const location = useLocation();
  const { id } = location.state;
  const { fromdate } = location.state;
  const { todate } = location.state;

  let totaldays;
  let totalamount;
  if (location.state && location.state.fromdate && location.state.todate) {
    // console.log( location.state.fromdate );

    let from = location.state.fromdate.split("_")[0];
    let to = location.state.todate.split("_")[0];

    // console.log("from", from)
    //calculate time difference

    totaldays = to - from + 1;

    totalamount = totaldays * room.rentperday;

    // console.log("total days", totaldays)
  }

  useEffect(() => {
    if (!localStorage.getItem("currentUser")) {
      navigate("/login");
    }

    console.log("from data", location.state);
    const fetchData = async () => {
      // You can await here
      setloading(true);
      const response = await axios.post("/api/rooms/getroombyid", {
        roomid: id,
      });
      console.log("response", response.data);
      setroom(response.data);
    };
    fetchData();
    setloading(false);
  }, []);

  //  apply this logic in the stripe

  //   async function bookRoom(){

  //     const bookingDetails = {

  //       room ,
  //       userid:JSON.parse(localStorage.getItem('currentUser'))._id,
  //       fromdate,
  //       todate,
  //       totalamount,
  //       totaldays

  //     }

  //     try {
  //       const result = await axios.post('/api/bookings/bookroom', bookingDetails)
  //     } catch (error) {

  //     }

  //   }

  async function onToken(token) {
    console.log(token);

    const bookingDetails = {
      room,
      userid: JSON.parse(localStorage.getItem("currentUser"))._id,
      fromdate,
      todate,
      totalamount,
      totaldays,
      token,
    };

    try {
      setloading(true);
      const result = await axios.post("/api/bookings/bookroom", bookingDetails);
      setloading(false);
      
      Swal.fire(
        "Congratulations",
        "Your Room Booked Successfully",
        "success"
      ).then((result) => {
        navigate("/profile");
      });
    } catch (error) {
      setloading(false);
      Swal.fire("OOps", "Something went wrong", "error");
    }
  }

  return (
    <div className="m-5">
      <div className="row justify-content-center mt-5 bs">
        <div className="col-md-6">
          <div>
            <h2>Booking Details</h2>
            <hr />

            <p>
              <span>
                <b>Name : </b>
              </span>
              {JSON.parse(localStorage.getItem("currentUser")).name}
            </p>
            <p>
              <span>
                <b>From Date : </b>
              </span>
              {fromdate}{" "}
            </p>
            <p>
              <span>
                <b>To Date : </b>
              </span>
              {todate}
            </p>
            <p>
              <span>
                <b>Maxcount : </b>
              </span>
              {room.maxcount}
            </p>
          </div>
          <div>
            <h3>Amount</h3>
            <hr />
            <p>
              <span>
                <b>Total days : </b>
              </span>
              {totaldays}
            </p>
            <p>
              <span>
                <b>Rent per day : </b>
              </span>
              {room.rentperday}
            </p>
            <p>
              <span>
                <b>Total Amount : </b>
              </span>
              {totalamount}
            </p>{" "}
          </div>{" "}
          <div style={{ float: "right" }}>
            {" "}
            <StripeCheckout
              amount={totalamount * 100}
              token={onToken}
              currency="PKR"
              stripeKey="pk_test_51MH5dvSJnjKaNcHxl2igmxubBMJmybKxAsOJcUS7uonGXtPBEcQSD4kauHeL3UcAfaJEl7MS3vdDAxKWhOSKlcOH00h9IQ3r0b"
            >
              <button className="btn btn-dark">Pay Now</button>
            </StripeCheckout>{" "}
          </div>{" "}
        </div>{" "}
        <div className="col-md-6">
          <h3>{room.name}</h3>{" "}
          <img
            src={room.imageurls && room.imageurls[0]}
            className="img-fluid"
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Booking;
