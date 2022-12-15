import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Components.css";
import { Link } from "react-router-dom";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        
        <Navbar.Brand ><Link to = "/" style={{textDecoration:'none', color:'white'}}  >MERN ROOMS</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          
          <Nav>

            <Nav.Link className="Links" > <Link to = "/register" style={{textDecoration:'none', color:'white'}} >Register</Link></Nav.Link>
            <Nav.Link className="Links" eventKey={2}><Link to = "/login" style={{textDecoration:'none', color:'white'}} >Login</Link>
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
