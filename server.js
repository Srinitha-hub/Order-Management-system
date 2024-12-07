// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Orders = require('./Orders');


const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));


app.get('/api', async (req, res) => {
  try {
    const data = await Orders.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});


app.get('/api/id/:id', async (req, res) => {
  try {
    const data = await Orders.findOne({ OrderID: req.params.id });
    data ? res.status(200).send(data) : res.send('Order Not Found');
  } catch (error) {
    res.status(500).send(error);
  }
});


app.post('/api/create', async (req, res) => {
  try {
    const { OrderID, CustomerName, ProductName, Quantidy } = req.body;
    const newOrder = new Orders({ OrderID, CustomerName, ProductName, Quantidy });
    await newOrder.save();
    res.status(200).send(newOrder);
  } catch (error) {
    res.status(500).send(error);
  }
});


app.delete('/api/delete/:id', async (req, res) => {
  try {
    const data = await Orders.findOneAndDelete({ OrderID: req.params.id });
    data ? res.status(200).send('Order Deleted') : res.send('Order Not Found');
  } catch (error) {
    res.status(500).send(error);
  }
});


app.put('/api/update/:id', async (req, res) => {
  try {
    const data = await Orders.findOneAndUpdate({ OrderID: req.params.id }, { $set: { Quantidy: req.body.Quantidy } }, { new: true });
    data ? res.status(200).send('Updated Successfully') : res.send('Order Not Found');
  } catch (error) {
    res.status(500).send(error);
  }
});


app.listen(5002, () => {
  console.log('Server is running on port 5002');
});


