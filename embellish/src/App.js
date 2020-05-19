import React from 'react';
import Homepage from './pages/homepage/Homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HatsPage </h1>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/hats" component={HatsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
