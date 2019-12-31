import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/utils';
import { ReactComponent as Logo } from '../../images/crown.svg'

import './styles.scss';

const Header = ({ currentUser }) => (
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
    </div>
  </div>
);

export default Header;
