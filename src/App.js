import React from 'react';
import Home from './components/Home';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <Router>
      
        <Home />
    
    </Router>
  );
}

export default App;
