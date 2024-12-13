//Importing required modules
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
        <Navbar>
          <Container large>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="/browse">Browse</Nav.Link>
              <Nav.Link href="/post">Post</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
  );
};

export default NavigationBar;