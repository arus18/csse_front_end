import Table from './Table';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';

function Home() {
    return (
      <div className="Home">
          <div className='m-3'>
       <Navbar bg="dark" variant="dark" className='m-10'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home"><Button variant="primary">Primary</Button></Nav.Link>
            <Nav.Link href="#features"><Button variant="primary">Primary</Button></Nav.Link>
            <Nav.Link href="#pricing"><Button variant="primary">Primary</Button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
        <Table/>
      </div>
    );
  }
  
  export default Home;