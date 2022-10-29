import Button from 'react-bootstrap/Button';
import './Table.css'; 
import { ButtonGroup } from 'react-bootstrap';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './logo.svg';


function Order() {

  let { orderId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(()=>{
    fetch(`http://192.168.43.209:8080/purchase_orders/order/${orderId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
        .then(response => response.json())
        .then(data => {setItems(data.items)
        });
  },[]);

  const itemList = items.map(item => {
      return <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <ButtonGroup>
          <Button size="sm" color="primary" onClick={() => remove(item.id)}>Edit</Button>
      </ButtonGroup>
    </tr>
  });

  const remove = async (id) => {
    await fetch(`http://localhost:8080/order_items/delete_item/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      items.forEach(item => {if(item.id === id){
        var index = items.indexOf(item);
        console.log(index);
        if (index !== -1) {
        items.splice(index, 1);
      }
      }});
      window.location.reload(false);
      console.log(id);
      console.log(items);
    });
  }
  
  
    
  return (
    <>
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
    <div className='p-5 m-5' id='tbl'>
    <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">ID</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
      {itemList}
  </tbody>
</table>
    </div>
    </>
  );
}

export default Order;