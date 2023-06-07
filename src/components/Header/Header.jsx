import React from 'react';
import { NavItem, NavSvg, NavUl } from './Header.styled';
import { ReactComponent as Logo } from '../../images/logo.svg';

function Header() {
  return (
    <header>
      <nav>
        <NavUl>
          <li>
            <NavSvg to="/">
              <Logo />
            </NavSvg>
          </li>
          <li>
            <NavItem to="shops">Shop</NavItem>
          </li>
          <li>
            <NavItem to="order">Order</NavItem>
          </li>
        </NavUl>
      </nav>
    </header>
  );
}

export default Header;
