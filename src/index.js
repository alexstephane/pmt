import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

render((
  <Router>
    <div>
      <App />
    </div>
  </Router>
), document.getElementById('root'));

reportWebVitals();
