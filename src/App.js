import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Contacts from './components/Contacts';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <Contacts />
      </div>
    </>
  );
}

export default App;
