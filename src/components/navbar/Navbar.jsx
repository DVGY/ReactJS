import React from 'react';
import CartDropdown from '../cart-dropdown/CartDropdown';
import CartIcon from '../cart-icon/CartIcon';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './navbar-style';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cartSelector';
import { selectCurrentUser } from '../../redux/user/userSelector';
import { auth } from '../firebase/firebaseUtility';
import { connect } from 'react-redux';
//This currentUser prop is coming from the state.someSlice
const Navbar = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink className="option" to="/contact">
          CONTACT
        </OptionLink>

        {currentUser ? (
          <OptionLink
            as="div"
            className="option"
            onClick={() => auth.signOut()}
          >
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink className="option" to="/sign">
            SING IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

//this state is top level root reducer so inside rootReducer we have key user ,access it and make it availabe to Navbar Component
// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden,
// });

/**Channging abpve to this */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Navbar);
