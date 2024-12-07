// AddOrder.js
import React, { useState } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";


function AddOrder() {
  const [data, sendData] = useState({
    OrderID: "",
    CustomerName: "",
    ProductName: "",
    Quantidy: 0
  });


  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:5002/api/create", data);
      if (response) {
        alert('Added Successfully');
      } else {
        alert('Cannot add');
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Order Id: </Label>
          <Input type="text" placeholder="Enter Id" value={data.OrderID} onChange={(e) => sendData({ ...data, OrderID: e.target.value })} />
        </FormGroup>
        <FormGroup>
          <Label>Customer Name: </Label>
          <Input type="text" placeholder="Enter Customer Name" value={data.CustomerName} onChange={(e) => sendData({ ...data, CustomerName: e.target.value })} />
        </FormGroup>
        <FormGroup>
          <Label>Product Name: </Label>
          <Input type="text" placeholder="Enter Product Name" value={data.ProductName} onChange={(e) => sendData({ ...data, ProductName: e.target.value })} />
        </FormGroup>
        <FormGroup>
          <Label>Quantidy: </Label>
          <Input type="number" placeholder="Enter Quantidy" value={data.Quantidy} onChange={(e) => sendData({ ...data, Quantidy: e.target.value })} />
        </FormGroup>
        <Button color="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
};


export default AddOrder;
