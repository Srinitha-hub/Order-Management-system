// DeleteOrder.js
import React, { useState } from "react";
import axios from 'axios';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";


function DeleteOrder() {
  const [id, setId] = useState("");


  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.delete(`http://localhost:5002/api/delete/${id}`);
      if (response) {
        alert('Deleted');
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
    </div>
  );
};


export default DeleteOrder;



