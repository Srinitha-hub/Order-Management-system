// UpdateOrder.js
import React, { useState } from "react";
import axios from 'axios';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";


function UpdateOrder() {
  const [id, setId] = useState("");
  const [q, setQ] = useState(null);


  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.put(`http://localhost:5002/api/update/${id}`, { Quantidy: q });
      if (response) {
        alert('Updated');
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
        <FormGroup>
          <Label>Updated Quantidy: </Label>
          <Input type="number" placeholder="Enter Quantidy" value={q} onChange={(e) => setQ(e.target.value)} />
        </FormGroup>
        <Button color="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
};


export default UpdateOrder;


