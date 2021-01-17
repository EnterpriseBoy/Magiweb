import React from 'react';
import './CSS/App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/footer';
import Events from './Components/Pages/Events/Events/Events';
import Home from './Components/Pages/Home/Home'
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
              <Route path="/Events" component={Events} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Login" component={Login} />
              <Route exact path="/" component={Home} />
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
