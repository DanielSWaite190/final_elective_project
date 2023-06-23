import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import * as React from "react";
import { Link } from "react-router-dom";

// function NavBar() {
//   return (
//   <Navbar bg="light" variant="light">
//     <Container>
//       <Navbar.Brand href="/">
//         <img src={require("../media/favicon/ring.ico")} 
//           alt="" 
//           width="30"
//           height="30"/>
//         </Navbar.Brand>
//       <Nav className="me-auto">
//         <div id="now">
//           <div className='left'>
//             <Nav.Link href="/production">Production Schedule</Nav.Link>
//             <Nav.Link href="/about">How Halo's Are Born</Nav.Link>
//           </div>
//           <div id='test'>
//             <div className='right'>
//               <Nav.Link href="/login">Login</Nav.Link>
//               <Nav.Link href="/register">Register</Nav.Link>
//             </div>
//           </div>
//         </div>
//       </Nav>
//     </Container>
//   </Navbar>
//   );
// }

function NavBar() {
  return (
    <div>
      <Link to={'production'}>Production</Link>  
      <Link to={'login'}>Login</Link>
      <Link to={'register'}>Register</Link>  
    </div>
  );
}

export default NavBar;  