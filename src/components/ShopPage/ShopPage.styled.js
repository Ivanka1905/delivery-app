import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavUl = styled.ul`
margin: 0;
padding-top: 110px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  aling-items: center;
  justify-content: start;
  gap: 20px;
`;

export const NavItem = styled(NavLink)`
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
  text-decoration: none;
  text-align: center;
  width: 180px;
  height: 25px;
  color: #8f95a3;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.4;
 border: 4px solid transparent;
  &.active {
    border: 4px solid #ed8032;
    color: #ed8032;
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
   border: 4px solid #8f95a3;
    color: #8f95a3;
  }
`;