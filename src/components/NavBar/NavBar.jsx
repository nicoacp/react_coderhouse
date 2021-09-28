import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () =>{
return(
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">camisetas</Nav.Link>
          <Nav.Link href="#link">zapatillas</Nav.Link>
          <Nav.Link href="#">pantalones</Nav.Link>
          <Nav.Link href="#carrito"><CartWidget cantidad={4}/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
}
export default NavBar
