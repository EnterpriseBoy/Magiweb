import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/footer';
import Body from './Components/Body/Body';

function App() {
  return (
    <div className="App">
      <div>
      <Header/>
      </div>
      <div>
      <Body/>
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
