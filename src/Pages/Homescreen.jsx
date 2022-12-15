import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

// <-----------------------Function for Card on home page----------------->
const Homescreen = () => {
  // map method for array images

  // const arr = ['']

  // arr.map(
  //   <BasicExample val = {val.image }/>
  // )
  return (
    <>
      {/* <------Welcome Heading------>   */}

      <h1 className="mt-4">
        "<u>Mern - Rooms</u>"
      </h1>
        

      {/* ------------------range picker----------- */}

      <div className="row">
        <div className="col-md-3">
        <RangePicker />
        </div>

      </div>

      <BasicExample
        title="Delux Room"
        cardText="This is our Delux room, which is one of the most favourite rooms of our customer. For further details about this room. Click on the View Details Button. "
        cardimg="https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/5f5a6e0d12749.jpg/1920x1080/fit/80/86e685af18659ee9ecca35c465603812.jpg"
        modalText="This is our Delux room, which is the one of the favourite rooms of our
        customers."
      />
      <BasicExample
        title="Sweet Room"
        cardText="This is our Sweet room, which is one of the most favourite rooms of our customer. For further details about this room. Click on the View Details Button. "
        cardimg="http://cdn.cnn.com/cnnnext/dam/assets/140127103345-peninsula-shanghai-deluxe-mock-up.jpg"
        modalText="hello"
      />
      <BasicExample
        title="Economy Room"
        cardText="This is our Economy room, which is one of the most favourite rooms of our customer. For further details about this room. Click on the View Details Button. "
        cardimg="https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg"
      />

<Footer />
    </>
  );
};

function BasicExample(props) {
  const [modalShow, setModalShow] = React.useState(false);
  let images = ["URL"];
  return (
    <div>
      {/* <---------1st Card-----> */}

      <Card
        className="mt-5 mb-5"
        style={{
          width: "70rem",
          height: "37rem",
          margin: "auto",
          boxShadow: "1px 2px 9px #C0C0C0",
        }}
      >
        <Card.Img
          variant="top"
          style={{
            width: "60rem",
            height: "25rem",
            margin: "auto",
            marginTop: "2rem",
          }}
          src={props.cardimg}
        />

        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.cardText}
            <div style={{ marginTop: "1rem" }}>
              <Link to="/booking">
                <Button style={{ marginRight: "1rem" }} variant="btn btn-dark">
                  Book Room
                </Button>
              </Link>
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
                images={images}
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
  console.log("props", props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ height: "100%", width: "100%" }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <b> Mern - Rooms </b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>
          {props.modalText}
        </h4>
        <div
          style={{ border: "solid 1px silver", borderRadius: "20px" }}
          className="container"
        >
          {/* <----Carosuel in Modal----> */}

          <Carousel
            style={{
              width: "100%",
              height: "80%",
              margin: "auto",
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
                  borderRadius: "13px",
                }}
                // src={images[0]}
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
                  borderRadius: "13px",
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
                  borderRadius: "13px",
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
        <Link to="/booking">
          <Button variant="btn btn-dark">Book Now</Button>
        </Link>
        <Button variant="btn btn-dark" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>





  );
}


export default Homescreen;
