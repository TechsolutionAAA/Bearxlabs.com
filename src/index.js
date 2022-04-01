import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/theme.css';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


ReactDOM.render(
  <BrowserRouter>
      <App />
    </BrowserRouter>
  ,document.getElementById('root')
);
