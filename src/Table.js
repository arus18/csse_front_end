
import Button from 'react-bootstrap/Button';
import './Table.css';
import { useEffect } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Table() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const evtSource = new EventSource("http://192.168.43.209:8080/purchase_orders/orders");
    evtSource.addEventListener("order-list-event", (event) => {
      let jsonData = JSON.parse(event.data);
      if (Object.keys(jsonData).length > Object.keys(orders).length) {
        setOrders(jsonData);
      }
    });
  });

  const orderList = orders.map(order => {
    return <tr key={order.id}>
      <td>{order.id}</td>
      <td>{order.name}</td>
      <ButtonGroup>
        <Button size="sm" color="primary"><Link to={"/order/" + order.id}>Manage JUG Tour</Link></Button>
      </ButtonGroup>
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
                    <th scope="col">Name</th>
                    <th scope="col">ID</th>
                    <th scope='col'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orderList}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Table;