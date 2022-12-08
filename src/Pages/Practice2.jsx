import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

function UncontrolledExample() {
  return (
    
    <div style={{ border: "solid 1px silver", borderRadius: "20px"}} className='container' >
    <Carousel style={{ width: '95%', height: '100%', margin: 'auto', marginTop:'1rem', marginBottom: '1rem' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ width: '65rem', height: '25rem', margin: 'auto', marginTop:'2rem' }}
          src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ width: '65rem', height: '25rem', margin: 'auto', marginTop:'2rem' }}
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
          style={{ width: '65rem', height: '25rem', margin: 'auto', marginTop:'2rem' }}
          src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
        
      </Carousel.Item>
      
    </Carousel>

    
    <Button variant="btn btn-dark">Book Now</Button>
    
    </div>
    
  );
}

export default UncontrolledExample;