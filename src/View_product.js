
import Button from 'react-bootstrap/Button';
import './Table.css';
import { useEffect } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { AllInboxOutlined } from '@material-ui/icons';
import axios from "axios";

function View_product() {

    const[quantity,setQty]=useState('')
    

    const[products,setProducts]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/product/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setProducts(result);
        }
      )
      },[])

      const handleClickDel = async (id) => {
        await fetch(`http://localhost:8080/product/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {   
          window.location.reload(false);
          console.log(id);
          console.log(products);
        });
      }

      const handleClickUpdate = async (id) => {
        await fetch("http://localhost:8080/product/${id}",{
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {   
          window.location.reload(false);
          console.log(id);
          console.log(products);
        });
      }
      

  const productList = products.map(products => {
    return <tr key={products.id}>
      <td>{products.id}</td>
      <td>{products.name}</td>
      <td>{products.type}</td>
      <td>{products.price}</td>
      <td>{products.quantity}</td>
      <td>
      <ButtonGroup>
          <Button size="sm" color="primary" onClick={() => handleClickDel(products.id)}>Remove</Button>
      </ButtonGroup>
      </td>

      <td>
      <TextField id="outlined-basic" label="Current Quantity" variant="outlined" fullWidth
        value={quantity}
        onChange={(e) => setQty(e.target.value)}/>
      </td>

      <td>
      <ButtonGroup>
          <Button size="sm" color="primary" onClick={() => handleClickUpdate(products.id)}>Update</Button>
      </ButtonGroup>
      </td>

      
      
    </tr>
  });

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col align-self-start">
            <div class="input-group" id='searchb'>
              <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
              <button type="button" class="btn btn-outline-primary">search</button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col align-self-start">
            <div className='p-5 mt-5' id='tbl'>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope='col'>Type</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {productList}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default View_product;