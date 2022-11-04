import { Routes, Route, Navigate } from 'react-router-dom';

// Global Styles
import GlobalStyle from './GlobalStyle';

// Components
import Invoices from './Invoices';
import InvoiceDetails from './InvoiceDetails';
import CustomerDetails from './CustomerDetails';
import { lazy } from 'react';

// Як було без lazy load
import { Home, Customers, Sales } from 'pages';

// --------------------------------

// Як хочу з Lazy Load
import { Home } from 'pages';

const { Sales, Customers } = lazy(async () => {
  const { Sales, Customers } = await import('../pages/index');
  return { Sales, Customers };
});

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="sales" element={<Sales />}>
            <Route index element={<Invoices />} />
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
    </>
  );
};
