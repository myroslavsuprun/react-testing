import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getInvoices } from 'fakeApi';
import { Wrapper } from './Invoices.styled';

function Invoices() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getInvoices().then(setInvoices);
  }, []);

  return (
    <Wrapper>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {invoices.map(({ id }) => (
          <Link to={`${id}`} key={id}>
            {id}
          </Link>
        ))}
      </div>
      <Outlet />
    </Wrapper>
  );
}

export default Invoices;
