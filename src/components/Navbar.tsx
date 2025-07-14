import React from 'react';
import styled from 'styled-components';

const NavbarSt = styled.nav`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid white;
`;

export default function Navbar() {
  return <NavbarSt>WDRB</NavbarSt>;
}
