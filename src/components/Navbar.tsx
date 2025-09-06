import React, { useState } from 'react';
import { NavLink } from 'react-router';
import styled from 'styled-components';

const NavbarSt = styled.nav`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid white;
`;

const H1St = styled.h1`
  color: white;
  font-size: 2rem;
  text-shadow: none;
`;

const UlSt = styled.ul`
  list-style: none;
  display: flex;
  gap: 3rem;
  margin-top: 0.5rem;
  font-size: 1.5rem;
`;

const NavLinkSt = styled(NavLink)`
  color: white;
  text-decoration: none;
  &.active {
    font-size: 1.6rem;
    font-weight: bold;
    color: black;
    text-shadow: 2px 0 white, 0 2px white, -2px 0 white, 0 -2px white;
  }
`;

export default function Navbar() {
  return (
    <NavbarSt>
      <NavLinkSt to='/'>
        <H1St>WDRB</H1St>
      </NavLinkSt>
      <UlSt>
        <li>
          <NavLinkSt className={({ isActive }) => (isActive ? 'active ' : '')} to='/javascript'>
            JavaScript
          </NavLinkSt>
        </li>
        <li>
          <NavLinkSt className={({ isActive }) => (isActive ? 'active ' : '')} to='/typescript'>
            TypeScript
          </NavLinkSt>
        </li>
        <li>
          <NavLinkSt className={({ isActive }) => (isActive ? 'active ' : '')} to='/react'>
            React
          </NavLinkSt>
        </li>
        <li>
          <NavLinkSt className={({ isActive }) => (isActive ? 'active ' : '')} to='/exercises'>
            Exercises
          </NavLinkSt>
        </li>
      </UlSt>
    </NavbarSt>
  );
}
