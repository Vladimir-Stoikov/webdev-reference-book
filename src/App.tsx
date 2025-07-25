import styled from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router';

const MainSt = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <>
      <Navbar />
      <MainSt>
        <Outlet />
      </MainSt>
    </>
  );
}

export default App;
