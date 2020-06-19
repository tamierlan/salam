import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { SalamProvider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';


ReactDOM.render(
  <SalamProvider>
    <Router>
      <App />
    </Router>
  </SalamProvider>,
  document.getElementById('root'));
