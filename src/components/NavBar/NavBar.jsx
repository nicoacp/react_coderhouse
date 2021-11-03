import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom";

const NavBar = () =>{
return(
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
    <Link className="nav-link" exact to="/"> <Navbar.Brand >sportshop</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Link className="nav-link" to="/categoria/camisetas"> camisetas</Link>
        <Link className="nav-link" to="/categoria/zapatillas">zapatillas</Link>
        <Link className="nav-link" to="/categoria/pantalones">pantalones</Link>
          <Nav.Link href="#carrito"><CartWidget/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
}
export default NavBar
