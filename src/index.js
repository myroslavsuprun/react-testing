import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="react-testing">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

/*
  "/" - Home
    "/dashboard" Dashboard 
    "/sales" Sales
      - "/analytics" Analytics
      - "/invoices" Invoices 
        - /:invoiceID Invoice
      - "/deposits" Deposits
    "/reports" Reports
    "/feedback" Feedback
    "/customers" Customers
*/
