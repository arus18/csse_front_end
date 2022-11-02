import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import Table from './Table';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './logo.svg';
import { Link, Navigate } from 'react-router-dom';
import View_product from './View_product';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
       
      },
    },
  }));

function Add_product() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[type,setType]=useState('')
    const[price,setPrice]=useState('')
    const[quantity,setQty]=useState('')
    const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const Product={name,type,price,quantity}
    console.log(Product)
    fetch("http://localhost:8080/product/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(Product),
      //navigate ('/View_product')

  }).then(()=>{
    console.log("New product added")
  })
  
}



  return (
    
    <><div className="Add_product">
          <div className='m-3'>
              <Navbar bg="dark" variant="dark" className='m-10'>
                  <Container>
                      <Navbar.Brand href="#home">
                          <img
                              alt=""
                              src={logo}
                              width="30"
                              height="30"
                              className="d-inline-block align-top" />{' '}
                          React Bootstrap
                      </Navbar.Brand>
                      <Nav className="justify-content-end">
                          <Nav.Link href="#home"><Button variant="primary">Primary</Button></Nav.Link>
                          <Nav.Link href="#features"><Button variant="primary">Primary</Button></Nav.Link>
                          <Nav.Link href="#pricing"><Button variant="primary">Primary</Button></Nav.Link>
                          <Nav.Link><Button><Link to={"/View_product"}>View Product</Link></Button></Nav.Link>
                      </Nav>
                  </Container>
              </Navbar>
          </div>
      </div><Container>
              <Paper elevation={3} style={paperStyle}>
                  <h1 style={{ color: "blue" }}><u>Add Product</u></h1>

                  <form className={classes.root} noValidate autoComplete="off">

                      <TextField id="outlined-basic" label="Product Name" variant="outlined" fullWidth
                          value={name}
                          onChange={(e) => setName(e.target.value)} />
                      <TextField id="outlined-basic" label="Material Type" variant="outlined" fullWidth
                          value={type}
                          onChange={(e) => setType(e.target.value)} />
                      <TextField id="outlined-basic" label="Price" variant="outlined" fullWidth
                          value={price}
                          onChange={(e) => setPrice(e.target.value)} />
                      <TextField id="outlined-basic" label="Material Quantity" variant="outlined" fullWidth
                          value={quantity}
                          onChange={(e) => setQty(e.target.value)} />
                      <Button variant="contained" color="secondary" onClick={handleClick}>
                          Submit
                      </Button>
                  </form>

              </Paper>
              



          </Container></>
  );
}
export default Add_product;
