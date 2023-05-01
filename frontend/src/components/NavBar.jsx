import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
  <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="/">
        <img src={require("../media/favicon/ring.ico")} 
          alt="" 
          width="30"
          height="30"/>
        </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/production">Production Schedule</Nav.Link>
        <Nav.Link href="/about">How Halo's Are Born</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}
export default NavBar;