import { Wrapper } from './Sales.styled';
import { Outlet, Link } from 'react-router-dom';

const navItems = [
  { href: 'analytics', text: 'Analytics' },
  { href: 'invoices', text: 'Invoices' },
  { href: 'deposits', text: 'Deposits' },
];

export function Sales() {
  return (
    <>
      <Wrapper>
        <div>
          {navItems.map(({ href, text }) => (
            <Link to={href} key={href}>
              {text}
            </Link>
          ))}
        </div>
        <Outlet />
      </Wrapper>
    </>
  );
}
