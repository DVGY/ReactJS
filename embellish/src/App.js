import React from 'react';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import Navbar from './components/navbar/Navbar';
import SignInAndOut from './pages/sign-in-up/SignInAndOut';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
function App() {
  return (
    <Router>
      <Navbar />

      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign" component={SignInAndOut} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
