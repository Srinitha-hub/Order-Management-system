// SearchOrder.js
import React, { useState } from "react";
import axios from 'axios';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";


function SearchOrder() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);


  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.get(`http://localhost:5002/api/id/${id}`);
      if (response) {
        setData(response.data);
      } else {
        alert('Not Found');
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
          <Input type="text" placeholder="Enter Id" value={id} onChange={(e) => setId(e.target.value)} />
        </FormGroup>
        <Button color="primary" type="submit">Submit</Button>
      </Form>
      {data && <div>
        <p>{data.OrderID}</p>
        <p>{data.CustomerName}</p>
        <p>{data.ProductName}</p>
        <p>{data.Quantidy}</p>
        <p>{data.Date}</p>
      </div>}
    </div>
  );
};


export default SearchOrder;
