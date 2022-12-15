import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";




// <----------------------------------Function for Modal in view details--------------------->

function MyVerticallyCenteredModal(props) {
    console.log("props", props)
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{height:'100%', width:'100%'}}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <b> Mern - Rooms </b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>
            This is our Delux room, which is the one of the favourite rooms of our
            customers.
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
  <Link to='/booking'>
  <Button variant="btn btn-dark">Book Now</Button>
  </Link>
          <Button variant="btn btn-dark" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }


  export default MyVerticallyCenteredModal