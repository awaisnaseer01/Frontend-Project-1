import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '70rem', height: '37rem', margin: 'auto', marginTop:'4rem', marginBottom: '4rem', boxShadow: '1px 2px 9px #C0C0C0' }}>
      <Card.Img className='' variant="top"  style={{ width: '65rem', height: '25rem', margin: 'auto', marginTop:'2rem' }} src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <div style={{marginTop:'1rem'}}>
        <Button style={{marginRight:'1rem'}} variant="btn btn-dark">Book Room</Button>
        <Button style={{marginLeft:'1rem'}} variant="btn btn-dark">View Details</Button>
        </div>
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default BasicExample;