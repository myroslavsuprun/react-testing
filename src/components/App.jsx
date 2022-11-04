import { Routes, Route, Navigate } from 'react-router-dom';

// Global Styles
import GlobalStyle from './GlobalStyle';

// Components
import Invoices from './Invoices';
import InvoiceDetails from './InvoiceDetails';
import CustomerDetails from './CustomerDetails';
import { lazy } from 'react';

import { Home } from 'pages';

const Sales = lazy(() => {
  return import('../pages/Sales');
});

const Customers = lazy(() => {
  return import('../pages/Customers');
});

export const App = () => {
  <>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<div>Dashboard</div>} />
        <Route path="sales" element={<Sales />}>
          <Route index element={<Navigate to="invoices" />} />
          <Route path="analytics" element={<div>analytics</div>} />
          <Route path="invoices" element={<Invoices />}>
            <Route path=":invoiceId" element={<InvoiceDetails />} />
          </Route>
          <Route path="deposits" element={<div>deposits</div>} />
        </Route>
        <Route path="reports" element={<div>Reports</div>} />
        <Route path="feedback" element={<div>Feedback</div>} />
        <Route path="customers" element={<Customers />} />
        <Route
          path="customers/:customerId"
          element={<CustomerDetails />}
        />{' '}
      </Route>
    </Routes>
    <GlobalStyle />
  </>;
};
