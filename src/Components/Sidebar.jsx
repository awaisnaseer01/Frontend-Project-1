import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Homescreen from '../Pages/Homescreen';
import Login from '../Pages/Login';
import Register from '../Pages/Register';



function LeftTabsExample() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first"  >
      <Row>
        <Col sm={2} style={{border:'solid 1px silver', backgroundColor:'' }} >
          <Nav variant="pills" className="flex-column"  >
            <Nav.Item>
              <Nav.Link style={{textDecoration:'none', backgroundColor:'black', marginTop:'4rem' }} eventKey="first">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{textDecoration:'none', backgroundColor:'black', marginTop:'1rem' }} eventKey="second">Register</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{textDecoration:'none', backgroundColor:'black', marginTop:'1rem' }} eventKey="third">Login</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={8}>   
          <Tab.Content>
            <Tab.Pane eventKey="first">
            <Homescreen />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <Register />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
            <Login />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default LeftTabsExample;