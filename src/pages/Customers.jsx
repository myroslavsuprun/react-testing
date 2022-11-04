// import

import SearchBox from 'components/SearchBox';
import { getCustomers } from 'fakeApi';
import { useEffect, useState, useMemo } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterQuery = searchParams.get('filter') ?? '';
  const location = useLocation();

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, []);

  function changeFilter(value) {
    setSearchParams(value !== '' ? { filter: value } : {});
  }

  const filteredCustomers = useMemo(
    () =>
      customers.filter(customer =>
        customer.name.toLowerCase().includes(filterQuery.toLowerCase())
      ),
    [filterQuery, customers]
  );

  return (
    <main>
      <SearchBox changeFilter={changeFilter} filterQuery={filterQuery} />
      {filteredCustomers.length >= 1 && (
        <ul>
          {filteredCustomers.map(({ id, name }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};
