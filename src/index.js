import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);