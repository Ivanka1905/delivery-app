import React from 'react';
import { NavItem, NavUl } from './Header.styled';

function Header() {
  return (
    <header>
      {/* <img src={icon} alt='logo' width={32} height={32}/> */}
      <nav>
        <NavUl>
          <li>
          <NavItem to="/">logo</NavItem>
        </li>
        <li>
          <NavItem to="shops">shop</NavItem>
        </li>
        <li>
          <NavItem to="order">order</NavItem>
        </li>
      </NavUl>
    </nav>
    </header>
  );
}

export default Header;
