import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const NavigationBar = () => {
  return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary" >
          <Container large>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="/browse">Browse</Nav.Link>
              <Nav.Link href="/post">Post</Nav.Link>
            </Nav>
            <Button href="/signin"variant="outline-success">Sign In</Button>
            </Navbar.Collapse>
          </Container>
      </Navbar>
  );
};

export default NavigationBar;