import { Routes, Route } from 'react-router-dom';

// Global Styles
import GlobalStyle from './GlobalStyle';

// Components
import { Home, Sales } from 'pages';
import Invoices from './Invoices';
import InvoiceDetails from './InvoiceDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="sales" element={<Sales />}>
            <Route path="analytics" element={<div>analytics</div>} />
            <Route path="invoices" element={<Invoices />}>
              <Route path=":invoiceId" element={<InvoiceDetails />} />
            </Route>
            <Route path="deposits" element={<div>deposits</div>} />
          </Route>
          <Route path="reports" element={<div>Reports</div>} />
          <Route path="feedback" element={<div>Feedback</div>} />
          <Route path="customers" element={<div>Customers</div>} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
