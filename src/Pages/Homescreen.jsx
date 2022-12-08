import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

// <-----------------------Function for Card on home page----------------->
const Homescreen = () => {
  return(
    <>
    {/* <------Welcome Heading------>   */}

    <h1 style={{ marginTop: "4rem" }}>
        "<u>Mern - Rooms</u>"
      </h1>

      <BasicExample title="Sweet Room" cardText="This is sweet room, which is one of the most favourite rooms of our customer. For further details about this room. Click on the View Details Button. " />
      <BasicExample title="Card Title" cardText="Awais Lawa"/>
    </>
  );
}




function BasicExample(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      

      {/* <---------1st Card-----> */}

      <Card
        style={{
          width: "70rem",
          height: "37rem",
          margin: "auto",
          marginTop: "4rem",
          marginBottom: "4rem",
          boxShadow: "1px 2px 9px #C0C0C0",
        }}
      >
        <Card.Img
          className=""
          variant="top"
          style={{
            width: "65rem",
            height: "25rem",
            margin: "auto",
            marginTop: "2rem",
          }}
          src="https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg" />
        
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.cardText}
            <div style={{ marginTop: "1rem" }}>
              <Button style={{ marginRight: "1rem" }} variant="btn btn-dark">
                Book Room
              </Button>
              <Button
                style={{ marginLeft: "1rem" }}
                variant="btn btn-dark"
                onClick={() => setModalShow(true)}
              >
                View Details
              </Button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

// <----------------------------------Function for Modal in view details--------------------->

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         <b> Mern - Rooms </b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>This is our Delux room, which is the one of the favourite rooms of our customers.</h4>
        <div
          style={{ border: "solid 1px silver", borderRadius: "20px" }}
          className="container"
        >
          {/* <----Carosuel in Modal----> */}

          <Carousel
            style={{
              width: "100%",
              height: "100%",
              margin: "auto",
              marginBottom: "1rem",
            
            }}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{
                  width: "65rem",
                  height: "28rem",
                  margin: "auto",
                  marginTop: "1rem",
                  borderRadius:"13px"
                }}
                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{
                  width: "65rem",
                  height: "28rem",
                  margin: "auto",
                  marginTop: "1rem",
                  borderRadius:"13px"
                }}
                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{
                  width: "65rem",
                  height: "28rem",
                  margin: "auto",
                  marginTop: "1rem",
                  borderRadius:"13px"
                  
                }}
                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          
        </div>
      </Modal.Body>
      <Modal.Footer>
      <Button  variant="btn btn-dark">Book Now</Button>
        <Button variant="btn btn-dark" onClick={props.onHide}>Close</Button>
        
      </Modal.Footer>
    </Modal>
  );
}

export default Homescreen;