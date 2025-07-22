import React from 'react';
import { NavLink } from 'react-router';
import styled from 'styled-components';

const MainSt = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionSt = styled.section`
  width: 30%;
  height: 30%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border: solid 3px white;
  border-radius: 20px;
  box-shadow: 10px 10px 10px rgba(50, 50, 50, 0.5);
  background: linear-gradient(46deg, rgba(34, 34, 34, 1) 0%, rgba(34, 34, 34, 1) 20%, #444444 52%, #3a3a3a 75%, rgba(34, 34, 34, 1) 100%);
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 8%;
  right: 5%;
  color: white;
  font-size: 2rem;
  &:hover {
    transform: scale(1.1);
  }
  transition: all 0.1s ease;
`;

export default function NotFoundPage() {
  return (
    <MainSt>
      <SectionSt>
        <NavLink to='/'>
          <CloseBtn>🗙</CloseBtn>
        </NavLink>
        <h1>404 Error</h1>
        <p>This page doesn't exist</p>
      </SectionSt>
    </MainSt>
  );
}
