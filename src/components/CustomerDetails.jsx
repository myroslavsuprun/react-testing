import { Link, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCustomerById } from 'fakeApi';

const CustomerDetails = () => {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getCustomerById(Number(customerId)).then(setCustomer);
  }, [customerId]);

  if (!customer) {
    return null;
  }

  const { id, name } = customer;
  const backLinkHref = location.state?.from ?? '/customers';

  return (
    <main>
      <Link to={backLinkHref}>BACK TO CUSTOMERS</Link>
      <p>Username: {name}</p>
      <p>ID: {id}</p>
    </main>
  );
};

export default CustomerDetails;
