import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

const NavbarSt = styled.nav`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid white;
`;

const H1St = styled.h1`
  color: white;
`;

const UlSt = styled.ul`
  list-style: none;
`;

const LinkSt = styled(Link)`
  color: white;
  text-decoration: none;
`;

export default function Navbar() {
  return (
    <NavbarSt>
      <Link to='/'>
        <H1St>WDRB</H1St>
      </Link>
      <UlSt>
        <li>
          <LinkSt to='/javascript'>JavaScript</LinkSt>
        </li>
      </UlSt>
    </NavbarSt>
  );
}
