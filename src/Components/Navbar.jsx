import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Components.css";
import { Link, useNavigate } from "react-router-dom";

function CollapsibleExample() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));
  function logout() {
    localStorage.removeItem("currentUser");
    navigate("/login");
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand>
          {user ? (
            <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
              MERN ROOMS
            </Link>
          ) : (
            <span style={{ color: "white" }}>MERN ROOMS</span>
          )}
        </Navbar.Brand>

        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          {!user ? (
            <Nav>
              {" "}
              <Nav.Link className="Links">
                {" "}
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Register
                </Link>
              </Nav.Link>
              <Nav.Link className="Links" eventKey={2}>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </Link>
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <div class="dropdown">
                <button
                  class="btn btn-dark dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-user"></i> {user.name}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link to="/profile" className="dropdown-item">
                    profile
                  </Link>

                  <a class="dropdown-item" href="#" onClick={logout}>
                    Logout
                  </a>
                </div>
              </div>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
