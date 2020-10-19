import React from 'react';
import './CSS/App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/footer';
import Body from './Components/Body/Body';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Pages/Login/Login';

function App() {
  return (
    <Router>
        <div className="App">
          <div className="header">
            <Header />
          </div>
          <div className="body">
            <Switch>
              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Login" component={Login} />
            </Switch>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
    </Router>
  );
}

export default App;
