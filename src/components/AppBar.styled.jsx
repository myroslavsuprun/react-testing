import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  display: block;
  max-width: 120px;
  color: black;
  padding: 8px;
  background-color: white;

  text-decoration: none;
  &.active {
    background-color: lightblue;
    color: blueviolet;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: blueviolet;
  }
`;
