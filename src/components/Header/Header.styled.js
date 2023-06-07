import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavUl = styled.ul`
  display: flex;
  gap: 40px;
  padding: 20px 90px;
  background-color: #292c33;
  font-size: 15px;
  font-weight: 700;
  position: fixed;
  height: 40px;
  overflow: auto;
  z-index: 2;
  width: 100%;
`;

export const NavItem = styled(NavLink)`
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  text-align: center;
  width: 100px;
  color: #8f95a3;
  font-size: 18px;
  line-height: 20px;
  border-bottom: 4px solid transparent;
  &.active {
    border-bottom: 4px solid #ed8032;
    color: #ed8032;
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    border-bottom: 4px solid white;
    color: white;
  }
`;

export const NavSvg = styled(NavLink)`
  text-decoration: none;
  width: 100px;
  border-bottom: 4px solid transparent;
  &.active {
    border-bottom: 4px solid #ed8032;
    color: #ed8032;
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    border-bottom: 4px solid white;
  }
`;
