import React from 'react';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import Navbar from './components/navbar/Navbar';
import SignInAndOut from './pages/sign-in-up/SignInAndOut';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  auth,
  createUserProfileDoc,
} from './components/firebase/firebaseUtility';

import './App.css';
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // create the profile and update state
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => console.log(this.state)
          );
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <Navbar currentUser={this.state.currentUser} />

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
}

export default App;
