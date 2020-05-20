import React from 'react';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
