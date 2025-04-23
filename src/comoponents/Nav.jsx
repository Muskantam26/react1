import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const TNav=()=>{
    return(
        <>
        
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Placement services</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" >Home</Nav.Link>
            <Nav.Link as={Link} to="about" >About</Nav.Link>
            <Nav.Link as={Link} to="services" >Services</Nav.Link>
            <Nav.Link as={Link} to="placement" >Placement</Nav.Link>
            <Nav.Link as={Link} to="Gallery" >Gallery</Nav.Link>
            <Nav.Link as={Link} to="contactus" >ContactUs</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default TNav;