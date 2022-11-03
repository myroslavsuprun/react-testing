// Icons
import {
  BsStack,
  BsWalletFill,
  BsBriefcaseFill,
  BsChatLeftTextFill,
  BsPersonLinesFill,
} from 'react-icons/bs';

import { NavItem } from './AppBar.styled';

const navItems = [
  { href: 'dashboard', text: 'Dashboard', icon: BsStack },
  { href: 'sales', text: 'Sales', icon: BsWalletFill },
  { href: 'reports', text: 'Reports', icon: BsBriefcaseFill },
  { href: 'feedback', text: 'Feedback', icon: BsChatLeftTextFill },
  { href: 'customers', text: 'Customers', icon: BsPersonLinesFill },
];

function AppBar() {
  return (
    <div>
      {navItems.map(({ href, text, icon: Icon }) => (
        <NavItem key={href} to={href}>
          <Icon size="16" />
          {text}
        </NavItem>
      ))}
    </div>
  );
}

export default AppBar;
