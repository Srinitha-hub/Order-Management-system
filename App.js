import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


// Import your components
import AddOrder from './components/AddOrder';
import UpdateOrder from './components/UpdateOrder';
import SearchOrder from './components/SearchOrder';
import DeleteOrder from './components/DeleteOrder';


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/add">Add Order</Link></li>
            <li><Link to="/search">Search Order</Link></li>
            <li><Link to="/update">Update Order</Link></li>
            <li><Link to="/delete">Delete Order</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/add" element={<AddOrder />} />
        <Route path="/search" element={<SearchOrder />} />
        <Route path="/update" element={<UpdateOrder />} />
        <Route path="/delete" element={<DeleteOrder />} />
      </Routes>
    </Router>
  );
};


export default App;

