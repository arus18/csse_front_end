
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../logo.svg';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
  return (
    <div>
         <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            LOGO
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home"><Button variant="primary">Primary</Button></Nav.Link>
            <Nav.Link href="#features"><Button variant="primary">Primary</Button></Nav.Link>
            <Nav.Link href="#pricing"><Button variant="primary">Primary</Button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
