import styled from 'styled-components';
import './App.css';
import InfoCard from './components/InfoCard';
import Navbar from './components/Navbar';

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
        <InfoCard />
      </MainSt>
    </>
  );
}

export default App;
