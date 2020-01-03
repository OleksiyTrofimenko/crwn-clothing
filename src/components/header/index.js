import React from 'react';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/utils';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selector';
import CartIcon from '../../components/cart-icon';
import CartDropdown from '../../components/cart-dropdown';
import { ReactComponent as Logo } from '../../images/crown.svg';

import './styles.scss';

const Header = ({ currentUser, isHidden }) => (
  <div className="header">
    <Link className="logo-container" to='/'>
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to='/shop'>
        Shop
      </Link>
      <Link className="option" to='/contact'>
        Contact
      </Link>
      {
        currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <Link className="option" to='/sign-in'>
            Sign in
          </Link>
        )
      }
      <CartIcon />
    </div>
    {!isHidden && <CartDropdown />}
  </div>
);


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isHidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
