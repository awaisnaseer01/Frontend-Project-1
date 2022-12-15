import React from "react";

function Booking(props) {
  return (
    <div className="m-5">
      <div
        className="row justify-content-center mt-5 mb-10"
        style={{ boxShadow: "1px 2px 9px #C0C0C0" }}
      >
        <div className="col-md-6">
          <h1>Delux room</h1>
          <img
            alt=""
            className="bigimg"
            style={{
              width: "100%",
              height: "80%",
            }}
            src="https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg"
          />
        </div>

        <div className="col-md-6">
          <div style={{ textAlign: "right" }}>
            <b>
              <h1> Booking Details</h1>
              <hr />
              <p>Name: </p>
              <p>From Date: </p>
              <p> To Date: </p>
            </b>
          </div>

          <div style={{ textAlign: "right" }}>
            <b>
              <h1> Amount</h1>
              <hr />
              <p> Total Days: </p>
              <p> Rent Per Day: </p>
              <p> Total Amount: </p>
            </b>
          </div>

          <div style={{ float: "right" }}>
            <button className="btn btn-dark  mb-3">Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
