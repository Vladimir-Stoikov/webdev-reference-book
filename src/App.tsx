import './App.css';
import Navbar from './components/Navbar';
import data from './data/jsData.json';

function App() {
  console.log(data.lessons[0].content);

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
