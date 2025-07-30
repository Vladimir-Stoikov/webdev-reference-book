import React from 'react';
import { Link } from 'react-router';
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
`;

const UlSt = styled.ul`
  list-style: none;
  display: flex;
  gap: 3rem;
  margin-top: 0.5rem;
  font-size: 1.5rem;
`;

const LinkSt = styled(Link)`
  color: white;
  text-decoration: none;
`;

export default function Navbar() {
  return (
    <NavbarSt>
      <LinkSt to='/'>
        <H1St>WDRB</H1St>
      </LinkSt>
      <UlSt>
        <li>
          <LinkSt to='/javascript'>JavaScript</LinkSt>
        </li>
        <li>
          <LinkSt to='/typescript'>TypeScript</LinkSt>
        </li>
      </UlSt>
    </NavbarSt>
  );
}
