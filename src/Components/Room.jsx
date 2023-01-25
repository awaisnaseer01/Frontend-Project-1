import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function Room({ roomss , fromdate , todate , totaldays}) {
  const [show, setShow] = useState(false);

  // handleshow function is use for display the modal popup
  // handleclose function is use to hide modal popup

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log("roomss", roomss  );
  return (
    // maindiv

    <div className="row bs">
      <div className="col-md-4">
        <img src={roomss.imageurls[0]} className="smallimg" />
      </div>

      <div className="col-md-7 text-left">
        <h1>{roomss.name}</h1>
        <h1>{roomss._id}</h1>
        <b>
          <p>Max Count : {roomss.maxcount}</p>
          <p>Phone Number : {roomss.phonenumber}</p>
          <p>Type : {roomss.type}</p>
        </b>

        <div style={{ float: "right" }}>
        {(fromdate && todate ) && (<Link to= "/booking" state={{ id: roomss._id , fromdate: fromdate, todate: todate , totaldays: totaldays}} >
        <button className="btn btn-dark m-2">Book Now</button>
      </Link>)}
          
          <button className="btn btn-dark " onClick={handleShow}>
            View Details
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{roomss.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {roomss.imageurls.map((url) => {
              return (
                <Carousel.Item>
                  <img className="d-block w-100 bigimg" src={url} />
                </Carousel.Item>
              );
            })}
          </Carousel>

          <p> {roomss.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="btn btn-dark"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Room;
