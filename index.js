// app/index.js

// Sample order data, could be dynamic or fetched from an API in a real-world scenario
const orders = [
  { id: 1, customer: "John Doe", totalAmount: 250, status: "Shipped" },
  { id: 2, customer: "Jane Smith", totalAmount: 450, status: "Processing" },
  { id: 3, customer: "Alice Johnson", totalAmount: 320, status: "Delivered" },
  { id: 4, customer: "Bob Brown", totalAmount: 150, status: "Pending" }
];

// Log the order data to the console for debugging or inspection
console.log("Orders List:", orders);

// Export the orders array for use in other parts of the application
export default orders;
