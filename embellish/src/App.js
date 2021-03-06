import React from 'react';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import Navbar from './components/navbar/Navbar';
import CheckoutPage from './pages/checkout/CheckoutPage';
import SignInAndOut from './pages/sign-in-up/SignInAndOut';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/userSelector';
// import { selectCollectionForPreview } from './redux/shop/shopSelector';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/actions';

import {
  auth,
  createUserProfileDoc,
  // addCollectionAndDocuments,
} from './components/firebase/firebaseUtility';

import './App.css';
class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;
    console.log(collectionsArray);
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // create the profile and update state
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
      // addCollectionAndDocuments(
      //   'collections',
      //   collectionsArray.map(({ title, items }) => ({ title, items }))
      // );
    });
  }
  componentWillUnmount() {
    console.log('Compnnet umountef!!');
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <Navbar />

        <div className="App">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/sign"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <SignInAndOut />
              }
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser,
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
