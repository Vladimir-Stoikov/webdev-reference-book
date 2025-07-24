import styled from 'styled-components';
import './App.css';
import InfoCard from './components/InfoCard';
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
        {/* <InfoCard /> */}
        <Outlet />
      </MainSt>
    </>
  );
}

export default App;
